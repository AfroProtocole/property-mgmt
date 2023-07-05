/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Property } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PropertyUpdateForm(props) {
  const {
    id: idProp,
    property: propertyModelProp,
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
    decription: "",
    areaSize: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    poBox: "",
    userID: "",
    organizationID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [decription, setDecription] = React.useState(initialValues.decription);
  const [areaSize, setAreaSize] = React.useState(initialValues.areaSize);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [poBox, setPoBox] = React.useState(initialValues.poBox);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [organizationID, setOrganizationID] = React.useState(
    initialValues.organizationID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRecord
      ? { ...initialValues, ...propertyRecord }
      : initialValues;
    setName(cleanValues.name);
    setDecription(cleanValues.decription);
    setAreaSize(cleanValues.areaSize);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setCountry(cleanValues.country);
    setZipCode(cleanValues.zipCode);
    setPoBox(cleanValues.poBox);
    setUserID(cleanValues.userID);
    setOrganizationID(cleanValues.organizationID);
    setErrors({});
  };
  const [propertyRecord, setPropertyRecord] = React.useState(propertyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Property, idProp)
        : propertyModelProp;
      setPropertyRecord(record);
    };
    queryData();
  }, [idProp, propertyModelProp]);
  React.useEffect(resetStateValues, [propertyRecord]);
  const validations = {
    name: [],
    decription: [],
    areaSize: [],
    city: [],
    state: [],
    country: [],
    zipCode: [],
    poBox: [],
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
          decription,
          areaSize,
          city,
          state,
          country,
          zipCode,
          poBox,
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
          await DataStore.save(
            Property.copyOf(propertyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyUpdateForm")}
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
              decription,
              areaSize,
              city,
              state,
              country,
              zipCode,
              poBox,
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
        label="Decription"
        isRequired={false}
        isReadOnly={false}
        value={decription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              decription: value,
              areaSize,
              city,
              state,
              country,
              zipCode,
              poBox,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.decription ?? value;
          }
          if (errors.decription?.hasError) {
            runValidationTasks("decription", value);
          }
          setDecription(value);
        }}
        onBlur={() => runValidationTasks("decription", decription)}
        errorMessage={errors.decription?.errorMessage}
        hasError={errors.decription?.hasError}
        {...getOverrideProps(overrides, "decription")}
      ></TextField>
      <TextField
        label="Area size"
        isRequired={false}
        isReadOnly={false}
        value={areaSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              decription,
              areaSize: value,
              city,
              state,
              country,
              zipCode,
              poBox,
              userID,
              organizationID,
            };
            const result = onChange(modelFields);
            value = result?.areaSize ?? value;
          }
          if (errors.areaSize?.hasError) {
            runValidationTasks("areaSize", value);
          }
          setAreaSize(value);
        }}
        onBlur={() => runValidationTasks("areaSize", areaSize)}
        errorMessage={errors.areaSize?.errorMessage}
        hasError={errors.areaSize?.hasError}
        {...getOverrideProps(overrides, "areaSize")}
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
              decription,
              areaSize,
              city: value,
              state,
              country,
              zipCode,
              poBox,
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
              decription,
              areaSize,
              city,
              state: value,
              country,
              zipCode,
              poBox,
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
              decription,
              areaSize,
              city,
              state,
              country: value,
              zipCode,
              poBox,
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
              decription,
              areaSize,
              city,
              state,
              country,
              zipCode: value,
              poBox,
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
              decription,
              areaSize,
              city,
              state,
              country,
              zipCode,
              poBox: value,
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
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              decription,
              areaSize,
              city,
              state,
              country,
              zipCode,
              poBox,
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
              decription,
              areaSize,
              city,
              state,
              country,
              zipCode,
              poBox,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || propertyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || propertyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
