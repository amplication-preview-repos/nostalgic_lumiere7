import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type FederationWhereInput = {
  contactInformation?: StringNullableFilter;
  country?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
};
