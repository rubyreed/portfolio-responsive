import React from "react";
import { MyContainer} from "../components/Styles.js";
// import confetti from "../images/confetti.png";

const Submitted = () => {
    return (
        <div>
        <MyContainer style={{minWidth:"12rem", marginLeft: "15vw", marginRight: "15vw",marginTop: "10vw", borderRadius:".3rem",padding:"4rem",display:"flex",textAlign:"center",flexDirection:"column"}}>
          {/* <img style={{height:"4vw", width:"4vw"}} src={confetti}/> */}
          <h1 style={{color:"white"}}>Your form has been submitted!</h1>
          <p style={{color:"white"}}>You may close this window now.</p>
        </MyContainer>
        </div>
    )
}

export default Submitted;