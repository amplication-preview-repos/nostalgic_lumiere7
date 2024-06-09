import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  kycStatus?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
