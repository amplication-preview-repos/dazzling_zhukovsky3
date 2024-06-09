import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  dob: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  surname: string | null;
  updatedAt: Date;
  username: string;
};
