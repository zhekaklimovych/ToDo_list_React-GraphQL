import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

const Login = () => {
    const { route } = useAuthenticator(context => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (route === "authenticated") {
            navigate(from, { replace: true });
        }
    }, [route, navigate, from]);
    return (
        <div>
            <Authenticator></Authenticator>
        </div>
    );
};
export default Login;
