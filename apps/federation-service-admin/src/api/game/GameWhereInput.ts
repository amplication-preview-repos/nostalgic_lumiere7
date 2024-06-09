import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
