import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivetabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${activeTab == elem ? "bg-blue-700" : "bg-gray-500"} transition px-5 py-2 cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActivetabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
