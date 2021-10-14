import React, { Component } from "react";
import SmartCowCert from "./abis/SmartCowCert.json";
import Web3 from "web3";
import Axios from "axios";
import CreateCowCert from "./Components/createCowCert";

// function AddCowCert(props) {
class AddCowCert extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData(dispatch) {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = SmartCowCert.networks[networkId];
    if (networkData) {
      const abi = SmartCowCert.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
      const getCow = await contract.methods.getCowCert().call();
      this.setState({ getCow });
      // Load Cowcert
      for (var i = 1; i <= getCow; i++) {
        const cowcert = await contract.methods.createCowCert(i - 1).call();
        this.setState({
          getCowCerts: [...this.state.addCowCert, cowcert],
        });
      }
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }
  }
  addCowCert =(cowcert)=>{
    this.state.contract.methods.addCowCert(cowcert).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({
        colors: [...this.state.addCowCert, cowcert]
      })
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      addCowCert: null,
      getCowCerts: [],
      loading: true,
    };
  }
  render() {
    return (
      <>
        <CreateCowCert />
      </>
    );
  }
}

export default AddCowCert;
