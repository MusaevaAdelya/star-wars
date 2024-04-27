import GoBackButton from "../../components/GoBackButton";

function FailPage() {
  return <>
  <GoBackButton to="/"/>
  <div className="flex flex-col items-center justify-center mt-10">
    <img className="shadow-[0_0_20px_1px_rgba(255,255,255,0.3)]" src="/images/fail-page.gif" alt="fail" />
    <p className="my-5 text-xl text-center md:text-3xl text-slate-300">The dark side of the force has won.<br/>We cannot display data. <br/>Come back when we fix everything</p>
  </div>;
  </>
}

export default FailPage;
