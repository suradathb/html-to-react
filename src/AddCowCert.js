import React, { Component } from "react";
import SmartCowCert from "./abis/SmartCowCert.json";
import Web3 from "web3";
import CreateCowCert from "./Components/CreateCowCert";

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
  async loadBlockchainData() {
    const web3 = window.web3;

    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = SmartCowCert.networks[networkId];
    const abi = SmartCowCert.abi;
    const address = networkData.address;
    const smartCowCert = new web3.eth.Contract(abi, address);
    this.setState({ smartCowCert });
    const taskCount = await smartCowCert.methods.taskCount().call();
    this.setState({ taskCount });
    for (var i = 1; i <= taskCount; i++) {
      const task = await smartCowCert.methods.tasks(i).call();
      this.setState({
        tasks: [...this.state.tasks, task],
      });
    }
    this.setState({ loading: false });

    // const networkId = await web3.eth.net.getId();
    // const networkData = SmartCowCert.networks[networkId];

    // if (networkData) {
    //   const abi = SmartCowCert.abi;
    //   const address = networkData.address;
    //   const contract = new web3.eth.Contract(abi, address);
    //   this.setState({ contract });
    //   const getCow = await contract.methods.taskCount().call();
    //   this.setState({ getCow });

    // } else {
    //   window.alert("Smart contract not deployed to detected network.");
    // }
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
  }
  createTask(content) {
    console.log(content)
    this.setState({ loading: true });
    this.state.smartCowCert.methods
      .createTask(content)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
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
            <div id="loader" className="text-center">
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <CreateCowCert
              tasks={this.state.tasks}
              createTask={this.createTask}
              toggleCompleted={this.toggleCompleted}
            />
          )}
              
        {/* <CreateCowCert /> */}
      </>
    );
  }
}

export default AddCowCert;
