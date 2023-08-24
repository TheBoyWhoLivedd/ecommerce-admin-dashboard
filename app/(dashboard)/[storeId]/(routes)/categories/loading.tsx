"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-8 p-6 w-full">
      {/* Heading and Button */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-3 w-[400px]" />
        </div>
        <Skeleton className="h-8 w-32 rounded-md" />
      </div>

      <Separator />

      {/* DataTable Skeleton */}
      <div className="space-y-4">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex space-x-4">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}
      </div>

      <Separator />

      {/* API Heading */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-3 w-[250px]" />
      </div>

      <Separator />

      {/* ApiList Skeleton */}
      <div className="space-y-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex space-x-4">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
