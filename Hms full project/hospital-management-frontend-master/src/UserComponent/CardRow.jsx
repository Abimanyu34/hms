// import React from "react";

// const CardRow = () => {
//   return (
//     <div className="row">
//       <div className="col-md-4">
//         <div className="card rounded-card">
//           <div className="card-body">
//             <h5 className="card-title">Card 1</h5>
//             <p className="card-text">This is the first card.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card rounded-card">
//           <div className="card-body">
//             <h5 className="card-title">Card 2</h5>
//             <p className="card-text">This is the second card.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="card rounded-card">
//           <div className="card-body">
//             <h5 className="card-title">Card 3</h5>
//             <p className="card-text">This is the third card.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardRow;



// import logo from "../images/h1.png";
// import logo1 from "../images/h2.png";
// import logo2 from "../images/h3.png";

// import React from "react";

// const CardRow = () => {
//   return (
//     <div className="container" style={{
    
//       marginTop: '40px',
//       height:"50vh"

//     }}>
//     <div className="row row-cols-1 row-cols-md-3 g-4">
//       <div className="col">
//         <div className="card">
          
//         <img src={logo} alt="not available"width="354"height="250"className="border border-5 border-success" />

         
//           <div className="card-body bg-success">
//            <h5 className="card-title fw-bold text-white">Brush Regularly and Properly</h5>
//             <p className="card-text  text-white">Brushing your teeth at least twice a day is the foundation of any dental care routine. However, it's not just about brushing but doing it correctly. Hold your toothbrush at a 45-degree angle to your gums and use gentle, circular motions. Brush all surfaces of your teeth, including the inner, outer, and chewing surfaces. Don't forget to brush your tongue, as bacteria can accumulate there and cause bad breath.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div className="card bg-success">
//         <img src={logo1} alt="not available"width="354"height="250"className="border border-5 border-success"/>
         
//           <div className="card-body">
//             <h5 className="card-title fw-bold text-white ">Floss Daily and Use Mouthwash</h5>
//             <p className="card-text text-white  ">Flossing daily is essential for removing food particles and plaque from between your teeth, where your toothbrush can't reach. Use about 18 inches of floss, and gently move it up and down between each tooth, including below the gum line. Rinsing with mouthwash can also help kill bacteria and freshen your breath.Use about 18 inches of floss, and gently move it up and down between each tooth, including below the gum line.</p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div className="card bg-success">
//         <img src={logo2} alt="not available"  width="354" height="250" className="border border-5 border-success"/>
         
//          <div className="card-body">
//             <h5 className="card-title fw-bold text-white">Maintain a Balanced Diet </h5>
//             <p className="card-text  text-white  font-family-serif">Eating a balanced diet is crucial for maintaining good dental health. Foods that are high in sugar and starch can contribute to tooth decay, so it's best to limit your intake of these foods. Instead, opt for foods that are rich in calcium, vitamin D, and phosphorus, which can help strengthen your teeth and gums. Drinking plenty of water throughout the day can also help wash away food particles and keep your mouth hydrated.</p>
//           </div>
//         </div>
//       </div>
      
//     </div>
   
//     </div>
//   );
// };

// export default CardRow;




import logo from "../images/h1.png";
import logo1 from "../images/h2.png";
import logo2 from "../images/h3.png";

import React, { Component } from "react";

class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Brush Regularly and Properly",
      description: "Brushing your teeth at least twice a day is the foundation of any dental care routine. However, it's not just about brushing but doing it correctly. Hold your toothbrush at a 45-degree angle to your gums and use gentle, circular motions. Brush all surfaces of your teeth, including the inner, outer, and chewing surfaces. Don't forget to brush your tongue, as bacteria can accumulate there and cause bad breath."
    };
  }

  handleClick = () => {
    this.setState({
      title: "Updated Title",
      description: "This is an updated description."
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <img src={logo} alt="not available" width="100%" height="200" className="border border-5 border-success" />
              <div className="card-body bg-success">
                <h5 className="card-title fw-bold text-white" onClick={this.handleClick}>{this.state.title}</h5>
                <p className="card-text text-white">{this.state.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img src={logo1} alt="not available" width="100%" height="200" className="border border-5 border-success"/>
              <div className="card-body bg-success">
                <h5 className="card-title fw-bold text-white ">Floss Daily and Use Mouthwash</h5>
                <p className="card-text text-white">Flossing daily is essential for removing food particles and plaque from between your teeth, where your toothbrush can't reach. Use about 18 inches of floss, and gently move it up and down between each tooth, including below the gum line. Rinsing with mouthwash can also help kill bacteria and freshen your breath.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img src={logo2} alt="not available" width="100%" height="200" className="border border-5 border-success"/>
              <div className="card-body bg-success">
                <h5 className="card-title fw-bold text-white">Maintain a Balanced Diet </h5>
                <p className="card-text text-white">Eating a balanced diet is crucial for maintaining good dental health. Foods that are high in sugar and starch can contribute to tooth decay, so it's best to limit your intake of these foods. Instead, opt for foods that are rich in calcium, vitamin D, and phosphorus, which can help strengthen your teeth and gums. Drinking plenty of water throughout the day can also help wash away food particles and keep your mouth hydrated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardRow;