import React, { Component } from 'react';
import ReactDOM from 'react-dom'


function debounce(fn, t) {
  let timer
  return (...rest) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...rest)
      }, t);
    } else {
      timer = null
    }
  }
}
class App extends Component {
  state = {
    a: 1
  }

  add = debounce(() => {
    console.log(1)
  }, 1000)

  render() {
    const { a } = this.state
    return (
      <div>

        <div>{a}</div>
        <button onClick={debounce(function () {
          console.log(3)
        }, 1000)}>addddd</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
