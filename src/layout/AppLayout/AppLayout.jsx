import { Link, Outlet } from "react-router-dom";
import BackgroundStars from "../../components/BackgroundStars";

function AppLayout() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundStars qty={500}/>
      <div className="container px-8 py-10 mx-auto lg:px-20">
        <Link to="/">
        <img
          className="w-auto h-20 mx-auto mb-16 md:h-32"
          src="/images/logo.svg"
          alt="logo"
        />
        
        </Link>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
