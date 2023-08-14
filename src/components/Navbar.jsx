import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Wallet from './Wallet'
import {FaRegUserCircle} from 'react-icons/fa';
import arbitrum from "../images/arbitrum.png";
import  fuji from "../images/fuji.png";
import  fantom from "../images/fantom.png";
import  harmony from "../images/harmony.jpeg";
import  poa from "../images/poa.png";
import  polygon from "../images/polygon.jpeg";


const Navbarr = () => {
  return (
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='nav--header__left'>Faucets</Navbar.Brand>
        
         {/* dropdown starts here */}
         <Dropdown  style={{display:"flex",gap:"1rem",padding:"0px"}}>
      <Dropdown.Toggle variant="" style={{border:"1px solid black",
  color : "#6d7380",
  fontSize:"14px"}} id="dropdown-basic">
       <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={arbitrum} alt="" />
       <span className='dropdown'> Arbitrum Rinkeby</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"
        style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{height:"15px",marginBottom:"-2px",marginRight:"8px",width:"15px"}} src={fuji} alt="" />Avalanche Fuji</Dropdown.Item>
        <Dropdown.Item href="#/action-2"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src="" alt="" />
<span className='dropdown'>BNB Chain Testnet</span></Dropdown.Item>
        <Dropdown.Item href="#/action-3"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={arbitrum} alt="" />
<span className='dropdown'>Ethereum Rinkeby</span></Dropdown.Item>
        <Dropdown.Item href="#/action-4"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={fantom} alt="" />
<span className='dropdown'>Fantom Testnet</span></Dropdown.Item>
        <Dropdown.Item href="#/action-5"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={harmony} alt="" />
<span className='dropdown'>Harmony Testnet</span></Dropdown.Item>
        <Dropdown.Item href="#/action-6"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={poa} alt="" />
<span className='dropdown'>POA Network Sokol</span></Dropdown.Item>
        <Dropdown.Item href="#/action-7"  style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img style={{
  height:"15px",
  marginBottom:"-2px",
  marginRight:"8px",
  width:"15px"
}} src={polygon} alt="" />
<span className='dropdown'>Polygon Mumbai</span></Dropdown.Item>
      </Dropdown.Menu>
      <Wallet />
    
  

            {/* dropdown ends here */}
            <div style={{fontSize:"25px",backgroundColor:"#ccc",width:"50px",height:"50px",borderRadius:"50px",paddingLeft:"12px"}}>
        <FaRegUserCircle  />
        </div>
        </Dropdown>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbarr
