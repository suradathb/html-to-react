import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddCowCert from "../AddCowCert";
import Web3 from "web3";
import CowCertificate from "../abis/CowCertificate.json";
import axios from "axios";

class ShowCowCert extends Component {
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
    // const getEmployeestest = () => {
    axios
      .get(
        "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x5548bbf0736ca2f04417273c0f9edb1d23a13a10&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
      )
      .then((response) => {
        this.setState({
          setDataAll: [...this.state.setDataAll, response.data],
        });
        const getDataAll = this.state.setDataAll.map((cow, key) => {
          let arrTmp = cow.result;
          const saveshow = [];
          console.log(arrTmp)
          if (arrTmp.length) {
            for (var i = 1; i <= arrTmp.length; i++) {
              if (arrTmp[i] === undefined) continue;
              const show = arrTmp[i].hash;
              this.setState({
                hash: [...this.state.hash, arrTmp[i].hash],
              });
              // console.log(show)
            }
          }
        });
        // alert(response)
      });

    for (var i = 1; i <= taskCount; i++) {
      const task = await cowCertificate.methods.taskcows(i).call();
      const data = task[1];
      const taskArray = data.split(",");
      this.setState({
        tasks: [...this.state.tasks, taskArray],
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
      setDataAll: [],
      hash: [],
    };
  }

  render() {
    <Route path="/AddCowCert">
      <AddCowCert />
    </Route>;
    
    const showCowCertAll = this.state.tasks.map((task, key) => {
      const hash = this.state.hash
      const getKey = hash[key]
      // console.log(getKey)
      return (
        <>
          <tr>
            <th key={hash[key]}>{task[2]}</th>
            <td>{hash[key]}</td>
            <td>
              <Link class="btn btn-outline-secondary" to="/search">
                <i class="fa fa-eye"></i>
                View
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <a type="submit" class="btn btn-outline-secondary">
                <i class="fa fa-copy"></i>
                Copy
              </a>
            </td>
          </tr>
        </>
      );
    });
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-12 m-auto text-center">
            <h1 class="h1">Create Cowcert</h1>
            <div class="input-group mb-3">
              <p></p>
            </div>
          </div>
        </div>
        <div class="container py-5">
          <div class="row py-5">
            <form class="col-md-12 m-auto" method="post" role="form" action="">
              <div className="Add-app">
                <Link class="btn btn-success btn-lg px-3" to="/showcowcert">
                  Create Member
                  <i className="fa fa-plus-circle"></i>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link class="btn btn-success btn-lg px-3" to="/AddCowCert">
                  CreateCowCert
                  <i className="fa fa-plus-circle"></i>
                </Link>
                <hr/>
                <p>CertCount : {this.state.taskCount} รายการ</p>
              </div>

              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Cow No</th>
                    <th scope="col">Hash</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{showCowCertAll}</tbody>
              </table>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCowCert;
