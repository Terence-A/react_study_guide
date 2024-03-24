import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarTab from "./components/SidebarTab";
import Components from "./components/Components";
import Home from "./components/Home";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="h-screen flex flex-col ">
        <Header />
        <main className="flex flex-1 ">
          {!showSidebar ? (
            <Sidebar setShowSidebar={setShowSidebar} />
          ) : (
            <SidebarTab handleSidebar={() => handleSidebar()} />
          )}
          {selectedTab === "home" && <Home />}
        </main>
      </div>
    </>
  );
}

export default App;
