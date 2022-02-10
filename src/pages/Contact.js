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
        <MyContainer>
          <h1>Thank you!</h1>
          <p>I'll be in touch soon.</p>
        </MyContainer>
      );
    }
    return (
    <MyContainer>
        <Header>
            Let's Chat.
        </Header>
        <Form
        style={{display:"flex", flexDirection:"column", alignItems:"center"}}
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >

        <MyFormGroup className="mb-3" controlId="formBasicName">
        <Form.Label style={{color:"white", marginRight:".5rem"}}>Name</Form.Label>
            <MyFormControl 
            type="text"
            placeholder="Your name"
            name="name"
            required
            />
        </MyFormGroup>

        <MyFormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white", marginRight:".5rem"}}>
              Email
            </Form.Label>
            <MyFormControl 
            type="email" 
            placeholder="Enter email"/>
      </MyFormGroup>

      <MyFormGroup className="mb-3 pt-0">
        <textarea
        placeholder="Send me a message"
        name="message"
        required
        />
      </MyFormGroup>

      <Form.Group className="mb-3 pt-0">
        <MyButton
        type="submit"
        >
          Submit
        </MyButton>
      </Form.Group>
    </Form>
</MyContainer>
    )
}

export default Contact;