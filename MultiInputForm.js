import React, { useState } from "react";

 

function MultiInputForm() {

  const [formData, setFormData] = useState({

    username: "",

    password: "",

  });

 

  const handleChange = (event) => {

    setFormData({ ...formData, [event.target.name]: event.target.value });

  };

 

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(formData);

  };

 

  return (

    <form onSubmit={handleSubmit}>

      <label>Username:</label>

      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      

      <label>Password:</label>

      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      

      <button type="submit">Submit</button>

    </form>

  );

}

 

export default MultiInputForm;
