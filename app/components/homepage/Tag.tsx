import React from "react";

type tagProps = {
  text: string;
};

const Tag = (props: tagProps) => {
  return (
    <div className="rounded h-[23px] bg-transparent border-solid border-[1px] border-white text-white flex items-center justify-center p-1 font-mont font-medium text-lg uppercase">
      {props.text}
    </div>
  );
};

export default Tag;
