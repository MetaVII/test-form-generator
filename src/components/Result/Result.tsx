import type { TConfigItem, TJsonConfig } from "types/types";
import { FieldTypeEnum } from "consts/consts";

import styles from "./Result.module.css";

type TProps = { jsonConfig: TJsonConfig };

function getFormContent(configItems?: TConfigItem[]) {
  return configItems?.map?.((item: TConfigItem, idx) => {
    let control;
    switch (item.type) {
      case FieldTypeEnum.numberfield:
        control = <input type="number" />;
        break;
      case FieldTypeEnum.textarea:
        control = <textarea className={styles.textarea} />;
        break;
      case FieldTypeEnum.checkbox:
        control = <input type="checkbox" />;
        break;
      case FieldTypeEnum.datefield:
        control = <input type="date" />;
        break;
      case FieldTypeEnum.radio:
        control = <input type="radio" />;
        break;
      case FieldTypeEnum.textfield:
      default:
        control = <input type="text" />;
    }
    return (
      <label key={item.id || idx} className={styles.label}>
        <span className={styles.labelText}>{item.label || ""}</span>
        {control}
      </label>
    );
  });
}

function getFormButtons(configButtons?: string[]) {
  return configButtons?.map?.((buttonText, idx) => {
    const key = `${idx}button`;
    return (
      <button
        key={key}
        className={styles.button}
        type="button"
        form="resultform"
      >
        {buttonText}
      </button>
    );
  });
}

function Result({ jsonConfig }: TProps) {
  return (
    <div className={styles.container}>
      {jsonConfig.header && (
        <h1 className={styles.formHeader}>{jsonConfig.header}</h1>
      )}
      <form id="resultform" className={styles.form}>
        {getFormContent(jsonConfig.items)}
      </form>
      <div className={styles.buttons}>{getFormButtons(jsonConfig.buttons)}</div>
    </div>
  );
}

export default Result;
