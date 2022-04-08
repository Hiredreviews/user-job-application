import React, { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

import Table from "./Table";

const Admin = (props) => {
   const { data, setData, updateItem } = props;

   // const [newData, setNewData] = useState([]);

   useEffect(() => {
      axios
         .get(
            "https://dct-application-form.herokuapp.com/users/application-forms"
         )
         .then((response) => {
            const result = response.data;
            setData(result);
         })
         .catch((err) => {
            swal(err.message);
         });
   }, [setData]);

   const handleFrontend = () => {
      axios
         .get(
            "https://dct-application-form.herokuapp.com/users/application-forms"
         )
         .then((response) => {
            const result = response.data.filter((data) => {
               return data.jobTitle === "Front-End Developer";
            });
            setData(result);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   const handleNodeJs = () => {
      axios
         .get(
            "https://dct-application-form.herokuapp.com/users/application-forms"
         )
         .then((response) => {
            const result = response.data.filter((data) => {
               return data.jobTitle === "Node.js Developer";
            });
            setData(result);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   const handleMean = () => {
      axios
         .get(
            "https://dct-application-form.herokuapp.com/users/application-forms"
         )
         .then((response) => {
            const result = response.data.filter((data) => {
               return data.jobTitle === "MEAN Stack Developer";
            });
            setData(result);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   const handleFullStack = () => {
      axios
         .get(
            "https://dct-application-form.herokuapp.com/users/application-forms"
         )
         .then((response) => {
            const result = response.data.filter((data) => {
               return data.jobTitle === "FULL Stack Developer";
            });
            setData(result);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   return (
      <div>
         <div className="mt-2">
            <h2 className="display-6">Admin Dashboard</h2>
            <div className="mt-3 mb-3">
               <button
                  className="btn btn-primary mx-2"
                  onClick={handleFrontend}
               >
                  FrontEnd Developer
               </button>
               <button className="btn btn-success mx-2" onClick={handleNodeJs}>
                  NodeJs Developer
               </button>
               <button className="btn btn-danger mx-2" onClick={handleMean}>
                  Mean Developer
               </button>
               <button
                  className="btn btn-secondary mx-2"
                  onClick={handleFullStack}
               >
                  FullStack Developer
               </button>
               <Table newData={data} updateItem={updateItem} />
            </div>
         </div>
      </div>
   );
};

export default Admin;
