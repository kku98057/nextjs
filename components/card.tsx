import React from "react";

export default function Card(props: { children: React.ReactNode }) {
  return (
    <div className="p-[15px] rounded-2xl bg-slate-200 w-1/5">
      {props.children}
    </div>
  );
}
