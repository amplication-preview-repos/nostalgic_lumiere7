import { SortOrder } from "../../util/SortOrder";

export type FederationOrderByInput = {
  contactInformation?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
