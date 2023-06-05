export type User = {
  firstname: string;
  lastname: string;
  type: "independent";
  title: "owner" | "employee";
  middleName?: string;
  salary?: string;
  organization?: any;
};

export type UserForm = {
  firstname: string;
  lastname: string;
  middleName?: string;
  email: string;
  username: string;
  password: string;
};
