import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Form = (props) => {
   const { addItem } = props;

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setphone] = useState("");
   const [jobTitle, setjobTitle] = useState("");
   const [experience, setExperience] = useState("");
   const [skills, setSkills] = useState("");

   const handleChange = (e) => {
      if (e.target.name === "name") {
         setName(e.target.value);
      } else if (e.target.name === "email") {
         setEmail(e.target.value);
      } else if (e.target.name === "phone") {
         setphone(e.target.value);
      } else if (e.target.name === "jobTitle") {
         setjobTitle(e.target.value);
      } else if (e.target.name === "experience") {
         setExperience(e.target.value);
      } else if (e.target.name === "skills") {
         setSkills(e.target.value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
         name,
         email,
         phone,
         jobTitle,
         experience,
         skills,
      };

      axios
         .post(
            "https://dct-application-form.herokuapp.com/users/application-form",
            formData
         )
         .then((response) => {
            addItem(response.data);
            swal("Your Job application was successfully submitted");
            props.history.push("/");
         })
         .catch((err) => {
            swal(err.message);
         });

      setName("");
      setEmail("");
      setphone("");
      setjobTitle("");
      setExperience("");
      setSkills("");
   };

   return (
      <div className="container-sm px-5 m-4 border border-light">
         <h2 className="display-6 mb-3">Apply For Job</h2>
         <form onSubmit={handleSubmit}>
            <label>Full Name</label>{" "}
            <input
               type="text"
               name="name"
               value={name}
               onChange={handleChange}
               className="form-control"
               placeholder="Jake Glyenhall"
            />
            <hr />
            <label>Email</label>{" "}
            <input
               type="text"
               name="email"
               value={email}
               onChange={handleChange}
               placeholder="example@email.com"
               className="form-control"
            />
            <hr />
            <label>phone</label>{" "}
            <input
               type="text"
               name="phone"
               value={phone}
               onChange={handleChange}
               placeholder="+91 9900885566"
               className="form-control"
            />
            <hr />
            <label>Applying for jobTitle </label>{" "}
            <select
               name="jobTitle"
               value={jobTitle}
               onChange={handleChange}
               className="form-control dropdown-toggle"
            >
               <option> --- Select ---</option>
               <option value="Front-End Developer">Front End Developer</option>
               <option value="Node.js Developer">NodeJS Developer</option>
               <option value="MEAN Stack Developer">
                  MEAN Stack Developer
               </option>
               <option value="FULL Stack Developer">
                  FULL Stack Developer
               </option>
            </select>
            <hr />
            <label>Experience</label>{" "}
            <input
               type="text"
               name="experience"
               value={experience}
               onChange={handleChange}
               placeholder="2years 3months"
               className="form-control"
            />
            <hr />
            <label>Technical Skills</label>{" "}
            <textarea
               name="skills"
               value={skills}
               onChange={handleChange}
               placeholder="Ex: Node, React etc"
               className="md-textarea form-control"
            ></textarea>
            <hr />
            <input
               type="submit"
               value="Send Application"
               className="btn btn-outline-primary"
            />
         </form>
      </div>
   );
};

export default Form;
