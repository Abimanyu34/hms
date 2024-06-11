// import React from "react";

// const AdminHome = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url("./images/img1.png")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         fontSize: "2rem",
//       }}
//     >
//       <h1>Welcome to the Admin Page!</h1>
//     </div>
//   );
// };

// export default AdminHome;

// import logo from "../images/slide_three.png";

// function AdminHome() {
//   return  <img
//   src={logo}
//   alt=""
//   className="justify-content-center"
// />
// }

// export default AdminHome;




// import React from "react";
// import logo from "../images/hospital.png";


// const AdminHome = () => {
//   return (
//     <div className="container" style={{
//       marginTop: '50px'
//     }}>
//       <div className="row">
//         <div className="col-md-5">
//           <img src={logo} alt=""className="img-fluid border border-5 border-success"/>
//         </div>
//         <div className="col-md-7 ">
//           <h5 className="fw-bold fs-5">About Us: </h5>
//           <p> Dental Art Care Clinic has been providing top-notch dental care to the community for the past 5 years. Our team of skilled and experienced dentists and staff are dedicated to helping our patients achieve and maintain optimal oral health. We offer a wide range of dental services, including routine checkups and cleanings, fillings, crowns, bridges, and root canals. We also offer cosmetic dentistry services, such as teeth whitening and veneers, to help our patients improve the appearance of their smiles.At Dental Art Care Clinic, we believe that every patient deserves personalized and compassionate care. That's why we take the time to get to know our patients and their dental needs and goals.
//            We are proud to have served the community for the past 5 years, and we look forward to continuing to provide high-quality dental care for many years to come. We welcome new patients of all ages, and we accept most insurance plans. Contact us today to schedule an appointment and experience the difference that 5 years of dental care can make.</p>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;


import React, { useState, useEffect } from "react";
import logo from "../images/hospital.png";

const AdminHome = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row">
        <div className={`col-md-${isSmallScreen ? '12' : '5'}`}>
          <img src={logo} alt="" className="img-fluid border border-5 border-success" />
        </div>
        <div className={`col-md-${isSmallScreen ? '12' : '7'} mt-md-0 mt-3`}>
          <h5 className="fw-bold fs-5">About Us: </h5>
          <p> Dental Art Care Clinic has been providing top-notch dental care to the community for the past 5 years. Our team of skilled and experienced dentists and staff are dedicated to helping our patients achieve and maintain optimal oral health. We offer a wide range of dental services, including routine checkups and cleanings, fillings, crowns, bridges, and root canals. We also offer cosmetic dentistry services, such as teeth whitening and veneers, to help our patients improve the appearance of their smiles.At Dental Art Care Clinic, we believe that every patient deserves personalized and compassionate care. That's why we take the time to get to know our patients and their dental needs and goals.
           We are proud to have served the community for the past 5 years, and we look forward to continuing to provide high-quality dental care for many years to come. We welcome new patients of all ages, and we accept most insurance plans. Contact us today to schedule an appointment and experience the difference that 5 years of dental care can make.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;