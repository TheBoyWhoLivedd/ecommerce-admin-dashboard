"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-8 p-6 w-full">
      {/* Heading and Button */}
      <div className="flex items-center justify-between w-full">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-3 w-[400px]" />
        </div>
        <Skeleton className="h-8 w-32 rounded-md" />
      </div>

      <Separator />

      {/* DataTable Skeleton */}
      <div className="space-y-4 w-full">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex space-x-4 w-full gap-8">
            <Skeleton className="h-4 w-[500px] pb-2 pt-3" />
            <Skeleton className="h-4 w-[600px] pb-2 pt-3" />
            <Skeleton className="h-4 w-[400px] pb-2 pt-3" />
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
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex flex-col space-y-2 p-2 border rounded">
            <div className="flex items-center gap-x-2">
              <Skeleton className="h-4 w-4 rounded" /> {/* Server icon */}
              <div className="flex items-center gap-x-2">
                <Skeleton className="h-4 w-[50px]" />{" "}
                {/* API method like "GET", "POST", etc. */}
                <Skeleton className="h-4 w-[80px] rounded-md" />{" "}
                {/* Badge for "Public" or "Admin" */}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Skeleton className="h-4 w-[400px] rounded bg-muted" />{" "}
              {/* API route */}
              <Skeleton className="h-4 w-4 rounded" /> {/* Copy button icon */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
