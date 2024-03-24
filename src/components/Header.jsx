const Header = () => {
  return (
    <header className="flex justify-between bg-cyan-300 items-center shadow-md shadow-slate-600 px-12 py-4 z-10">
      <div>
        <span className="text-3xl font-bold text-cyan-900">R</span>eact{" "}
        <span className="text-3xl font-bold text-cyan-900">S</span>tudy{" "}
        <span className="text-3xl font-bold text-cyan-900">G</span>
        uide
      </div>
      <div>
        <nav>
          <ul>
            <button>
              <li>About</li>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
