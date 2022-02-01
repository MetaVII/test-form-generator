import { ReactNode } from "react";

import styles from "./TabContent.module.css";

type TProps = { children: ReactNode; tabName: string; activeTab: string };

function TabContent({ tabName, activeTab, children }: TProps) {
  return (
    <>
      {tabName === activeTab && (
        <div className={styles.container}>{children}</div>
      )}
    </>
  );
}

export default TabContent;
