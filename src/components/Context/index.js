import React, { createContext, Component, Fragment } from 'react'

const NameContext = createContext('jeden')

class Inner extends Component {
  static contextType = NameContext
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <Fragment>
        Inner
      </Fragment>
    )
  }
}

class ContextExp extends Component {
  render() {
    return (
      <NameContext.Provider value={{ name: 'jeden' }}>
        <Inner />
      </NameContext.Provider>
    )
  }
}


export default ContextExp