function CardsSkeleton({ qty }) {
    console.log(qty)
  return (
    <div className="flex flex-wrap gap-10">
      {Array.from({ length: qty }).map((_, index) => (
        <div class="border border-slate-700 shadow rounded-md p-4 max-w-xs w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsSkeleton;
