import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import axios from '@/actions'

import { userRegister, userLogin, wsApi } from '@/api'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: props.login,
      register: props.register
    }
  }
  componentDidMount() {

  }

  registe = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!values.username || !values.password) {
        message.warn('用户名或密码不能为空')
        return
      }
      if (!err) {
        axios.post(userRegister, values).then(data => {
          if (data.data) {
            message.success('注册成功')
            location.replace('/#/home/index')
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    return (
      <Form layout="inline" onSubmit={this.registe}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username')(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password')(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            注册
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const BaseForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm)

export default BaseForm