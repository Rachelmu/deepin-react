export const getDataByPath = (obj, url) => {
  if (!obj) return obj
  const keys = url.split('.'),
    reg = /\[.+\]/
  let target = obj[keys.shift()]
  for (let i = 0, len = keys.length; i < len; i++) {
    let currentKey = keys.shift()
    if (currentKey.match(reg)) {
      let arrIndex = parseInt(currentKey.match(reg)[0].slice(1, -1))
      currentKey = currentKey.slice(0, currentKey.indexOf('['))
      target[currentKey] ? target = target[currentKey][arrIndex] : null
    } else if (target) {
      target = target[currentKey]
    } else {
      return target
    }
  }
  return target
}