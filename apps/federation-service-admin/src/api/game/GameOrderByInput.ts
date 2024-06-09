import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
