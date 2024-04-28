function CardsSkeleton({ qty }) {
  return (
    <>
      {Array.from({ length: qty }).map((_, index) => (
        <div className="w-[150px] rounded-xl overflow-hidden animate-pulse bg-slate-500">
          <div className="w-full h-[150px]  bg-slate-700"></div>
          <div className="px-3 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 col-span-1 rounded bg-slate-700"></div>
              <div className="h-2 col-span-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardsSkeleton;
