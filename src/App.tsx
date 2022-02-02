import { useState } from "react";
import Tabs from "components/Tabs/Tabs";
import TabContent from "components/Tabs/TabContent";
import Config from "components/Config/Config";
import Result from "components/Result/Result";

import type { TJsonConfig } from "types/types";

import styles from "App.module.css";

const tabsConfig = ["config", "result"];

function App() {
  const [activeTab, setActiveTab] = useState<"config" | "result">("config");
  const [configText, setConfigText] = useState("");
  const [configError, setConfigError] = useState("");
  const [jsonConfig, setJsonConfig] = useState<TJsonConfig>({});

  const applyClickHandler = () => {
    setConfigError("");
    setJsonConfig({});
    try {
      const configObject = JSON.parse(configText);
      setJsonConfig(configObject);
      setConfigText(JSON.stringify(configObject, undefined, 2));
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
          <Result jsonConfig={jsonConfig} />
        </TabContent>
      </div>
    </div>
  );
}

export default App;
