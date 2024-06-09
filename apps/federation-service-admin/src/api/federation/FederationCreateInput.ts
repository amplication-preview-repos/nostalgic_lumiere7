import { InputJsonValue } from "../../types";

export type FederationCreateInput = {
  contactInformation?: string | null;
  country?: string | null;
  description?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
