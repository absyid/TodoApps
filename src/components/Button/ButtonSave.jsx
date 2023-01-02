import React from "react";

const ButtonSave = ({onClick, dataCy }) => {
  return (
    <button
      data-cy={dataCy}
      className="flex h-9 w-24 cursor-pointer items-center justify-center
        rounded-[45px] bg-primary transition hover:bg-primary/80  md:h-14 md:w-40"
      onClick={onClick}
    >
      <p className="text-xs font-semibold text-txtWhite md:text-lg">Simpan</p>
    </button>
  );
};

export default ButtonSave;
