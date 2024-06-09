import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
