function Sidebar(props) {
  const { toggleShowModel, navMenus, selectedMenu, setSelectedMenu } = props;
  return (
    <div className="flex flex-col fixed right-0 z-20 top-0 h-full bg-slate-900 shadow-slate-500 shadow-md">
      <div className="flex flex-col px-10 gap-5 text-lg pt-10 flex-1 items-center">
        {navMenus.map((navMenu, navMenuIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedMenu(navMenu);
                toggleShowModel(false);
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
      <button
        onClick={toggleShowModel}
        className="mr-auto px-5 hover:opacity-40"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Sidebar;
