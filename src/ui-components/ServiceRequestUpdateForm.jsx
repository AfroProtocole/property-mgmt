/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ServiceRequest } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ServiceRequestUpdateForm(props) {
  const {
    id: idProp,
    serviceRequest: serviceRequestModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    requestorID: "",
    handlerID: "",
    unitID: "",
    dateCreated: "",
    dateCompleted: "",
    note: "",
  };
  const [requestorID, setRequestorID] = React.useState(
    initialValues.requestorID
  );
  const [handlerID, setHandlerID] = React.useState(initialValues.handlerID);
  const [unitID, setUnitID] = React.useState(initialValues.unitID);
  const [dateCreated, setDateCreated] = React.useState(
    initialValues.dateCreated
  );
  const [dateCompleted, setDateCompleted] = React.useState(
    initialValues.dateCompleted
  );
  const [note, setNote] = React.useState(initialValues.note);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = serviceRequestRecord
      ? { ...initialValues, ...serviceRequestRecord }
      : initialValues;
    setRequestorID(cleanValues.requestorID);
    setHandlerID(cleanValues.handlerID);
    setUnitID(cleanValues.unitID);
    setDateCreated(cleanValues.dateCreated);
    setDateCompleted(cleanValues.dateCompleted);
    setNote(cleanValues.note);
    setErrors({});
  };
  const [serviceRequestRecord, setServiceRequestRecord] = React.useState(
    serviceRequestModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ServiceRequest, idProp)
        : serviceRequestModelProp;
      setServiceRequestRecord(record);
    };
    queryData();
  }, [idProp, serviceRequestModelProp]);
  React.useEffect(resetStateValues, [serviceRequestRecord]);
  const validations = {
    requestorID: [],
    handlerID: [],
    unitID: [],
    dateCreated: [],
    dateCompleted: [],
    note: [],
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
          requestorID,
          handlerID,
          unitID,
          dateCreated,
          dateCompleted,
          note,
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
            ServiceRequest.copyOf(serviceRequestRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ServiceRequestUpdateForm")}
      {...rest}
    >
      <TextField
        label="Requestor id"
        isRequired={false}
        isReadOnly={false}
        value={requestorID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID: value,
              handlerID,
              unitID,
              dateCreated,
              dateCompleted,
              note,
            };
            const result = onChange(modelFields);
            value = result?.requestorID ?? value;
          }
          if (errors.requestorID?.hasError) {
            runValidationTasks("requestorID", value);
          }
          setRequestorID(value);
        }}
        onBlur={() => runValidationTasks("requestorID", requestorID)}
        errorMessage={errors.requestorID?.errorMessage}
        hasError={errors.requestorID?.hasError}
        {...getOverrideProps(overrides, "requestorID")}
      ></TextField>
      <TextField
        label="Handler id"
        isRequired={false}
        isReadOnly={false}
        value={handlerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID,
              handlerID: value,
              unitID,
              dateCreated,
              dateCompleted,
              note,
            };
            const result = onChange(modelFields);
            value = result?.handlerID ?? value;
          }
          if (errors.handlerID?.hasError) {
            runValidationTasks("handlerID", value);
          }
          setHandlerID(value);
        }}
        onBlur={() => runValidationTasks("handlerID", handlerID)}
        errorMessage={errors.handlerID?.errorMessage}
        hasError={errors.handlerID?.hasError}
        {...getOverrideProps(overrides, "handlerID")}
      ></TextField>
      <TextField
        label="Unit id"
        isRequired={false}
        isReadOnly={false}
        value={unitID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID,
              handlerID,
              unitID: value,
              dateCreated,
              dateCompleted,
              note,
            };
            const result = onChange(modelFields);
            value = result?.unitID ?? value;
          }
          if (errors.unitID?.hasError) {
            runValidationTasks("unitID", value);
          }
          setUnitID(value);
        }}
        onBlur={() => runValidationTasks("unitID", unitID)}
        errorMessage={errors.unitID?.errorMessage}
        hasError={errors.unitID?.hasError}
        {...getOverrideProps(overrides, "unitID")}
      ></TextField>
      <TextField
        label="Date created"
        isRequired={false}
        isReadOnly={false}
        value={dateCreated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID,
              handlerID,
              unitID,
              dateCreated: value,
              dateCompleted,
              note,
            };
            const result = onChange(modelFields);
            value = result?.dateCreated ?? value;
          }
          if (errors.dateCreated?.hasError) {
            runValidationTasks("dateCreated", value);
          }
          setDateCreated(value);
        }}
        onBlur={() => runValidationTasks("dateCreated", dateCreated)}
        errorMessage={errors.dateCreated?.errorMessage}
        hasError={errors.dateCreated?.hasError}
        {...getOverrideProps(overrides, "dateCreated")}
      ></TextField>
      <TextField
        label="Date completed"
        isRequired={false}
        isReadOnly={false}
        value={dateCompleted}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID,
              handlerID,
              unitID,
              dateCreated,
              dateCompleted: value,
              note,
            };
            const result = onChange(modelFields);
            value = result?.dateCompleted ?? value;
          }
          if (errors.dateCompleted?.hasError) {
            runValidationTasks("dateCompleted", value);
          }
          setDateCompleted(value);
        }}
        onBlur={() => runValidationTasks("dateCompleted", dateCompleted)}
        errorMessage={errors.dateCompleted?.errorMessage}
        hasError={errors.dateCompleted?.hasError}
        {...getOverrideProps(overrides, "dateCompleted")}
      ></TextField>
      <TextField
        label="Note"
        isRequired={false}
        isReadOnly={false}
        value={note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestorID,
              handlerID,
              unitID,
              dateCreated,
              dateCompleted,
              note: value,
            };
            const result = onChange(modelFields);
            value = result?.note ?? value;
          }
          if (errors.note?.hasError) {
            runValidationTasks("note", value);
          }
          setNote(value);
        }}
        onBlur={() => runValidationTasks("note", note)}
        errorMessage={errors.note?.errorMessage}
        hasError={errors.note?.hasError}
        {...getOverrideProps(overrides, "note")}
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
          isDisabled={!(idProp || serviceRequestModelProp)}
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
              !(idProp || serviceRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
