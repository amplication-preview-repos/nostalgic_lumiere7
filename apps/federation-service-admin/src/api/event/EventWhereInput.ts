import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
