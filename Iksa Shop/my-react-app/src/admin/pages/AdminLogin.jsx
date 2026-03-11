// import React, { useState } from "react";

// export default function AdminLogin() {
//     const [error, setError] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.target);
//         const username = formData.get("Username");
//         const password = formData.get("Password");

//         if (!username || !password) {
//             setError("Username and Password are required");
//             return;
//         }

//         // TODO: API call here
//         console.log({ username, password });
//     };

//     return (
//         <>
//             <div className="middle-box text-center loginscreen animated fadeInDown">
//                 <div>
//                     <img
//                         src="/Administrator/img/logo-white1.png"
//                         className="img-rounded"
//                         width="80%"
//                         alt="Admin Logo"
//                     />

//                     <h2 className="font-bold">Admin Login</h2>

//                     <form className="m-t" id="msform" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             Username
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Username"
//                                 name="Username"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             Password
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Password"
//                                 name="Password"
//                                 required
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="btn btn-primary block full-width m-b btn-lg"
//                         >
//                             Login
//                         </button>

//                         <button
//                             type="reset"
//                             className="btn btn-secondary block full-width m-b btn-lg"
//                         >
//                             Clear
//                         </button>

//                         {error && <p style={{ color: "red" }}>{error}</p>}
//                     </form>

//                     <p className="m-t">
//                         <small>
//                             <br />
//                          IKSA-SHOP © 2026. All Rights Reserved
//                         </small>
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";

const AdminLogin = () => {

    const { login } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await login(form);
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }

    };

    return (<>
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                }
            />

            <button type="submit">Login</button>

        </form>
        <button onClick={() => logout()}>Logout</button></>
    );
};

export default AdminLogin;