/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Building } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BuildingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    number: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    poBox: "",
    propertyID: "",
    userID: "",
    organizationID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [number, setNumber] = React.useState(initialValues.number);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [poBox, setPoBox] = React.useState(initialValues.poBox);
  const [propertyID, setPropertyID] = React.useState(initialValues.propertyID);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [organizationID, setOrganizationID] = React.useState(
    initialValues.organizationID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setNumber(initialValues.number);
    setCity(initialValues.city);
    setState(initialValues.state);
    setCountry(initialValues.country);
    setZipCode(initialValues.zipCode);
    setPoBox(initialValues.poBox);
    setPropertyID(initialValues.propertyID);
    setUserID(initialValues.userID);
    setOrganizationID(initialValues.organizationID);
    setErrors({});
  };
  const validations = {
    name: [],
    number: [],
    city: [],
    state: [],
    country: [],
    zipCode: [],
    poBox: [],
    propertyID: [],
    userID: [],
    organizationID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          number,
          city,
          state,
          country,
          zipCode,
          poBox,
          propertyID,
          userID,
          organizationID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Building(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BuildingCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              number,
              city,
              state,
              country,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        value={number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number: value,
              city,
              state,
              country,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city: value,
              state,
              country,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state: value,
              country,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country: value,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        value={zipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country,
              zipCode: value,
              poBox,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.zipCode ?? value;
          }
          if (errors.zipCode?.hasError) {
            runValidationTasks("zipCode", value);
          }
          setZipCode(value);
        }}
        onBlur={() => runValidationTasks("zipCode", zipCode)}
        errorMessage={errors.zipCode?.errorMessage}
        hasError={errors.zipCode?.hasError}
        {...getOverrideProps(overrides, "zipCode")}
      ></TextField>
      <TextField
        label="Po box"
        isRequired={false}
        isReadOnly={false}
        value={poBox}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country,
              zipCode,
              poBox: value,
              propertyID,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.poBox ?? value;
          }
          if (errors.poBox?.hasError) {
            runValidationTasks("poBox", value);
          }
          setPoBox(value);
        }}
        onBlur={() => runValidationTasks("poBox", poBox)}
        errorMessage={errors.poBox?.errorMessage}
        hasError={errors.poBox?.hasError}
        {...getOverrideProps(overrides, "poBox")}
      ></TextField>
      <TextField
        label="Property id"
        isRequired={false}
        isReadOnly={false}
        value={propertyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country,
              zipCode,
              poBox,
              propertyID: value,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.propertyID ?? value;
          }
          if (errors.propertyID?.hasError) {
            runValidationTasks("propertyID", value);
          }
          setPropertyID(value);
        }}
        onBlur={() => runValidationTasks("propertyID", propertyID)}
        errorMessage={errors.propertyID?.errorMessage}
        hasError={errors.propertyID?.hasError}
        {...getOverrideProps(overrides, "propertyID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country,
              zipCode,
              poBox,
              propertyID,
              userID: value,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Organization id"
        isRequired={false}
        isReadOnly={false}
        value={organizationID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              city,
              state,
              country,
              zipCode,
              poBox,
              propertyID,
              userID,
              organizationID: value,
            };
            const result = onChange(modelFields);
            value = result?.organizationID ?? value;
          }
          if (errors.organizationID?.hasError) {
            runValidationTasks("organizationID", value);
          }
          setOrganizationID(value);
        }}
        onBlur={() => runValidationTasks("organizationID", organizationID)}
        errorMessage={errors.organizationID?.errorMessage}
        hasError={errors.organizationID?.hasError}
        {...getOverrideProps(overrides, "organizationID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
