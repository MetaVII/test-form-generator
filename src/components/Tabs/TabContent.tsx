import { ReactNode } from "react";

type TProps = { children: ReactNode; tabName: string; activeTab: string };

function TabContent({ tabName, activeTab, children }: TProps) {
  return <>{tabName === activeTab && children}</>;
}

export default TabContent;
