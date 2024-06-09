import { InputJsonValue } from "../../types";

export type FederationUpdateInput = {
  contactInformation?: string | null;
  country?: string | null;
  description?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
