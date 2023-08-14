import React from 'react'
import { Button } from 'react-bootstrap'
import {FaCopyright} from 'react-icons/fa'
import Navbar from './Navbar';
import { FiAlertTriangle } from "react-icons/fi";
import CustomTable1 from './CustomTable1';
// import Table from './Table';
import ReCAPTCHA from "react-google-recaptcha";



const Home = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
    <Navbar/>
    <div style={{backgroundColor:"#eef2fe",width:"100%"}}>
      <h4 style={{color:"white",backgroundColor:"#9b1fe9",padding:"20px",textAlign:"center"}}>Notice here</h4>
      <div className="main" style={{backgroundColor:"#eef2fe",padding:"70px"}}>
      <div className='home__header'>
        <h1 style={{color: "#9b1fe9",
    fontFamily: "Varela Round,sans-serif",
    fontSize: "35px",
    fontWeight: "600",
    marginBottom: "20px!important"}}>Request testnet LINK</h1>
        <p  className="home_p"style={{color:"#6d7380",
    fontSize: "16px",
    lineHeight: "25px",width: "680px"}}>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract </p>
    <br />
    <br />
        <div style={{backgroundColor:"white",padding:"80px"}} className='home__form'>
       
         <p style={{backgroundColor:"#eef2fe",padding:"15px"}}>  <FiAlertTriangle style={{fontSize: "20px",
    color: "rgb(155, 31, 233)"}}/>    Your wallet is connected to <span style={{fontWeight:"700"}}>Ethereum Kovan</span>,so you are requesting <span style={{fontWeight:"700"}}>Ethereum Kovan</span> Link/ETH </p>
         <h6 style={{color: "#9b1fe9",
    fontSize: "13px",
    fontWeight:"600"}}>Wallet Address</h6>
        <input type="text" placeholder='Your Wallet Address...'style={{width:"50%",padding:"10px"}} />
        <br /><br />
        <h6 style={{color: "#9b1fe9",
    fontSize: "13px",
    fontWeight:"600"}}>Request Type</h6>
        <input type="text" placeholder='20 Test Link'  />
        <input type="text" style={{marginLeft:"20px"}} placeholder='0.5 ETH'/>
        <br/>
        <br />
        <div className='recaptcha'>       <ReCAPTCHA   sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
  {/* 6LdP8aYnAAAAAFnnDPsdBLgP1lNw5i7GnGpMjXsh */}
       
        </div>
        <Button style={{color:"white",backgroundColor:"#9b1fe9",width:"15%",marginTop:"20px"}}>Send Request</Button>
        </div>
      </div>
      {/* <br /> */}
      


      <CustomTable1 />


      </div>
    
    <footer style={{color: "#000",
    fontSize: "13px",
    padding: "25px 0",
    textAlign: "center",
    backgroundColor:"white"}}>
    <p><FaCopyright/> copyright 2023 - All Right Reserved by Faucet</p>
  </footer>
  </div>

   </div>
  )
}

export default Home
