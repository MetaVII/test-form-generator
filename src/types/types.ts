import type { FieldTypeEnum } from "consts/consts";

export type TConfigItem = { id: number; label: string; type: FieldTypeEnum };
export type TJsonConfig = {
  header?: string;
  items?: TConfigItem[];
  buttons?: string[];
};
