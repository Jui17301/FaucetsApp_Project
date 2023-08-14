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
         <Dropdown style={{display:"flex",gap:"1rem"}}>
         <Dropdown.Toggle 
         style={{
            color : "#686868",
            backgroundColor : "#ffffff",
              fontSize:"14px"}} 
              id="dropdown-basic">
               <img 
               style={{
                 height:"15px",
                 marginBottom:"-2px",
                   marginRight:"8px",
                 width:"15px"
}} src={arbitrum} alt="" />
        Arbitrum Rinkeby
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="#/action-1"></Dropdown.Item> */}
        <Dropdown.Item href="#/action-1"
        style={{
          backgroundColor : "#ffffff",
          color:"#686868",
          fontSize: "14px"
        }}>
        <img 
        style={{height:"15px",marginBottom:"-2px",marginRight:"8px",width:"15px"}} src={fuji} alt="" />Avalanche Fuji</Dropdown.Item>
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
BNB Chain Testnet</Dropdown.Item>
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
Ethereum Rinkeby</Dropdown.Item>
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
Fantom Testnet</Dropdown.Item>
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
Harmony Testnet</Dropdown.Item>
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
POA Network Sokol</Dropdown.Item>
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
Polygon Mumbai</Dropdown.Item>
        
      </Dropdown.Menu>
      <Wallet/>
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
