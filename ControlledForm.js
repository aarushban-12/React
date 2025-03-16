
import React, { useState } from "react";

 

function ControlledForm() {

  const [email, setEmail] = useState("");

 

  return (

    <form>

      <label>Email:</label>

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="submit">Submit</button>

    </form>

  );

}

 

export default ControlledForm;
