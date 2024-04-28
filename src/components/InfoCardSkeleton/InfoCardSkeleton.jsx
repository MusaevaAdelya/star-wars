function InfoCardSkeleton() {
  return (
    <div className="w-[16rem] space-y-5 animate-pulse">
      <div className="w-full h-[16rem]  bg-slate-700"></div>
      <div className="px-3 py-4 space-y-2 bg-slate-500">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 col-span-1 rounded bg-slate-700"></div>
          <div className="h-2 col-span-2 rounded bg-slate-700"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 col-span-2 rounded bg-slate-700"></div>
          <div className="h-2 col-span-1 rounded bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardSkeleton;
