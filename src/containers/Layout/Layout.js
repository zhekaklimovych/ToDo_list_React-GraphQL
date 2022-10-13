import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator, Button } from "@aws-amplify/ui-react";

import "./../../styles/common.css";

const Layout = () => {
    const { route, signOut } = useAuthenticator(context => [context.route, context.signOut]);
    const navigate = useNavigate();

    const logOut = () => {
        signOut();
        navigate("/login");
    };
    return (
        <div className="layout-container">
            <nav className="layout-nav">
                <div className="layout-nav-item">
                    {route !== "authenticated" ? (
                        <Button onClick={() => navigate("/login")}>Login</Button>
                    ) : (
                        <Button onClick={() => logOut()}>Logout</Button>
                    )}
                    <Button onClick={() => navigate("/opportunities")}>Opportunities</Button>
                    <Button onClick={() => navigate("/about")}>About</Button>
                </div>

                <div className="layout-nav-item">
                    <Button onClick={() => navigate("tasks/new")}>Create Task</Button>
                    <Button onClick={() => navigate("/tasks")}>Show All Tasks</Button>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
