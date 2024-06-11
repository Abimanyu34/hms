import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  const retrieveAllDoctor = async () => {
    const response = await axios.get("http://localhost:8080/api/doctor/all");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllDoctor = async () => {
      const allDoctor = await retrieveAllDoctor();
      if (allDoctor) {
        setAllDoctor(allDoctor);
      }
    };

    getAllDoctor();
  }, []);

  return (
  <div>
    <div class="container " style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      height: '70vh',
      width: '100vh',
      //paddingTop:'100px',
      marginTop: '50px',
      marginBottom: '50px',
    }}>

      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: "center"
      }}>
        Dental Art Care
      </h1>
      <p style={{
        fontSize: '24px',
        color: '#666',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        Taking care of your teeth helps prevent cavities and gum disease. Brushing and flossing properly can prevent plaque (pronounced: plak), a clear film of bacteria that sticks to your teeth. After you eat, the bacteria break down sugar on your teeth into acids that eat away tooth enamel, causing holes called cavities.
      </p>



      <Link to="/user/patient/register" class="active">
        <button class="btn btn-success btn-lg">
          Sign up! </button>
      </Link>



      {/* {allDoctor.map((doctor) => {
        return <DoctorCard item={doctor} />;
      })} */}


    </div><div><Footer /></div></div>
  );
};

export default HomePage;


