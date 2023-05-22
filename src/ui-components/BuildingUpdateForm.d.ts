/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Building } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BuildingUpdateFormInputValues = {
    name?: string;
    number?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    poBox?: string;
};
export declare type BuildingUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    poBox?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BuildingUpdateFormOverridesProps = {
    BuildingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    poBox?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BuildingUpdateFormProps = React.PropsWithChildren<{
    overrides?: BuildingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    building?: Building;
    onSubmit?: (fields: BuildingUpdateFormInputValues) => BuildingUpdateFormInputValues;
    onSuccess?: (fields: BuildingUpdateFormInputValues) => void;
    onError?: (fields: BuildingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BuildingUpdateFormInputValues) => BuildingUpdateFormInputValues;
    onValidate?: BuildingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BuildingUpdateForm(props: BuildingUpdateFormProps): React.ReactElement;
