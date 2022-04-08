import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";
import Admin from "./Admin";

const Container = (props) => {
   const [data, setData] = useState([]);

   const addItem = (formData) => {
      const result = [...data, formData];
      // console.log(result);
      setData(result);
   };

   const updateItem = (d) => {
      const result = data.map((ele) => {
         if (ele._id === d._id) {
            return { ...ele, ...d };
         } else {
            return { ...ele };
         }
      });
      setData(result);
   };

   return (
      <div>
         <Link to="/">Home</Link> |{" "}
         <Link to="/application-form">Application Form</Link> |{" "}
         <Link to="/admin">Admin</Link>
         <Route path="/" component={Home} exact={true} />
         <Route
            path="/application-form"
            render={(props) => {
               return <Form addItem={addItem} {...props} />;
            }}
            exact={true}
         />
         <Route
            path="/admin"
            render={(props) => {
               return (
                  <Admin
                     data={data}
                     setData={setData}
                     updateItem={updateItem}
                     {...props}
                  />
               );
            }}
            exact={true}
         />
      </div>
   );
};

export default Container;
