import React from "react";
import axios from "axios";
import swal from "sweetalert";

const Table = (props) => {
   const { newData, updateItem } = props;

   const handleView = (id) => {
      const result = newData.find((d) => {
         return d._id === id;
      });
      swal({
         title: `${result.name}`,
         text: `Contact: ${result.phone}\n Email: ${result.email}\n Skills: ${result.skills} \n Experience: ${result.experience}`,
         button: "close",
      });
   };

   const handleshortlist = (data) => {
      axios
         .put(
            `https://dct-application-form.herokuapp.com/users/application-form/update/${data._id}`,
            {
               status: "shortlisted",
            }
         )
         .then((response) => {
            // console.log(response.data);
            updateItem(response.data);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   const handleReject = (data) => {
      axios
         .put(
            `https://dct-application-form.herokuapp.com/users/application-form/update/${data._id}`,
            {
               status: "rejected",
            }
         )
         .then((response) => {
            // console.log(response.data);
            updateItem(response.data);
         })
         .catch((err) => {
            swal(err.message);
         });
   };

   return (
      <div className="mt-3">
         <h3 className="display-6">Total Applications : {newData.length}</h3>
         <div className="table-responsive-md mb-3">
            <table className="table table-bordered table-striped">
               <thead>
                  <tr>
                     <th scope="col">Name</th>
                     <th scope="col">Technical Skills</th>
                     <th scope="col">Experience</th>
                     <th scope="col">Applied Date</th>
                     <th scope="col">View Details</th>
                     <th scope="col">Shortlist/ Reject</th>
                  </tr>
               </thead>
               <tbody>
                  {newData.map((data) => {
                     return (
                        <tr key={data._id}>
                           <td style={{ width: "100px", textAlign: "center" }}>
                              {data.name}
                           </td>
                           <td style={{ width: "100px", textAlign: "left" }}>
                              {data.skills}
                           </td>
                           <td style={{ width: "100px", textAlign: "center" }}>
                              {data.experience}
                           </td>
                           <td style={{ width: "150px", textAlign: "center" }}>
                              {data.createdAt.slice(0, 10)}
                           </td>
                           <td style={{ width: "150px", textAlign: "center" }}>
                              <button
                                 className="btn btn-outline-primary btn-sm"
                                 onClick={() => {
                                    handleView(data._id);
                                 }}
                              >
                                 View Details
                              </button>
                           </td>
                           <td style={{ width: "200px" }}>
                              {data.status === "applied" ? (
                                 <div>
                                    <button
                                       className="btn btn-outline-success btn-sm"
                                       onClick={() => {
                                          handleshortlist(data);
                                       }}
                                    >
                                       shortlist
                                    </button>
                                    <button
                                       className="btn btn-outline-danger btn-sm"
                                       onClick={() => {
                                          handleReject(data);
                                       }}
                                    >
                                       reject
                                    </button>
                                 </div>
                              ) : data.status === "shortlisted" ? (
                                 <button className="btn btn-outline-success btn-sm">
                                    shortlisted
                                 </button>
                              ) : (
                                 <button className="btn btn-outline-danger btn-sm">
                                    rejected
                                 </button>
                              )}
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Table;
