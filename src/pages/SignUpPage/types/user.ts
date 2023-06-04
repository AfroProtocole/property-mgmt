export type User = {
  firstname: string;
  lastname: string;
  type: string;
  title: string;
  middleName?: string;
  salary?: string;
  organization?: any;
};

export type UserForm = {
  firstname: string;
  lastname: string;
  middleName?: string;
  orgStatus: "joining" | "new" | "none";
  email: string;
  username: string;
  password: string;
};
