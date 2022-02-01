/* eslint-disable no-unused-vars */
import { useState } from "react";
import Tabs from "components/Tabs/Tabs";
import TabContent from "components/Tabs/TabContent";
import Config from "components/Config/Config";

import styles from "App.module.css";

const tabsConfig = ["config", "result"];

function App() {
  const [activeTab, setActiveTab] = useState<"config" | "result">("config");
  const [configText, setConfigText] = useState("");
  const [configError, setConfigError] = useState("");
  const [jsonConfig, setJsonConfig] = useState({});

  const applyClickHandler = () => {
    setConfigError("");
    try {
      setJsonConfig(JSON.parse(configText));
      setActiveTab("result");
    } catch (error) {
      if (error instanceof Error)
        setConfigError(`Config text error: ${error.message}`);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Tabs
          tabsConfig={tabsConfig}
          activeTab={activeTab}
          clickHandler={setActiveTab}
        />
        <TabContent activeTab={activeTab} tabName="config">
          <Config
            configText={configText}
            configError={configError}
            onTextChange={setConfigText}
            onApplyClick={applyClickHandler}
          />
        </TabContent>
        <TabContent activeTab={activeTab} tabName="result">
          <div>Result</div>
        </TabContent>
      </div>
    </div>
  );
}

export default App;
