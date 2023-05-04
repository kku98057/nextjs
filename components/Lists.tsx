import React from "react";

export default function Lists(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-7">{props.children}</div>
  );
}
