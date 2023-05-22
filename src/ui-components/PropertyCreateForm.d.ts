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
export declare type PropertyCreateFormInputValues = {
    name?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    poBox?: string;
};
export declare type PropertyCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    poBox?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyCreateFormOverridesProps = {
    PropertyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    poBox?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyCreateFormProps = React.PropsWithChildren<{
    overrides?: PropertyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onSuccess?: (fields: PropertyCreateFormInputValues) => void;
    onError?: (fields: PropertyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onValidate?: PropertyCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyCreateForm(props: PropertyCreateFormProps): React.ReactElement;
