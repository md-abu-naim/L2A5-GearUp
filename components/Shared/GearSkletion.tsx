import { Skeleton } from "@/components/ui/skeleton";

export default function GearSkeleton() {
  return (
    <section className="relative overflow-hidden bg-background shadow-2xl">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-card overflow-hidden"
            >
              <Skeleton className="w-full h-56" />

              <div className="p-5 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />

                <div className="flex items-center justify-between pt-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-9 w-24 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}