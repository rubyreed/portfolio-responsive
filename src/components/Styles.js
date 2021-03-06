import styled from "styled-components";
import {Navbar} from "react-bootstrap";

export const ColorOne = "#343434"; //jet
export const ColorTwo = "#18FF6D"; //spring green
export const ColorThree = "#E8F1F2"; //azure
export const ColorFour = "#947EB0"; //purple mountain majesty
export const ColorFive = "#DE541E"; //orange


//in Multiple
export const Header = styled.h1`
  color: white;
`

//in About
export const LightButton = styled.button`
background-color: ${ColorThree};
color: ${ColorOne};
border-radius: .3rem;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
outline: none;
border-style: none;
&:hover {
  background-color: #BFBFBF;
}
&:active {
  background-color: #BFBFBF;
}
`

//in Skills
export const MyBigDiv = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`

export const MySmallDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 4rem;
margin-top: 2vw;
`

//in Contact
export const MyContainer = styled.div`
  background-color: ${ColorFour};
`;

export const MyFormGroup = styled.fieldset`
margin-bottom: 1rem;
border: none;
`

export const MyFormControl = styled.input`
padding: 1rem;
border-radius: .3rem;
margin-top: .5rem;
width: 94%;
margin-right:-1rem;
outline: none;
border-style: none;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

export const MyButton = styled.button`
background-color: ${ColorOne};
color: ${ColorThree};
padding: .8rem;
margin: .5rem;
margin-left: 0rem;
border-radius: .3rem;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
outline: none;
border-style: none;
font-size: 1rem;
width: 7rem;
&:hover {
  background-color: ${ColorThree};
  color: ${ColorOne};
}
&:active {
  background-color: ${ColorThree};
  color: ${ColorOne};
}
`

//in Navbar
export const MyNavbar = styled(Navbar)`
  background-color: ${ColorThree} !important;
  height: 4rem;
`;

//in Footer
export const MyFooter = styled.div`
  background-color: ${ColorFour};
  height: 4rem;
`;

export const ResumeA = styled.a`
color: ${ColorOne};
text-decoration: none;
&:hover{
  color: ${ColorThree}
};
&:active{
  color: ${ColorThree}
};
`