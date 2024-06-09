import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  dob?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  surname?: string | null;
  username?: string;
};
