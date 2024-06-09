import { InputJsonValue } from "../../types";

export type ClubCreateInput = {
  description?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
