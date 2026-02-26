// import { useState } from "react";
// import "../assets/css/login.css";

// function LoginRegistration() {
//     const [isSignup, setIsSignup] = useState(false);

//     // Login states
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [showLoginPassword, setShowLoginPassword] = useState(false);

//     // Signup states
//     const [signupData, setSignupData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//         street: "",
//         city: "",
//         postal: "",
//         terms: false,
//     });

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirm, setShowConfirm] = useState(false);
//     const [errors, setErrors] = useState({});

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10,15}$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//     const handleSignupChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setSignupData({
//             ...signupData,
//             [name]: type === "checkbox" ? checked : value,
//         });
//     };

//     const validateSignup = () => {
//         const newErrors = {};
//         if (!signupData.firstName.trim()) newErrors.firstName = "First name required";
//         if (!signupData.lastName.trim()) newErrors.lastName = "Last name required";
//         if (!emailRegex.test(signupData.email)) newErrors.email = "Invalid email";
//         if (!phoneRegex.test(signupData.phone)) newErrors.phone = "Invalid phone number";
//         if (!passwordRegex.test(signupData.password))
//             newErrors.password =
//                 "Password must be 8+ chars, include uppercase, lowercase & number";
//         if (signupData.password !== signupData.confirmPassword)
//             newErrors.confirmPassword = "Passwords do not match";
//         if (!signupData.street.trim()) newErrors.street = "Street required";
//         if (!signupData.city.trim()) newErrors.city = "City required";
//         if (!signupData.postal.trim()) newErrors.postal = "Postal code required";
//         if (!signupData.terms) newErrors.terms = "You must accept terms";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSignupSubmit = (e) => {
//         e.preventDefault();
//         if (validateSignup()) {
//             alert("Signup successful! ✅");
//         }
//     };

//     const validateLogin = () => {
//         const newErrors = {};
//         if (!emailRegex.test(loginEmail)) newErrors.loginEmail = "Invalid email";
//         if (!loginPassword) newErrors.loginPassword = "Password required";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleLoginSubmit = (e) => {
//         e.preventDefault();
//         if (validateLogin()) {
//             alert("Login successful! ✅");
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="container">
//                 <div className="drop">
//                     <div className="content">
//                         <h2>{isSignup ? "Sign Up" : "Login"}</h2>

//                         {/* LOGIN FORM */}
//                         {!isSignup && (
//                             <form onSubmit={handleLoginSubmit}>
//                                 <div className="input-box">
//                                     <input
//                                         type="email"
//                                         placeholder="Email Address"
//                                         value={loginEmail}
//                                         onChange={(e) => setLoginEmail(e.target.value)}
//                                     />
//                                     {errors.loginEmail && <p className="error">{errors.loginEmail}</p>}
//                                 </div>

//                                 <div className="input-box password-box">
//                                     <input
//                                         type={showLoginPassword ? "text" : "password"}
//                                         placeholder="Password"
//                                         value={loginPassword}
//                                         onChange={(e) => setLoginPassword(e.target.value)}
//                                     />
//                                     {loginPassword && (
//                                         <span
//                                             className="eye"
//                                             onClick={() => setShowLoginPassword(!showLoginPassword)}
//                                         >
//                                             {showLoginPassword ? "🙈" : "👁️"}
//                                         </span>
//                                     )}
//                                     {errors.loginPassword && <p className="error">{errors.loginPassword}</p>}
//                                 </div>

//                                 <div className="input-box submit-box">
//                                     <input type="submit" value="Login" />
//                                 </div>
//                             </form>
//                         )}

//                         {/* SIGNUP FORM (2 COLUMNS) */}
//                         {isSignup && (
//                             <form className="signup-form" onSubmit={handleSignupSubmit}>
//                                 <div className="signup-columns">
//                                     {/* LEFT COLUMN - Personal Info */}
//                                     <div className="col">
//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="firstName"
//                                                 placeholder="First Name"
//                                                 value={signupData.firstName}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.firstName && <p className="error">{errors.firstName}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="lastName"
//                                                 placeholder="Last Name"
//                                                 value={signupData.lastName}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.lastName && <p className="error">{errors.lastName}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 placeholder="Email"
//                                                 value={signupData.email}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.email && <p className="error">{errors.email}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="tel"
//                                                 name="phone"
//                                                 placeholder="Phone Number"
//                                                 value={signupData.phone}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.phone && <p className="error">{errors.phone}</p>}
//                                         </div>
//                                     </div>

//                                     {/* RIGHT COLUMN - Address & Password */}
//                                     <div className="col">
//                                         <div className="input-box password-box">
//                                             <input
//                                                 type={showPassword ? "text" : "password"}
//                                                 name="password"
//                                                 placeholder="Password"
//                                                 value={signupData.password}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {signupData.password && (
//                                                 <span
//                                                     className="eye"
//                                                     onClick={() => setShowPassword(!showPassword)}
//                                                 >
//                                                     {showPassword ? "🙈" : "👁️"}
//                                                 </span>
//                                             )}
//                                             {errors.password && <p className="error">{errors.password}</p>}
//                                         </div>

//                                         <div className="input-box password-box">
//                                             <input
//                                                 type={showConfirm ? "text" : "password"}
//                                                 name="confirmPassword"
//                                                 placeholder="Confirm Password"
//                                                 value={signupData.confirmPassword}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {signupData.confirmPassword && (
//                                                 <span
//                                                     className="eye"
//                                                     onClick={() => setShowConfirm(!showConfirm)}
//                                                 >
//                                                     {showConfirm ? "🙈" : "👁️"}
//                                                 </span>
//                                             )}
//                                             {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="street"
//                                                 placeholder="Street Address"
//                                                 value={signupData.street}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.street && <p className="error">{errors.street}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="city"
//                                                 placeholder="City"
//                                                 value={signupData.city}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.city && <p className="error">{errors.city}</p>}
//                                         </div>

//                                         <div className="input-box">
//                                             <input
//                                                 type="text"
//                                                 name="postal"
//                                                 placeholder="Postal Code"
//                                                 value={signupData.postal}
//                                                 onChange={handleSignupChange}
//                                             />
//                                             {errors.postal && <p className="error">{errors.postal}</p>}
//                                         </div>

//                                         <div className="input-box checkbox">
//                                             <label>
//                                                 <input
//                                                     type="checkbox"
//                                                     name="terms"
//                                                     checked={signupData.terms}
//                                                     onChange={handleSignupChange}
//                                                 />{" "}
//                                                 I agree to Terms & Conditions
//                                             </label>
//                                             {errors.terms && <p className="error">{errors.terms}</p>}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="input-box submit-box">
//                                     <input type="submit" value="Create Account" />
//                                 </div>
//                             </form>
//                         )}

//                         <button className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
//                             {isSignup ? "Back to Login" : "New user? Sign up"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginRegistration;
// import React, { useState } from 'react';

// import "../assets/css/login.css";

// const LoginRegistration = () => {
//     const [step, setStep] = useState(0);
//     const [formData, setFormData] = useState({
//         email: '', pass: '', cpass: '',
//         twitter: '', facebook: '', gplus: '',
//         fname: '', lname: '', phone: '', address: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const steps = ["Account Setup", "Social Profiles", "Personal Details"];

//     return (
//         <div id="msform">
//             {/* Progress Bar */}
//             <ul id="progressbar">
//                 {steps.map((label, i) => (
//                     <li key={i} className={i <= step ? "active" : ""}>{label}</li>
//                 ))}
//             </ul>

//             {/* Step 1: Account Setup */}
//             {step === 0 && (
//                 <fieldset>
//                     <h2 className="fs-title">Create your account</h2>
//                     <h3 className="fs-subtitle">This is step 1</h3>
//                     <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//                     <input type="password" name="pass" placeholder="Password" value={formData.pass} onChange={handleChange} />
//                     <input type="password" name="cpass" placeholder="Confirm Password" value={formData.cpass} onChange={handleChange} />
//                     <input type="button" className="next action-button" value="Next" onClick={() => setStep(1)} />
//                 </fieldset>
//             )}

//             {/* Step 2: Social Profiles */}
//             {step === 1 && (
//                 <fieldset>
//                     <h2 className="fs-title">Social Profiles</h2>
//                     <h3 className="fs-subtitle">Your presence on the social network</h3>
//                     <input type="text" name="twitter" placeholder="Twitter" value={formData.twitter} onChange={handleChange} />
//                     <input type="text" name="facebook" placeholder="Facebook" value={formData.facebook} onChange={handleChange} />
//                     <input type="text" name="gplus" placeholder="Google Plus" value={formData.gplus} onChange={handleChange} />
//                     <input type="button" className="previous action-button" value="Previous" onClick={() => setStep(0)} />
//                     <input type="button" className="next action-button" value="Next" onClick={() => setStep(2)} />
//                 </fieldset>
//             )}

//             {/* Step 3: Personal Details */}
//             {step === 2 && (
//                 <fieldset>
//                     <h2 className="fs-title">Personal Details</h2>
//                     <h3 className="fs-subtitle">We will never sell it</h3>
//                     <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} />
//                     <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
//                     <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
//                     <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>
//                     <input type="button" className="previous action-button" value="Previous" onClick={() => setStep(1)} />
//                     <button type="submit" className="submit action-button">Submit</button>
//                 </fieldset>
//             )}
//         </div>
//     );
// };

// export default LoginRegistration;
import React, { useState } from "react";
import "../assets/css/login.css";
import RegistrationForm from "../components/RegistrationForm";
import Login from "../components/LoginForm";


const LoginRegistration = () => {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="ms-form-container">
            {!showRegister ? (
                <Login onCreateAccount={() => setShowRegister(true)} />
            ) : (
                <RegistrationForm onBackToLogin={() => setShowRegister(false)} />
            )}
        </div>
    );
};

export default LoginRegistration;