
import React, { useState } from "react";
import metamask from "../images/metamask-icon.png"
import walletconnect from "../images/walletconnect-icon.png"
import wallet from '../images/wallet.jpg'

 

const WalletConnectButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wallet-connect">
      <button className="connect-button" onClick={openModal} style={{border:"2px solid #9b1fe9"}}>
     
        Connect Wallet
      </button>
      <img src={wallet} className="wallet_img" alt="" style={{visibility:"hidden"}}/>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="box">
              <h2>Connect Your Wallet</h2>
              <div className="cards">
                <div className="card">
                  <img src={metamask} alt="Metamask" />
                  <p style={{color:"#9b1fe9",fontFamily:"500"}}>Metamask</p>
                </div>
                <div className="card">
                  <img
                    src={walletconnect}
                    alt="WalletConnect"
                  />
                  <p style={{color:"#9b1fe9",padding:"10px"}}>WalletConnect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;