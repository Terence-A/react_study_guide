import { useState } from "react";

const Sidebar = ({ setShowSidebar }) => {
  const [showEssentials, setShowEssentials] = useState();

  const handleEssentials = () => {
    setShowEssentials(!showEssentials);
  };

  const selectedCss = "font-bold text-cyan-900";
  return (
    <aside className="w-64 bg-cyan-300/60 ">
      <nav className="flex flex-col h-full justify-between pt-2 pb-4">
        <ul className="text-cyan-950 text-3xl font-semibold pl-8">
          <button
            className="text-sm border border-cyan-900 rounded-md mb-8 p-1 ml-32 bg-cyan-800 text-cyan-50"
            onClick={setShowSidebar}
          >
            Close
          </button>
          <li>
            <button
              onClick={handleEssentials}
              className={showEssentials && selectedCss}
            >
              <p className="hover:font-bold">Essentials</p>
            </button>
            {showEssentials && (
              <ul className="text-lg text-cyan-900 pl-4 pt-4  flex flex-col space-y-2  ">
                <li className="hover:font-bold">
                  <button>Components</button>
                </li>
                <li className="hover:font-bold">
                  <button>JSX</button>
                </li>
                <li className="hover:font-bold">
                  <button>Props</button>
                </li>
                <li className="hover:font-bold">
                  <button>State</button>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <p className="text-center"> &copy; copyright</p>
      </nav>
    </aside>
  );
};

export default Sidebar;
