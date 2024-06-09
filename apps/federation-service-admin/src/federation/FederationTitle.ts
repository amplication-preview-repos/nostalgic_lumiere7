import { Federation as TFederation } from "../api/federation/Federation";

export const FEDERATION_TITLE_FIELD = "name";

export const FederationTitle = (record: TFederation): string => {
  return record.name?.toString() || String(record.id);
};
