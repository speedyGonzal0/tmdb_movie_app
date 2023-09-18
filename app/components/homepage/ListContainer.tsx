import React from "react";
import ActionButton from "./ActionButton";

type containerProps = {
  title: string;
  showIcon: boolean;
  bgColor: boolean;
  children?: React.ReactNode;
};

const filterCategories: string[] = [
  "hindi",
  "bengali",
  "marathi",
  "assamese",
  "telegu",
  "tamil",
  "malayalam",
];

const ListContainer = (props: containerProps) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor ? "#0B0F16" : "" }}
      className=" backdrop-blur p-5 mb-5 text-white font-mont rounded-3xl drop-shadow-[8px_-4px_10px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-center justify-between">
        <h3 className="uppercase font-bold text-lg"> {props.title} </h3>
        {props.showIcon && (
          <ActionButton title="Filters" icon="expand_more" color="#5C5C5C" />
        )}
      </div>
      {props.title.toLowerCase().includes("recommended") && (
        <div className="flex gap-4 py-3">
          {filterCategories.map((cat) => (
            <button
              className="capitalize bg-[#5C5C5C] hover:bg-[#E43109] transition-all py-2 px-5 rounded-full"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-start gap-10 overflow-auto mt-5 pb-2">
        {props.children}
      </div>
    </div>
  );
};

export default ListContainer;
