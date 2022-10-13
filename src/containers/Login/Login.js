import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator, View } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
        <View className="auth-wrapper">
            <Authenticator></Authenticator>
        </View>
    );
};
export default Login;
