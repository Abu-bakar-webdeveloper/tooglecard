import React, {useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const user = useContext(UserContext);

    if (user) return <div>Welcome {user.username}</div>

    return <div>please Login</div>
}

export default Profile;