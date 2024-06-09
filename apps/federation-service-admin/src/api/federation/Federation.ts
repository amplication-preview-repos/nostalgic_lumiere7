import { JsonValue } from "type-fest";

export type Federation = {
  contactInformation: string | null;
  country: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  logo: JsonValue;
  name: string | null;
  updatedAt: Date;
};
