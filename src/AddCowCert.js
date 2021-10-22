import React, { Component } from "react";
import Web3 from "web3";
import CreateCowCert from "./Components/CreateCowCert";
import CowCertificate from "./abis/CowCertificate.json";


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
    const networkData = CowCertificate.networks[networkId];
    const abi = CowCertificate.abi;
    const address = networkData.address;
    const cowCertificate = new web3.eth.Contract(abi, address);
    this.setState({ cowCertificate });
    const taskCount = await cowCertificate.methods.taskCount().call();
    this.setState({ taskCount });
    for (var i = 1; i <= taskCount; i++) {
      const task = await cowCertificate.methods.taskcows(i).call();
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
      taskCount: 0,
      tasks: [],
      loading: true,
    };
    this.createTask = this.createTask.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  createTask(content) {
    console.log(content)
    const objectArray = Object.values(content);
    this.setState({ loading: true });
    const addCert = this.state.cowCertificate.methods
      .CreateCowCert(`${objectArray}`)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
    // console.log(addCert)
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
