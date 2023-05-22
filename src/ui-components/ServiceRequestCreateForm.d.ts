/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceRequestCreateFormInputValues = {
    dateCreated?: string;
    dateCompleted?: string;
    note?: string;
};
export declare type ServiceRequestCreateFormValidationValues = {
    dateCreated?: ValidationFunction<string>;
    dateCompleted?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceRequestCreateFormOverridesProps = {
    ServiceRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dateCreated?: PrimitiveOverrideProps<TextFieldProps>;
    dateCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceRequestCreateFormInputValues) => ServiceRequestCreateFormInputValues;
    onSuccess?: (fields: ServiceRequestCreateFormInputValues) => void;
    onError?: (fields: ServiceRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceRequestCreateFormInputValues) => ServiceRequestCreateFormInputValues;
    onValidate?: ServiceRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceRequestCreateForm(props: ServiceRequestCreateFormProps): React.ReactElement;
