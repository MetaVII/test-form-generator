import { useState } from "react";
import Tabs from "components/Tabs/Tabs";
import TabContent from "components/Tabs/TabContent";

import styles from "App.module.css";

const tabsConfig = ["config", "result"];

function App() {
  const [activeTab, setActiveTab] = useState("config");
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Tabs
          tabsConfig={tabsConfig}
          activeTab={activeTab}
          clickHandler={setActiveTab}
        />
        <TabContent activeTab={activeTab} tabName="config">
          <div>Config</div>
        </TabContent>
        <TabContent activeTab={activeTab} tabName="result">
          <div>Result</div>
        </TabContent>
      </div>
    </div>
  );
}

export default App;
