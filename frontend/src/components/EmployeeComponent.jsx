import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.error("There was an error creating the employee!", error);
        });
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5 col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center mt-2">Add New Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  onChange={handleFirstNameChange}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  onChange={handleLastNameChange}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={handleEmailChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
