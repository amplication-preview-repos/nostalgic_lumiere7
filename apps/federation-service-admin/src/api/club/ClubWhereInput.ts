import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ClubWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
};
