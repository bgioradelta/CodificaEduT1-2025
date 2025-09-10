import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-200 dark:bg-gray-700 aspect-square"></div>
      <div className="p-4 grid gap-3">
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="flex justify-between">
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_44px] gap-3">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
