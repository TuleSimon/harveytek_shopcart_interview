"use client";
import React, { useState } from "react";

function IncrementingButton() {
  const [count, setCOunt] = useState(1);

  return (
    <div className="w-fit bg-[#F5F6F6] rounded-full px-8  py-2 gap-6 flex place-items-center place-content-center text-primary-100/80 text-3xl ">
      <p className="cursor-pointer"
        aria-disabled={count <= 1}
        onClick={(e) => {
          if (count > 1) {
            setCOunt(count - 1);
          }
        }}
      >
        {" "}
        &ndash;{" "}
      </p>{" "}
      <p className="font-bold text-2xl"> {count} </p> <p className="cursor-pointer" onClick={(e) => setCOunt(count + 1)}> + </p>
    </div>
  );
}

export default IncrementingButton;
