import React from "react";

const ButtonCancelled = ({dataCy,onClick}) => {
  return (
    <button
      data-cy={dataCy}
      className="flex h-9 w-24 cursor-pointer items-center justify-center
        rounded-[45px] bg-txtGray transition hover:bg-txtGray/80  md:h-14 md:w-40"
      onClick={onClick}
    >
      <p className="text-xs font-semibold text-txtWhite md:text-lg">Batal</p>
    </button>
  );
};

export default ButtonCancelled;
