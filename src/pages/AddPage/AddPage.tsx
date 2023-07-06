import React, { useState } from 'react';
import { Form, Input, Select, Button, Radio, Slider, AutoComplete, message } from 'antd';
import { createProperty, updateProperty } from '~/graphql/mutations';
import { API } from 'aws-amplify';

const { Option } = Select;

const PropertyForm = () => {
  const [entityType, setEntityType] = useState<string>('');
  const [hasApartments, setHasApartments] = useState(false);
  const [apartmentCount, setApartmentCount] = useState(0);

  const handleHasApartmentsChange = (e: any) => {
    const value = e.target.value;
    setHasApartments(value);
    setApartmentCount(0); // Reset apartment count when changing the option
  };

  const handleApartmentCountChange = (value: number) => {
    setApartmentCount(value);
  };

  const handleEntityTypeChange = (value: string) => {
    setEntityType(value);
  };

  const contactOptions = [
    { value: 'John Doe' },
    { value: 'Jane Smith' },
    { value: 'Michael Johnson' },
  ];

  const renderBuildingApartmentFields = () => {
    if (apartmentCount > 0) {
      const apartmentFields = [];

      for (let i = 1; i <= apartmentCount; i++) {
        apartmentFields.push(
          <div key={i}>
            <h3>Apartment {i}</h3>
           <Form.Item label="Apartment Number" name="apartmentNumber" rules={[{ required: true, message: 'Please select the apartment number' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please select the price' }]}>
           <Input />
          </Form.Item>
          <Form.Item label="Date of Availability" name="availabilityDate" rules={[{ required: true, message: 'Please select the date of availability' }]}>
           <Input type="date" />
         </Form.Item>
          </div>
        );
      }

      return apartmentFields;
    }

    return null;
  };

  const renderBuildingHasNoApartmentFields = () => {
      return (
        <>
      <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please select the price' }]}>
          <Input />
      </Form.Item>
      <Form.Item label="Date of Availability" name="availabilityDate" rules={[{ required: true, message: 'Please select the date of availability' }]}>
        <Input type="date" />
      </Form.Item>
      {/* <Form.Item label="Size" name="size">
        <Input />
      </Form.Item> */}
      <Form.Item label="Number of Bathrooms" name="bathrooms">
        <Slider min={1} max={5} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
      <Form.Item label="Number of Stairs" name="stairs">
        <Slider min={1} max={10} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
      <Form.Item label="Number of Bedrooms" name="bedrooms">
        <Slider min={1} max={10} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
        </>
    );
  };

  const renderBuildingGeneralFields = () => {
        return (
          <>
          <h2>Building Information</h2>
          <Form.Item label="Building Name" name="buildingName">
            <Input />
          </Form.Item>
          <Form.Item label="Street" name="street" rules={[{ required: true, message: 'Please select the street'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please select the city'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please select the state'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="ZIP" name="zip" rules={[{ required: true, message: 'Please select the zip' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please select the country'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Property" name="property" rules={[{ required: true, message: 'Please select the property' }]}>
            <Select>
              <Option value="Property 1">Property 1</Option>
              <Option value="Property 2">Property 2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Pictures" name="pictures">
            <Input type="file" multiple />
          </Form.Item>
          <Form.Item label="Description" name="description">
          <Input.TextArea />
          </Form.Item>
           <Form.Item label="Year of Construction" name="yearOfConstruction">
            <Input />
          </Form.Item>
          <Form.Item label="Contact to Ask" name="contact">
          <AutoComplete
          options={contactOptions}
          placeholder="Start typing..."
          filterOption={(inputValue, option) =>
          option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}/>
        </Form.Item>          
          </>
    );
  };

  const renderPropertyFields = () => {
    return (
               <>
            <Form.Item label="Property Name" name="name" rules={[{ required: true, message: 'Please enter the property name' }]}>
              <Input />
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
            <Form.Item label="Picture" name="picture" rules={[{ required: false, message: 'Please upload a picture' }]}>
              <Input type="file" />
            </Form.Item>
          </>
    );
  };

  const renderBuildingFields = () => {
    return (
      <>
        {renderBuildingGeneralFields()}

        <Form.Item label="Has Apartments" name="hasApartments" rules={[{ required: true, message: 'Please select an option' }]}>
          <Radio.Group onChange={handleHasApartmentsChange}>
            <Radio value={false}>No</Radio>
            <Radio value={true}>Yes</Radio>
          </Radio.Group>
        </Form.Item>

        {hasApartments && (
          <>
            <Form.Item label="Number of Apartments" name="apartmentCount">
              <Select onChange={handleApartmentCountChange}>
                <Option value={0}>0</Option>
                <Option value={1}>1</Option>
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
                <Option value={6}>6</Option>
              </Select>
            </Form.Item>
            {apartmentCount > 0 && (
              <>
                <h2>Apartment Information</h2>
                {renderBuildingApartmentFields()}
              </>
            )}
          </>
        )}

        {!hasApartments && (
          <>
            {renderBuildingHasNoApartmentFields()}
          </>
        )}
      </>
    );
  };

  const renderApartmentFields = () => {
    return (
      <>
      <h2>Apartment Information</h2>
      <Form.Item label="Apartment Number" name="apartmentNumber" rules={[{ required: true, message: 'Please select the apartment number' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Building" name="building" rules={[{ required: true, message: 'Please select the building' }]}>
        <Select>
            <Option value="Building 1">Building 1</Option>
            <Option value="Building 2">Building 2</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please select the price' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Date of Availability" name="availabilityDate" rules={[{ required: true, message: 'Please select the date of availability' }]}>
        <Input type="date" />
      </Form.Item>
      {/* <Form.Item label="Size" name="size">
        <Input />
      </Form.Item> */}
      <Form.Item label="Number of Bathrooms" name="bathrooms">
        <Slider min={1} max={5} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
      <Form.Item label="Number of Stairs" name="stairs">
        <Slider min={1} max={10} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
      <Form.Item label="Number of Bedrooms" name="bedrooms">
        <Slider min={1} max={10} tooltipVisible tipFormatter={value => `${value}`} />
      </Form.Item>
      <Form.Item label="Pictures" name="pictures">
        <Input type="file" multiple />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Contact to Ask" name="contact">
        <AutoComplete
          options={contactOptions}
          placeholder="Start typing..."
          filterOption={(inputValue, option) =>
            option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}/>
      </Form.Item>
      </>
    );
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'property':
        return renderPropertyFields();

      case 'building':
        return renderBuildingFields();

      case 'apartment':
        return renderApartmentFields();

      default:
        return null;
    }
  };

const handleSubmit = async (values:any) => {
    // Perform any necessary processing or validation before submitting
    console.log('Submitting form:', values);
    delete values.entityType;

    try {
      await API.graphql({
      query: createProperty,
      variables: {
        input: {
          name : values.name,
          description : values.description,
          zipCode : values.zipCode,
          areaSize : values.areaSize,
          country : values.country,
          // picture : values.picture,
          userID : "01", // values.userID,
          // id : values.id,
        },
      },
    });
        console.log('Form submitted successfully');
        message.success('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error);
        message.error('Error submitting form');
    }
  };

  return (
        <Form onFinish={handleSubmit}>
      {/* ... other common fields */}
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
