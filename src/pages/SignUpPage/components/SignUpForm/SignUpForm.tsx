import React, { useState } from 'react';
import { Button, Form, Input, message, Select, Typography } from 'antd';
import { auth, db } from "~/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const { Title, Text } = Typography;

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleFormToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      if (isSignUp) {
        // Create user with email and password
        const { user } = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        // Make object with user data
        const userObject = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          username: values.username,
        };

        try {
          const usernameRef = collection(db, "users");
          await addDoc(usernameRef, userObject);
        } catch (error: any) {
          message.error(error.message);
        }

        message.success("Signup successful!");
        // Reset the form
        form.resetFields();
        // Redirect to the "/" page
        window.location.href = "/";
      } else {
        // Sign in user with email and password
        await signInWithEmailAndPassword(auth, values.email, values.password);
        form.resetFields();
        message.success('Login successful!');
        window.location.href = "/";
      }
    } catch (error: any) {
      setLoading(false);
      message.error(error.message);
    }

    setLoading(false);
  };

  const [form] = Form.useForm();

return (
    <div className="signup-form">
      <Title className="signup-form-title" level={1}>{isSignUp ? "Sign Up" : "Sign In"}</Title>
      <Form form={form} onFinish={handleSubmit}>
        {!isSignUp && (
          <>
            <Form.Item
              className="signup-form-item"
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="signup-form-item"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </>
        )}
        {isSignUp && (
          <>
            <Form.Item className="signup-form-item" label="First Name" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item className="signup-form-item" label="Last Name" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item
              className="signup-form-item"
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="signup-form-item"
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="signup-form-item"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </>
        )}
        <Form.Item className="signup-form-submit-button">
          <Button type="primary" htmlType="submit" loading={loading} block>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </Form.Item>
        <Form.Item className="signup-form-toggle">
          <Text>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Button type="link" onClick={handleFormToggle}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </Text>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
