import React, { Component } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
)

class CommentComp extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    let _this = this
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })


    this.setState({
      submitting: false,
      value: '',
      comments: [
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: <p>{this.state.value}</p>,
          datetime: moment().fromNow(),
        },
        ...this.state.comments,
      ],
    })

  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { comments, submitting, value } = this.state

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src=""
              alt=""
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    )
  }
}

export default CommentComp