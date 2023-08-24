import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <div className="space-y-6 w-full px-6 pt-6">
      {/* Heading and Button */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[250px]" />
        </div>
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>

      <Separator />

      {/* Form Skeleton */}
      <div className="space-y-8 w-full">
        <div className="md:grid md:grid-cols-3 gap-8">
          {/* Category name input */}
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-8 w-full" />
          </div>

          {/* Billboard select */}
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[80px]" />
            <div className="relative rounded-md">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="absolute top-1/2 right-3 h-5 w-5 transform -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-start">
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
