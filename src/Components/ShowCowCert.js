import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddCowCert from "../AddCowCert";
import Web3 from "web3";
import CowCoin from "../abis/CowCoin.json";
import CowCertificate from "../abis/CowCertificate.json";
import axios from "axios";
import "./ShowCowCert.css";

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
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
    }
  }

  async loadBlockchainData() {
    if (window.web3) {
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
      // console.log(cowCoin);
      // const shwaddress = cowCoin.methods.ownerOf(1).call();
      // console.log(shwaddress);

      for (var i = 1; i <= coinCow; i++) {
        const task = await cowCoin.methods.blacklistedCowCert(i).call();
        // const shwaddress = await cowCoin.methods.ownerOf(i).call();
        // console.log(task,i);
        this.setState({
          tasks: [...this.state.tasks, task],
        });
      }
      // const getEmployeestest = () => {
      axios
        .get(
          "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x4c17Cf6ADaaB57285556332e74C853a07962C0A0&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
        )
        .then((response) => {
          // console.log(response);
          this.setState({
            setDataAll: [...this.state.setDataAll, response.data],
          });
          const getDataAll = this.state.setDataAll.map((cow, key) => {
            let arrTmp = cow.result;
            const saveshow = [];
            // console.log(arrTmp);
            if (arrTmp.length) {
              for (var i = 1; i <= arrTmp.length; i++) {
                if (arrTmp[i] === undefined) continue;
                // const show = arrTmp[i].hash;
                // const task =  cowCoin.methods.blacklistedCowCert(i).call();
                // const shwaddress = await cowCoin.methods.ownerOf(i).call();
                // console.log(i);
                // console.log(arrTmp[i]);
                this.setState({
                  hash: [...this.state.hash, arrTmp[i].hash],
                  blocks: [...this.state.blocks, arrTmp[i]],
                  // tasks: [...this.state.tasks, task],
                });
                // console.log(show)
              }
            }
          });
          // alert(response)
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      cowCoin: [],
      taskCount: 0,
      tasks: [],
      loading: true,
      setDataAll: [],
      hash: [],
      getdata: [],
      searchShow: [],
      search: "",
      blocks: [],
    };
  }
  searchChanged = (event) => {
    console.log(event)
    const search = this.state.search;
    const selectDrop = this.state.selectDrop;
    const hash = this.state.hash;
    //  console.log(this.state.coinCow);
    for (var c = 0; c <= this.state.coinCow; c++) {
      const getdata = this.state.cowCoin.methods.blacklistedCowCert(c).call();
      // console.log(getdata)
      getdata.then((result) =>
        this.setState({
          searchShow: result,
        })
      );
    }
  };

  copyCodeToClipboard = (e) => {
    // console.log(e)
    const el = e;
    // console.log(el);
    // el.select()
    document.execCommand("copy");
  };

  render() {
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
            <form
              class="col-md-12 m-auto"
              role="form"
              // onSubmit={() => alert(JSON.stringify(this.state))}
              onSubmit={(event) => {
                event.preventDefault();
                // console.log(this.state)
                this.searchChanged();
              }}
            >
              {/* <div class="input-group mb-3">
                <div class="input-group-prepend d-none d-md-block input-group-text">
                  <select
                    name="f"
                    class="custom-select custom-select-sm  custom-arrow-select input-group-text font-size-base "
                    onChange={(event) => {
                      this.setState({
                        selectDrop: [event.target.value],
                      });
                    }}
                  >
                    <option value="1">Addresses</option>
                    <option value="2">เลขทะเบียนโค</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Search by Address / Txn Hash / Block / Token"
                  // onChange={this.searchChanged}
                  value={this.state.search}
                  onChange={(event) => {
                    this.setState({ search: event.target.value });
                  }}
                />
                <button
                  type="submit"
                  // onClick={this.searchChanged}
                  class="input-group-text btn-success"
                >
                  <i class="bi bi-search me-2"></i> Search
                </button>
              </div> */}
              <div className="Add-app">
                <Link class="btn btn-success btn-lg px-3" to="/addowner">
                  Create Owner
                  <i className="fa fa-plus-circle"></i>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link class="btn btn-success btn-lg px-3" to="/AddCowCert">
                  Register CowCert
                  <i className="fa fa-plus-circle"></i>
                </Link>
                <hr />
                <p>CertCount : {this.state.coinCow} รายการ</p>
              </div>

              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Cow No</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">เจ้าของเหรียญ</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {isCowCoin} */}
                  
                  {this.state.blocks.map((block, number) => {
                    // console.log(block);
                    const contractCow = this.state.tasks;
                    const beforAr = contractCow[number].cowCertlist;
                    const afterSp = beforAr.split(',');
                    // console.log(block.hash)
                    var s = 0;
                    return (
                      <>
                        <tr key={number} >
                          <td>{contractCow[number].tokendId}</td>
                          <td>
                          <img className="CowCoin" src={`https://ipfs.io/ipfs/${contractCow[number].imgPath}`} alt=""/>
                          </td>
                          <td>{afterSp[3]}</td>
                          <td>
                            สมาชิก : {afterSp[12]}<br/>
                            Hash : {block.hash}
                          </td>
                          <td>
                            <Link
                              class="btn btn-outline-secondary"
                              value={contractCow[number].id}
                              to="/search"
                            >
                              <i class="fa fa-eye"></i>
                              history
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              type="submit"
                              class="btn btn-outline-secondary"
                              onClick={() => this.copyCodeToClipboard(block.hash)}
                            >
                              <i class="fa fa-copy"></i>
                              Copy
                            </a>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ShowCowCert;
