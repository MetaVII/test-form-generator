import { MouseEventHandler } from "react";
import styles from "./Config.module.css";

type TProps = {
  configText: string;
  configError: string;
  onTextChange: Function;
  onApplyClick: MouseEventHandler;
};

function Config({
  configText,
  configError,
  onTextChange,
  onApplyClick,
}: TProps) {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={configText}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <span className={styles.error}>{configError}</span>
      <button
        className={styles.apply}
        type="button"
        disabled={!configText}
        onClick={onApplyClick}
      >
        Apply
      </button>
    </div>
  );
}

export default Config;
