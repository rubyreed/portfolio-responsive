import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { MyContainer, Header, MyButton, MyFormGroup, MyFormControl } from "../components/Styles.js";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/1c240c00-89f5-11ec-9849-fb4467695b96";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <MyContainer style={{padding:"4rem",width: "20%",display:"flex",textAlign:"center", margin:"auto",marginBottom:"5rem",marginTop:"5rem",flexDirection:"column"}}>
          <h1 style={{color:"white"}}>Thank you!</h1>
          <p style={{color:"white"}}>I'll be in touch soon.</p>
        </MyContainer>
      );
    }
    return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"5rem", marginBottom: "5rem"}}>
    <MyContainer className="contactcontainer">
        <Header className="contactheader">
            Let's Chat.
        </Header>
        <Form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >

        <MyFormGroup className="mb-3" controlId="formBasicName">
          <Form.Label style={{color:"white"}}>
            Name:
          </Form.Label>
          <br/>
          <MyFormControl 
            type="text"
            placeholder="Name*"
            name="name"
            required
            />
        </MyFormGroup>

        <MyFormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>
              Email:
            </Form.Label>
            <br/>
            <MyFormControl 
            type="email" 
            placeholder="Email*"
            required/>
      </MyFormGroup>

      <MyFormGroup className="mb-3" controlId="formBasicSubject">
            <Form.Label style={{color:"white"}}>
              Subject:
            </Form.Label>
            <br/>
            <MyFormControl 
            type="subject" 
            placeholder="Subject*"
            required/>
      </MyFormGroup>

      <MyFormGroup className="mb-3" controlID="formTextArea">
        <Form.Label style={{color:"white"}}>Message:</Form.Label>
        <br/>
        <MyFormControl placeholder="Message*" as="textarea" rows={5} required/>
      </MyFormGroup>

      <Form.Group className="mb-3">
        <MyButton
        type="submit"
        >
          Submit
        </MyButton>
      </Form.Group>
    </Form>
</MyContainer>
      </div>
    )
}

export default Contact;