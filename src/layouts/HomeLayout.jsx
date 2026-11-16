import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
           <div className="flex gap-10 justify-center">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Login</Link>
           </div>

           <main>
                <Outlet></Outlet>
           </main>
        </div>
    );
};

export default HomeLayout;