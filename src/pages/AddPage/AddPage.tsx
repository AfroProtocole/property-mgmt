import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const PropertyForm = () => {
  const [entityType, setEntityType] = useState<string>('');

  const [apartmentCount, setApartmentCount] = useState(0);

  const handleApartmentCountChange = (value: number) => {
    setApartmentCount(value);
  };


  const handleEntityTypeChange = (value: string) => {
    setEntityType(value);
  };


   const renderApartmentFields = () => {
    if (apartmentCount > 0) {
      const apartmentFields = [];

      for (let i = 1; i <= apartmentCount; i++) {
        apartmentFields.push(
          <div key={i}>
            <h3>Apartment {i}</h3>
            <Form.Item label={`Apartment ${i} Number`} name={`apartment${i}Number`}>
              <Input />
            </Form.Item>
            <Form.Item label={`Apartment ${i} Size`} name={`apartment${i}Size`}>
              <Input />
            </Form.Item>
            {/* Add other apartment-specific fields */}
          </div>
        );
      }

      return apartmentFields;
    }

    return null;
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
            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter the property description' }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="ZIP Code" name="zipCode" rules={[{ required: true, message: 'Please enter the ZIP code' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Area Size" name="areaSize" rules={[{ required: true, message: 'Please enter the area size' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please enter the country' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Picture" name="picture" rules={[{ required: true, message: 'Please upload a picture' }]}>
              <Input type="file" />
            </Form.Item>
          </>
        );

      case 'building':
        return (
          <>
             <h2>Building Information</h2>
      <Form.Item label="Building Name" name="buildingName">
        <Input />
      </Form.Item>
      <Form.Item label="Building Type" name="buildingType">
        <Input />
      </Form.Item>
      <Form.Item label="Street" name="street">
        <Input />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input />
      </Form.Item>
      <Form.Item label="State" name="state">
        <Input />
      </Form.Item>
      <Form.Item label="ZIP" name="zip">
        <Input />
      </Form.Item>
      <Form.Item label="Country" name="country">
        <Input />
      </Form.Item>
      <Form.Item label="Property" name="property">
        <Input />
      </Form.Item>
      <Form.Item label="Number of Apartments" name="apartmentCount">
        <Select onChange={handleApartmentCountChange}>
          <Option value={0}>0</Option>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          {/* Add more options based on your requirement */}
        </Select>
      </Form.Item>
      <Form.Item label="Pictures" name="pictures">
        <Input type="file" multiple />
      </Form.Item>
      <Form.Item label="Year of Construction" name="yearOfConstruction">
        <Input />
      </Form.Item>
      <Form.Item label="Special Notes" name="specialNotes">
        <Input.TextArea />
      </Form.Item>
      {renderApartmentFields()}
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
