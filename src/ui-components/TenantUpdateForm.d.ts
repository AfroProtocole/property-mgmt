/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tenant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TenantUpdateFormInputValues = {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    unitID?: string;
};
export declare type TenantUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    unitID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantUpdateFormOverridesProps = {
    TenantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    middleName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    unitID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantUpdateFormProps = React.PropsWithChildren<{
    overrides?: TenantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tenant?: Tenant;
    onSubmit?: (fields: TenantUpdateFormInputValues) => TenantUpdateFormInputValues;
    onSuccess?: (fields: TenantUpdateFormInputValues) => void;
    onError?: (fields: TenantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantUpdateFormInputValues) => TenantUpdateFormInputValues;
    onValidate?: TenantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TenantUpdateForm(props: TenantUpdateFormProps): React.ReactElement;
