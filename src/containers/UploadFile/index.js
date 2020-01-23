import React, { Component, Fragment } from 'react'
import { Button } from 'antd'

import { request } from '@/utils/httpUtils'

const sliceLength = 10
class UploadFile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      data: []
    }

  }

  handleChange = () => {

  }

  handleUpload = () => {

  }

  createFileChunk = (file, length = sliceLength) => {
    const fileChunkList = [],
      chunkSize = Math.ceil(file.size / length)
    let cur = 0
    while (cur < file.size) {
      fileChunkList.push({ file: file.slice(cur, cur + chunkSize) })
      cur += chunkSize

    }
    return fileChunkList
  }

  uploadChunks = async (chunks) => {

  }

  render() {
    return (
      <Fragment>
        <input type="file" name="" id="" onChange={this.handleChange} />
        <Button onClick={this.handleUpload}>Click to Upload</Button>

      </Fragment>
    )
  }
}

export default UploadFile