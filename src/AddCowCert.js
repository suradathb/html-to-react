import React, { Component } from "react";
import Web3 from "web3";
import CreateCowCert from "./Components/CreateCowCert";
// import CowCertificate from "./abis/CowCertificate.json";
import multer from "multer";
import axios from "axios";
import CowCoin from "./abis/CowCoin.json";
import ipfs from './ipfs';
import ShowCowCert from "./Components/ShowCowCert";



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
  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = CowCoin.networks[networkId];
    const abi = CowCoin.abi;
    const address = networkData.address;
    const cowCoin = new web3.eth.Contract(abi, address);
    this.setState({ cowCoin });
    const coinCow = await cowCoin.methods.cowCertCount().call();
    this.setState({ coinCow });
    for (var i = 0; i <= coinCow; i++) {
      const task = await cowCoin.methods.blacklistedCowCert(i).call();
      // console.log(cowCoin.methods.blacklistedCowCert("0009255").call())
      this.setState({
        tasks: [...this.state.tasks, task],
      });
    }
    this.setState({ loading: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      coinCow: 0,
      tasks: [],
      loading: true,
      ipfsHash: "",
    };
    this.createTask = this.createTask.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  createTask(content) {
    // console.log(content)
    const CowCoinNo = content.cowcert_no;
    const account = content.account_Employee;
    const objectArray = Object.values(content);
    ipfs.files.add(content.buffer, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      const addCert = this.state.cowCoin.methods
      .tokenizedCowCert(account,CowCoinNo,`${objectArray}`,result[0].hash)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ ipfsHash: result[0].hash });
        this.setState({ loading: false });
        // console.log('ifpsHash', this.state.ipfsHash)
        // return <ShowCowCert/>
        window.location.reload();
      });
    })
  }
  toggleCompleted(taskId) {
    this.setState({ loading: true });
    this.state.smartCowCert.methods
      .toggleCompleted(taskId)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }
  
  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
              <h1 className="h1">Create Cowcert</h1>
              <div className="input-group mb-3">
                <p className="text-center">Create CowCert Loading...</p>
              </div>
            </div>
          </div>
        ) : (
          <CreateCowCert createTask={this.createTask} />
        )}
      </>
    );
  }
}

export default AddCowCert;
