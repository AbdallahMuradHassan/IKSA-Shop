
import React, { useState } from "react";
function RegistrationForm({ onBackToLogin }) {
    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        // Account
        email: "",
        password: "",
        confirmPassword: "",

        // Personal
        firstName: "",
        lastName: "",
        phone: "",

        // Shipping
        country: "",
        city: "",
        address: "",
        postalCode: "",

        // Billing (optional)
        billingName: "",
        billingAddress: "",
        vatNumber: "",
        sameAsShipping: true,

        // Preferences (optional)
        newsletter: false,
        language: "en",
        currency: "USD",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        let err = {};

        // STEP 0 – Account
        if (step === 0) {
            if (!formData.firstName) err.firstName = "FirstName required";
            if (!formData.lastName) err.lastName = "LastNAme required";

            if (!formData.email) err.email = "Email required";
            else if (!/\S+@\S+\.\S+/.test(formData.email))
                err.email = "Invalid email";

            if (!formData.password) err.password = "Password required";
            else if (formData.password.length < 6)
                err.password = "Min 6 characters";

            if (formData.password !== formData.confirmPassword)
                err.confirmPassword = "Passwords do not match";
        }

        // STEP 1 – Personal
        if (step === 1) {
            if (!formData.firstName) err.firstName = "Required";
            if (!formData.lastName) err.lastName = "Required";
            if (!formData.phone) err.phone = "Required";
        }

        // STEP 2 – Shipping
        if (step === 2) {
            if (!formData.country) err.country = "Required";
            if (!formData.city) err.city = "Required";
            if (!formData.address) err.address = "Required";
            if (!formData.postalCode) err.postalCode = "Required";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const next = () => validate() && setStep(step + 1);
    const prev = () => setStep(step - 1);

    const submitForm = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("EC REGISTRATION DATA:", formData);
            alert("Registration Successful ✅");
        }
    };


    return (
        <div className="ms-form-container">
            <form id="msform" onSubmit={submitForm}>
                <ul id="progressbar">
                    {["Account /Personal", , "Shipping", "Billing", "Preferences"].map(
                        (s, i) => (
                            <li key={i} className={i <= step ? "active" : ""}>{s}</li>
                        )
                    )}
                </ul>

                {/* STEP 0 – ACCOUNT */}
                {step === 0 && (
                    <fieldset>
                        <h2>Account Creation</h2>
                        <input name="firstName" placeholder="First Name *"
                            value={formData.firstName} onChange={handleChange} />
                        <span className="error">{errors.firstName}</span>

                        <input name="lastName" placeholder="Last Name *"
                            value={formData.lastName} onChange={handleChange} />
                        <span className="error">{errors.lastName}</span>

                        <input name="phone" placeholder="Phone *"
                            value={formData.phone} onChange={handleChange} />
                        <span className="error">{errors.phone}</span>


                        <input name="email" placeholder="Email *"
                            value={formData.email} onChange={handleChange} />
                        <span className="error">{errors.email}</span>

                        <input type="password" name="password" placeholder="Password *"
                            value={formData.password} onChange={handleChange} />
                        <span className="error">{errors.password}</span>

                        <input type="password" name="confirmPassword" placeholder="Confirm Password *"
                            value={formData.confirmPassword} onChange={handleChange} />
                        <span className="error">{errors.confirmPassword}</span>
                        <button type="button" onClick={onBackToLogin} className="action-button">Bake</button>
                        <button type="button" onClick={next} className="action-button">Next</button>
                    </fieldset>
                )}
                {/* STEP 1 – SHIPPING */}
                {step === 1 && (
                    <fieldset>
                        <h2>Shipping Address</h2>

                        <input name="country" placeholder="Country *"
                            value={formData.country} onChange={handleChange} />
                        <span className="error">{errors.country}</span>

                        <input name="city" placeholder="City *"
                            value={formData.city} onChange={handleChange} />
                        <span className="error">{errors.city}</span>

                        <input name="address" placeholder="Street Address *"
                            value={formData.address} onChange={handleChange} />
                        <span className="error">{errors.address}</span>

                        <input name="postalCode" placeholder="Postal Code *"
                            value={formData.postalCode} onChange={handleChange} />
                        <span className="error">{errors.postalCode}</span>

                        <button type="button" onClick={prev} className="action-button">Previous</button>
                        <button type="button" onClick={next} className="action-button">Next</button>
                    </fieldset>
                )}

                {/* STEP 2 – BILLING (OPTIONAL) */}
                {step === 2 && (
                    <fieldset>
                        <h2>Billing Information (Optional)</h2>

                        <input name="billingName" placeholder="Billing Name"
                            value={formData.billingName} onChange={handleChange} />

                        <input name="billingAddress" placeholder="Billing Address"
                            value={formData.billingAddress} onChange={handleChange} />

                        <input name="vatNumber" placeholder="VAT / Tax Number"
                            value={formData.vatNumber} onChange={handleChange} />

                        <button type="button" onClick={prev} className="action-button">Previous</button>
                        <button type="button" onClick={next} className="action-button">Next</button>
                    </fieldset>
                )}

                {/* STEP 3 – PREFERENCES */}
                {step === 3 && (
                    <fieldset>
                        <h2>Preferences</h2>

                        <label>
                            <input type="checkbox" name="newsletter"
                                checked={formData.newsletter} onChange={handleChange} />
                            Subscribe to Newsletter
                        </label>

                        <select name="language" value={formData.language} onChange={handleChange}>
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                        </select>

                        <select name="currency" value={formData.currency} onChange={handleChange}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>

                        <button type="button" onClick={prev} className="action-button">Previous</button>
                        <button type="submit" className="submit action-button">Register</button>
                    </fieldset>
                )}
            </form>
        </div>
    )
}

export default RegistrationForm