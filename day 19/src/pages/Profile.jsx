import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user } = useAuth();
    return (
        <div>
            <h1> Profile</h1>
            <p>Welllcome , <b>{user.name}</b></p>
            <p>this page is Prodectesd (only logged in users )</p>
        </div>
    )
}
export default Profile;
