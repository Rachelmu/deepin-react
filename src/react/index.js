let nextUnitOfWork = null,
  wipRoot = null,
  currentRoot = null,
  deletions = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

function commitRoot() {
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}


function performUnitOfWork(fiber) {
  if (!fiber.dom) fiber.dom = createDom(fiber)
  // if (fiber.parent) fiber.parent.dom.appendChild(fiber.dom)
  
  const elements = fiber.props.children
  reconcileChildren(fiber, elements)
  let index = 0, prevSibling = null
  while (index < elements.length) {
    const element = elements[index]
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    }
    if (index === 0) fiber.child = newFiber
    else prevSibling.sibling = newFiber
    prevSibling = newFiber
    index ++
  }
  if (fiber.child) return fiber.child
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) return nextFiber.sibling
    nextFiber = nextFiber.parent
  }
}

function reconcileChildren(wipFiber, elements) {
  let index = 0,
    oldFiber = wipFiber.alternate && wipFiber.alternate.child,
    prevSibling = null
  while (index < elements.length || oldFiber) {
    const element = elements[index]
    let newFiber = null
    const isSameType = oldFiber && element && element.type === oldFiber.type
    if (isSameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: 'UPDATE'
      }
    }
    if (element && !isSameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: 'PLACEMENT'
      }
    }
    if (oldFiber && !isSameType) {
      oldFiber.effectTag = "DELETE"
      deletions.push(oldFiber)
    } 
    if (oldFiber) oldFiber = oldFiber.sibling
    index ++
  }
}



const isProperty = key => key !== children && !isEvent(key),
  isNew = (prev, next) => key => prev[key] === next[key],
  isGone = (prev, next) => key => !(key in next),
  isEvent = key => key.startsWith('on')

function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps).filter(isEvent).filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key)).forEach(name => {
    const eventType = name.toLowerCase().substring(2)
    dom.removeEventListener(eventType, prevProps[name])
  })
  Object.keys(prevProps).filter(isProperty).filter(isGone(prevProps, nextProps)).forEach(name => dom[name] = '')
  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(name => dom[name] = nextProps[name])

  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(name => {
    const eventType = name.toLowerCase().substring(2)
    dom.addEventListener(eventType, prevProps[name])
  })
}

function commitWork(fiber) {
  if (!fiber) return
  const domParent = fiber.parent.dom
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) domParent.appendChild(fiber.dom)
  else if (fiber.effectTag === 'DELETE') domParent.removeChild(fiber.dom)
  else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}






function createTextElement(text) {
  return {
    type: "text_element",
    props: {
      nodeValue: text,
      children: []
    }
  }
}
function createElement(type, props, ...child) {
  return {
    type,
    props: {
      ...props,
      children: child.map(child => typeof child === 'object' ? child : createTextElement(child))
    }
  }
}

function createDom(fiber) {
  const dom = fiber.type === 'text_element' ? document.createTextNode('') : document.createElement(fiber.type)

  const isProperty = key => key !== 'children'
  Object.keys(fiber.props).filter(isProperty).forEach(name => dom[name] = fiber.props[name])
  // jsx.props.children.forEach(child => {
  //   render(child, dom)
  // });
  return dom
}

function render(jsx, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [jsx]
    },
    alternate: currentRoot
  }
  deletions = []
  nextUnitOfWork = wipRoot
}


export default {
  createElement,
  render
}