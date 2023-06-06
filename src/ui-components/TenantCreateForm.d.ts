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
export declare type TenantCreateFormInputValues = {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    unitID?: string;
};
export declare type TenantCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    unitID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantCreateFormOverridesProps = {
    TenantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    middleName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    unitID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantCreateFormProps = React.PropsWithChildren<{
    overrides?: TenantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TenantCreateFormInputValues) => TenantCreateFormInputValues;
    onSuccess?: (fields: TenantCreateFormInputValues) => void;
    onError?: (fields: TenantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantCreateFormInputValues) => TenantCreateFormInputValues;
    onValidate?: TenantCreateFormValidationValues;
} & React.CSSProperties>;
export default function TenantCreateForm(props: TenantCreateFormProps): React.ReactElement;
