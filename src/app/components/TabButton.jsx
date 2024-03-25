import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "bg-white rounded-lg text-pink border-b-4 border-pink"
    : "text-white";

  return (
    <button onClick={selectTab}>
      <p
        className={`w-[8rem] text-2xl md:text-3xl p-2 mr-3 font-semibold hover:text-pink ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
