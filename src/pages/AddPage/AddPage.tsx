import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const PropertyForm = () => {
  const [entityType, setEntityType] = useState<string>('');

  const handleEntityTypeChange = (value: string) => {
    setEntityType(value);
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'property':
        return (
          <>
            <Form.Item label="Property Name" name="propertyName" rules={[{ required: true, message: 'Please enter the property name' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Property Type" name="propertyType" rules={[{ required: true, message: 'Please select the property type' }]}>
              <Select>
                <Option value="residential">Residential</Option>
                <Option value="commercial">Commercial</Option>
              </Select>
            </Form.Item>
            {/* Add other property-specific fields */}
          </>
        );
      case 'building':
        return (
          <>
            <Form.Item label="Building Name" name="buildingName" rules={[{ required: true, message: 'Please enter the building name' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Number of Floors" name="numberOfFloors" rules={[{ required: true, message: 'Please enter the number of floors' }]}>
              <Input type="number" />
            </Form.Item>
            {/* Add other building-specific fields */}
          </>
        );
      case 'apartment':
        return (
          <>
            <Form.Item label="Unit Number" name="unitNumber" rules={[{ required: true, message: 'Please enter the unit number' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Floor" name="floor" rules={[{ required: true, message: 'Please enter the floor' }]}>
              <Input type="number" />
            </Form.Item>
            {/* Add other apartment-specific fields */}
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Entity Type" name="entityType" rules={[{ required: true, message: 'Please select the entity type' }]}>
        <Select onChange={handleEntityTypeChange}>
          <Option value="property">Property</Option>
          <Option value="building">Building</Option>
          <Option value="apartment">Apartment</Option>
        </Select>
      </Form.Item>
      {renderFormFields()}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PropertyForm;
