
// import React from "react";
// import logo from "../images/dh1.png";

// const DoctorHome = () => {
//   return (
//     <div className="container" style={{
//       marginTop: '50px'
//     }}>
//       <div className="row">
//         <div className="col-md-6">
//           <img src={logo} alt="" className="img-fluid border border-5 border-success" />
//         </div>
//         <div className="col-md-3 ">
//           <div className="card text-color bg-success-outline mb-3" style={{ maxWidth: '18rem' }}>
//             <div className="card-header">DR Aarthi</div>
//             <div className="card-body">
//               <h5 className="card-title"> Experience-5years</h5>
//               <p className="card-text">Prosthodontist specialist</p>
//             </div>
//           </div>
//           <div className="card text-color bg-success-outline mb-3  mt-5" style={{ maxWidth: '18rem'}}>
//             <div className="card-header">DR Aarthi</div>
//             <div className="card-body">
//               <h5 className="card-title">Experience-5years</h5>
//               <p className="card-text"></p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3 ">
//           <div className="card text-color bg-success-outline mb-3" style={{ maxWidth: '18rem' }}>
//             <div className="card-header">DR Aarthi</div>
//             <div className="card-body">
//               <h5 className="card-title"> Experience-5years</h5>
//               <p className="card-text">Prosthodontist specialist</p>
//             </div>
//           </div>
//           <div className="card text-color bg-success-outline mb-3  mt-5" style={{ maxWidth: '18rem'}}>
//             <div className="card-header">DR Aarthi</div>
//             <div className="card-body">
//               <h5 className="card-title">Experience-5years</h5>
//               <p className="card-text"></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorHome;



import React, { useState, useEffect } from "react";
import logo from "../images/dh1.png";

const DoctorHome = () => {
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

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isSmallScreen) {
      setIsTransitioning(true);

      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSmallScreen]);

  return (
    <div className={`container ${isTransitioning ? 'transitioning' : ''}`} style={{ marginTop: '50px' }}>
      <div className="row">
        <div className={`col-md-6 ${isSmallScreen ? 'col-12' : ''}`}>
          <img src={logo} alt="" className="img-fluid border border-5 border-success" />
        </div>
        <div className={`col-md-3 ${isSmallScreen ? 'col-12' : ''} ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="card text-color bg-success-outline mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">DR Aarthi</div>
            <div className="card-body">
              <h5 className="card-title"> Experience-5years</h5>
              <p className="card-text">Prosthodontist specialist</p>
            </div>
          </div>
          <div className="card text-color bg-success-outline mb-3  mt-5" style={{ maxWidth: '18rem'}}>
            <div className="card-header">DR Aarthi</div>
            <div className="card-body">
              <h5 className="card-title">Experience-5years</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 ${isSmallScreen ? 'col-12' : ''} ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="card text-color bg-success-outline mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">DR Hari Haran</div>
            <div className="card-body">
              <h5 className="card-title"> Experience-5years</h5>
              <p className="card-text">Periodontist specialist</p>
            </div>
          </div>
          <div className="card text-color bg-success-outline mb-3  mt-5" style={{ maxWidth: '18rem'}}>
            <div className="card-header">DR Aarthi</div>
            <div className="card-body">
              <h5 className="card-title">Experience-5years</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;