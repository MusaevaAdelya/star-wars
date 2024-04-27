import GoBackButton from "../../components/GoBackButton";

function PageNotFound() {
  return (
    <>
    <GoBackButton to="/"/>
    <div className="flex flex-col items-center justify-center mt-10 font-primary text-slate-200">
      <span className="md:text-[5rem] text-[4rem]">404</span>
      <img
        className="shadow-[0_0_20px_1px_rgba(255,255,255,0.3)]"
        src="/images/not-found-page.gif"
        alt="page not found"
      />
      <span className="my-5 text-3xl capitalize md:text-5xl">page not found</span>
    </div>
    </>
  );
}

export default PageNotFound;
