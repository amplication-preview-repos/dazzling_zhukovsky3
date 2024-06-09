import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
