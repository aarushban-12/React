import React, { useState } from "react";


function BasicForm() {

  const [name, setName] = useState("");

 

  const handleChange = (event) => {

    setName(event.target.value); // Updating state on input change

  };

 

  const handleSubmit = (event) => {

    event.preventDefault();

    alert(`Submitted Name: ${name}`);

  };

 

  return (

    <form onSubmit={handleSubmit}>

      <label>Name:</label>

      <input type="text" value={name} onChange={handleChange} />

      <button type="submit">Submit</button>

    </form>

  );

}

 

export default BasicForm;
 
