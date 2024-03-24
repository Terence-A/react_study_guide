const SidebarTab = ({ handleSidebar }) => {
  return (
    <aside className="bg-cyan-100">
      <div className=" bg-cyan-800 w-8 text-cyan-50 text-2xl h-96 flex justify-center  text-center py-8 rounded-r-xl mt-8 font-bold shadow-md shadow-cyan-900">
        <button onClick={handleSidebar}>
          <p>S</p>
          <p>I</p>
          <p>D</p>
          <p>E</p>
          <p>B</p>
          <p>A</p>
          <p>R</p>
          <p className="mt-20 text-lg">&copy;</p>
        </button>
      </div>
    </aside>
  );
};

export default SidebarTab;
