export type LoaderData<Type> = {
  success: boolean;
  data: Type;
  error?: unknown;
};
