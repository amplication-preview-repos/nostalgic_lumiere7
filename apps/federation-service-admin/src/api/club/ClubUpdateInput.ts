import { InputJsonValue } from "../../types";

export type ClubUpdateInput = {
  description?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
