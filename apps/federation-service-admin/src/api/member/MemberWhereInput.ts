import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MemberWhereInput = {
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  kycStatus?: "Option1";
  lastName?: StringNullableFilter;
};
