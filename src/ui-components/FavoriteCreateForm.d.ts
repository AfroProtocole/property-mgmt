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
export declare type FavoriteCreateFormInputValues = {
    userID?: string;
    favType?: string;
    favID?: string;
    image?: string;
    name?: string;
};
export declare type FavoriteCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    favType?: ValidationFunction<string>;
    favID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteCreateFormOverridesProps = {
    FavoriteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    favType?: PrimitiveOverrideProps<TextFieldProps>;
    favID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavoriteCreateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FavoriteCreateFormInputValues) => FavoriteCreateFormInputValues;
    onSuccess?: (fields: FavoriteCreateFormInputValues) => void;
    onError?: (fields: FavoriteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteCreateFormInputValues) => FavoriteCreateFormInputValues;
    onValidate?: FavoriteCreateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteCreateForm(props: FavoriteCreateFormProps): React.ReactElement;
