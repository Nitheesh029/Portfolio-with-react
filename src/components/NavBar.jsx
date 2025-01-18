function NavBar(props) {
  const { toggleShowModel, navMenus, selectedMenu, setSelectedMenu } = props;
  return (
    <div className="flex justify-around items-center py-3 border-b-2 border-slate-800 w-full fixed">
      <div className="Logo text-xl font-semibold cursor-pointer">
        S Nitheesh
      </div>
      <div className="md:flex gap-5 hidden">
        {navMenus.map((navMenu, navMenuIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedMenu(navMenu);
              }}
              className={`hover:text-blue-400 ${
                navMenu === selectedMenu ? "text-blue-400" : " "
              }`}
              key={navMenuIndex}
            >
              <a href={`#${navMenu}`} className="text-md">
                {navMenu}
              </a>
            </button>
          );
        })}
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleShowModel}>
          <i className="fa-solid fa-bars rounded-full p-2 hover:bg-slate-700 cursor-pointer"></i>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
