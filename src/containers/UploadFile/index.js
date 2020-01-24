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

  handleChange = e => {
    console.log('file changed', e.target.files)
    const [file] = e.target.files
    if (!file) return
    this.setState({
      file
    })
  }

  handleUpload = async () => {
    console.log('uploading file')
    if (!this.state.file) return

    const fileChunkList = this.createFileChunk(this.state.file)
    this.setState({
      data: fileChunkList.map(({ file }, index) => {
        return {
          chunk: file,
          hash: this.container.file.name + "-" + index
        }
      })
    })
    await this.uploadChunks()
  }

  createFileChunk = (file, length = sliceLength) => {
    const fileChunkList = [],
      chunkSize = Math.ceil(file.size / length)
    console.log(file, chunkSize)
    let cur = 0
    while (cur < file.size) {
      fileChunkList.push({ file: file.slice(cur, cur + chunkSize) })
      cur += chunkSize

    }
    return fileChunkList
  }

  uploadChunks = async () => {
    const requestList = this.state.data.map((chunk, hash) => {
      const formData = new FormData()
      formData.append('chunk', chunk)
      formData.append('hash', hash)
      formData.append('filename', this.state.file.name)
      return { formData }
    }).map(async ({ formData }) => {
      request({
        url: '3000',
        data: formData
      })
    })
    await Promise.all(requestList)

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