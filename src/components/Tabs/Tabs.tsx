import styles from "./Tabs.module.css";

type TProps = {
  tabsConfig: string[];
  clickHandler: Function;
  activeTab: string;
};

function Tabs({ tabsConfig, clickHandler, activeTab }: TProps) {
  return (
    <div className={styles.tabs}>
      {tabsConfig.map((tabName) => (
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === tabName ? styles.active : ""
          }`}
          onClick={() => clickHandler(tabName)}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
