import React, { useState } from 'react';

 

const SimpleForm = () => {

  const [formData, setFormData] = useState({ email: '', password: '' });

  const [errors, setErrors] = useState({});

 

  const validate = () => {

    let newErrors = {};

 

    if (!formData.email.includes('@')) {

      newErrors.email = 'Invalid email address';

    }

 

    if (formData.password.length < 6) {

      newErrors.password = 'Password must be at least 6 characters';

    }

 

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      alert('Form submitted successfully');

    }

  };

return (

    <form onSubmit={handleSubmit}>

      <div>

        <label>Email:</label>

        <input

          type="email"

          value={formData.email}

          onChange={(e) => setFormData({ ...formData, email: e.target.value })}

        />

        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      </div>

 

      <div>

        <label>Password:</label>

        <input

          type="password"

          value={formData.password}

          onChange={(e) => setFormData({ ...formData, password: e.target.value })}

        />

        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      </div>

 

      <button type="submit">Submit</button>

    </form>

  );

};

 

export default SimpleForm;
