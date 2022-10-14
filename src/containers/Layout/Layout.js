import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator, Button } from "@aws-amplify/ui-react";

import "./../../styles/common.css";

const Layout = () => {
    const { route, signOut, user } = useAuthenticator(context => [context.route, context.signOut]);
    const navigate = useNavigate();

    const logOut = () => {
        signOut();
        navigate("/login");
    };
    return (
        <div className="layout-container">
            <div>{route === "authenticated" ? <div className="user-name">{user.username}</div> : null}</div>
            <nav className="layout-nav">
                <div className="layout-nav-item">
                    {route !== "authenticated" ? (
                        <Button className="layout-nav-item-btn" onClick={() => navigate("/login")}>
                            Login
                        </Button>
                    ) : (
                        <Button className="layout-nav-item-btn" onClick={() => logOut()}>
                            Logout
                        </Button>
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
