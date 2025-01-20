import React from "react";

function Button(props) {
  const { children } = props;
  return (
    <button className="border-2 border-blue-400 px-10 py-2 rounded-md blueShadow duration-200 outline-none bg-slate-950">
      <p className="flex items-center gap-2 text-center">{children}</p>
    </button>
  );
}

export default Button;
