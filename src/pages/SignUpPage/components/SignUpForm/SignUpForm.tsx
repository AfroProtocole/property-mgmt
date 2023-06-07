import React, { useState } from 'react';
import { Button, Form, Input, message, Select, Typography } from 'antd';
import { useSignUpForm } from '../../hooks';

const { Title, Text } = Typography;

const orgStatusOptions = [
  {
    value: 'joining',
    label: 'Joining an organization',
    name: 'joining',
  },
  {
    value: 'new',
    label: 'Creating an organization',
    name: 'new',
  },
  {
    value: 'none',
    label: 'No Organization',
    name: 'none',
  },
];

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleFormToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (values: any) => {
    setLoading(true);
    // Simulate an API call for user signup or login
    setTimeout(() => {
      setLoading(false);
      message.success(isSignUp ? 'Signup successful!' : 'Login successful!');
    }, 2000);
  };

  return (
    <>
      <Title level={1}>{isSignUp ? 'Sign Up' : 'Sign In'}</Title>
      <div style={{ maxWidth: 400 }}>
        <Form onFinish={handleSubmit}>
          {!isSignUp && (
            <>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password />
              </Form.Item>
            </>
          )}
          {isSignUp && (
            <>
              <Form.Item label="First Name" name="firstName">
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName">
                <Input />
              </Form.Item>
              <Form.Item label="Organization Status" name="orgStatus">
                <Select options={orgStatusOptions} />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter your username' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password />
              </Form.Item>
            </>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </Form.Item>
          <Form.Item>
            <Text>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <Button type="link" onClick={handleFormToggle}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </Text>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignUpForm;