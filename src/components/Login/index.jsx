import React from "react";
import { Form, Input, Button, Checkbox, message, Row, Col } from "antd";

export default class Login extends React.Component {
  onFinish = (values) => {
    this.props.onAuthRequest(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.authDetails !== this.props.authDetails &&
      this.props.authDetails.isLoggedIn
    ) {
      this.props.history.push("/");
    }

    if (
      prevProps.authDetails.error !== this.props.authDetails.error &&
      !this.props.authDetails.isLoggedIn
    ) {
      message.error(this.props.authDetails.error);
    }
  }

  render() {
    return (
      <Row>
        <Col span={4} />
        <Col span={16}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={4} />
      </Row>
    );
  }
}
