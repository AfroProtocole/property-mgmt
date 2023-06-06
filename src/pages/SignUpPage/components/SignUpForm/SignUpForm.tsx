// import { Button, Form, Input, Popconfirm, Select, Typography } from "antd";
// import { useSignUpForm } from "../../hooks";

// const orgStatusOptions = [
//   {
//     value: "Joing an organization",
//     label: "Joing an organization",
//     name: "joining",
//   },
//   {
//     value: "Creating an organization",
//     label: "Creating an organization",
//     name: "new",
//   },
//   { value: "No Organization", label: "No Organization", name: "none" },
// ];

// const SignUpForm = () => {
//   const [formInstance] = Form.useForm();
//   const formState = useSignUpForm({ formInstance });

//     return (
//       <>
//         <Typography.Title level={1}>
//           Enter User Information Below
//         </Typography.Title>
//         <div style={{ maxWidth: 400, width: "100%" }}>
//           <Form form={formInstance} onFinish={formState.handleSubmit}>
//             <Form.Item label="First Name" name={"firstName"}>
//               <Input name="firstName" />
//             </Form.Item>
//             <Form.Item label="Middle Name" name={"middleName"}>
//               <Input name="middleName" />
//             </Form.Item>
//             <Form.Item label="Last Name" name={"lastName"}>
//               <Input name="lastName" />
//             </Form.Item>
//             <Form.Item label="Organization Status" name={"orgStatus"}>
//               <Select options={orgStatusOptions} />
//             </Form.Item>
//             <Form.Item label="Email" name="email">
//               <Input type="email" name="email" />
//             </Form.Item>
//             <Form.Item label="Username" name="username">
//               <Input name="username" />
//             </Form.Item>
//             <Form.Item label="Password" name="password">
//               <Input.Password name="password" />
//             </Form.Item>
//             <Form.Item>
//               <Popconfirm
//                 title={"Confirm changes"}
//                 onConfirm={formState.handlePopUpSubmit}
//               >
//                 <Button type="primary" onClick={formState.togglePopUpConfirm}>
//                   Submit
//                 </Button>
//               </Popconfirm>
//             </Form.Item>
//           </Form>
//         </div>
//       </>
//     );
// };

// export default SignUpForm;




// import React from 'react';
// import { Button, Form, Input, Popconfirm, Select, Typography } from 'antd';
// import { useSignUpForm } from '../../hooks';

// const orgStatusOptions = [
//   {
//     value: 'joining',
//     label: 'Joining an organization',
//   },
//   {
//     value: 'new',
//     label: 'Creating an organization',
//   },
//   {
//     value: 'none',
//     label: 'No Organization',
//   },
// ];

// const SignUpForm = () => {
//   const [formInstance] = Form.useForm();
//   const formState = useSignUpForm({ formInstance });

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto' }}>
//       <Typography.Title level={1} style={{ textAlign: 'center' }}>
//         Enter User Information
//       </Typography.Title>
//       <Form form={formInstance} onFinish={formState.handleSubmit}>
//         <Form.Item label="First Name" name="firstName">
//           <Input name="firstName" />
//         </Form.Item>
//         <Form.Item label="Middle Name" name="middleName">
//           <Input name="middleName" />
//         </Form.Item>
//         <Form.Item label="Last Name" name="lastName">
//           <Input name="lastName" />
//         </Form.Item>
//         <Form.Item label="Organization Status" name="orgStatus">
//           <Select options={orgStatusOptions} />
//         </Form.Item>
//         <Form.Item label="Email" name="email">
//           <Input type="email" name="email" />
//         </Form.Item>
//         <Form.Item label="Username" name="username">
//           <Input name="username" />
//         </Form.Item>
//         <Form.Item label="Password" name="password">
//           <Input.Password name="password" />
//         </Form.Item>
//         <Form.Item>
//           <Popconfirm title="Confirm changes" onConfirm={formState.handlePopUpSubmit}>
//             <Button type="primary" onClick={formState.togglePopUpConfirm} block>
//               Submit
//             </Button>
//           </Popconfirm>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default SignUpForm;


import React, { useState } from 'react';
import { Button, Form, Input, message, Typography } from 'antd';

const SignupPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const handleFormToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (values: any) => {
    setLoading(true);
    // Simulate an API call for user signup or login
    setTimeout(() => {
      setLoading(false);
      message.success(isSignup ? 'Sign Up successful!' : 'Sign In successful!');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: 400 }}>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography.Title>
        <Form onFinish={handleSubmit}>
          {isSignup && (
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input />
            </Form.Item>
          )}
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
          {isSignup && (
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <Button type="link" onClick={handleFormToggle}>
                {isSignup ? 'Sign In' : 'Sign Up'}
              </Button>
            </Typography.Text>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
