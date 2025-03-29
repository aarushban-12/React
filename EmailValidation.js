import React, { useState } from "react";

 

const EmailValidationForm = () => {

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

 

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!emailRegex.test(email)) {

      setError("Invalid email format");

    } else {

      setError("");

      alert("Email is valid!");

    }

  };

 

  return (

    <form onSubmit={handleSubmit}>

      <div>

        <label>Email:</label>

        <input 

          type="text" 

          value={email} 

          onChange={(e) => setEmail(e.target.value)} 

        />

        {error && <p style={{ color: "red" }}>{error}</p>}

      </div>

      <button type="submit">Submit</button>

    </form>

  );

};

 

export default EmailValidationForm;



