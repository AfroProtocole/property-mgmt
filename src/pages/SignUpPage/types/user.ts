export type User = {
  firstname: String;
  lastname: String;
  type: String;
  title: String;
  middleName?: String;
  salary?: String;
  organization?: any;
};

export type UserForm = {
  firstname: String;
  lastname: String;
  middleName?: String;
  orgStatus: "joining" | "new" | "none";
};
