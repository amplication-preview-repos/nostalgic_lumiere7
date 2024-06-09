import { JsonValue } from "type-fest";

export type Club = {
  createdAt: Date;
  description: string | null;
  id: string;
  logo: JsonValue;
  name: string | null;
  updatedAt: Date;
};
