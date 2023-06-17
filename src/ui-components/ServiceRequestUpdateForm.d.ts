/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceRequestUpdateFormInputValues = {
    requestorID?: string;
    userID?: string;
    unitID?: string;
    dateCreated?: string;
    dateCompleted?: string;
    note?: string;
};
export declare type ServiceRequestUpdateFormValidationValues = {
    requestorID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    unitID?: ValidationFunction<string>;
    dateCreated?: ValidationFunction<string>;
    dateCompleted?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceRequestUpdateFormOverridesProps = {
    ServiceRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestorID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    unitID?: PrimitiveOverrideProps<TextFieldProps>;
    dateCreated?: PrimitiveOverrideProps<TextFieldProps>;
    dateCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    serviceRequest?: ServiceRequest;
    onSubmit?: (fields: ServiceRequestUpdateFormInputValues) => ServiceRequestUpdateFormInputValues;
    onSuccess?: (fields: ServiceRequestUpdateFormInputValues) => void;
    onError?: (fields: ServiceRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceRequestUpdateFormInputValues) => ServiceRequestUpdateFormInputValues;
    onValidate?: ServiceRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceRequestUpdateForm(props: ServiceRequestUpdateFormProps): React.ReactElement;
