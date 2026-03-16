import React from "react";

const CollectionCard = (props) => {
  return (
    <div className="w-[18vw] h-60 relative bg-white rounded-2xl overflow-hidden">
      <a target="_blank" className="h-full" href={props.item.url}>
        <div className="h-full">
          {props.item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={props.item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {props.item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={props.item.src}
            ></video>
          ) : (
            ""
          )}
        </div>
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-2 w-full px-3 py-5 absolute bottom-0 text-white items-center"
      >
        <h2 className="text-xs font-semibold capitalize h-12 overflow-hidden">
          {props.item.title}
        </h2>
        <button
          onClick={() => {
            console.log("here...");
          }}
          className="bg-rose-700 cursor-pointer active:scale-95 text-white rounded-2xl px-2 py-1 font-medium size-fit"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
