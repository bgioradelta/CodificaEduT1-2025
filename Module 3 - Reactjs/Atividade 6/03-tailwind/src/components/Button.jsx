import React from "react";

export default function Button({ variant = "solid", disabled, children, ...props }) {
  let base = "h-10 px-4 rounded-lg font-bold transition-all duration-200";
  let style = "";

  if (variant === "solid")
    style = "bg-blue-600 text-white border border-blue-600 disabled:opacity-60 disabled:cursor-not-allowed";
  else if (variant === "outline")
    style = "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 disabled:opacity-60 disabled:cursor-not-allowed";
  else if (variant === "ghost")
    style = "bg-transparent text-gray-900 dark:text-gray-100 border-none disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <button className={`${base} ${style}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
