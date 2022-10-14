import {useAuthenticator} from "@aws-amplify/ui-react";

function CheckAuth() {

    const { route } = useAuthenticator(context => [context.route]);
    if(route === "authenticated") {
        return true;
    }
    return false;
}

export default CheckAuth;