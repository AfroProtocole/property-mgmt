import { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { auth, db } from '~/lib/firebase';

interface UserProfile {
    username: string;
    email: string
}

const AccountsPage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser({

          username: 'elvis' || user.displayName,
          email: user.email || '',
        });
        form.setFieldsValue({
          email: user.email,
          username: ":" || '',
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [form]);

  const handleUpdateProfile = async (values: UserProfile) => {
    try {
      setLoading(true);
      
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Update user profile in Firebase Authentication
    //   await user.updateProfile({
    //     displayName: values.displayName,
    //   });

    //   // Update user profile in Firestore
    //   await db.collection('users').doc(user.uid).set(
    //     {
    //       displayName: values.displayName,
    //     },
    //     { merge: true }
    //   );

      message.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      message.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      message.success('You have been signed out');
    } catch (error) {
      console.error('Error signing out:', error);
      message.error('Failed to sign out');
    }
  };

  if (!user) {
    return <div>Loading...</div>; // or redirect to login page
  }

  return (
    <div>
      <h1>Account Details</h1>

      {user.email && (
        <img
          src={`https://robohash.org/${user.email}?size=200x200&bgset=bg2`}
          alt="Profile Picture"
          style={{ width: '100px', borderRadius: '50%' }}
        />
      )}

      <Form form={form} onFinish={handleUpdateProfile} layout="vertical">
        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="username"
          label="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Profile
          </Button>
        </Form.Item>
      </Form>

      <Button type="default" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default AccountsPage;
