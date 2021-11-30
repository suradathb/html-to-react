import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useForm } from "react-hook-form";

class AddMember extends Component {
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
      const taskCount = await cowCoin.methods.goverCount().call();
      this.setState({ taskCount });
      // console.log(cowCoin.methods.goverCount().call())
      for (var i = 0; i <= taskCount; i++) {
        const task = await cowCoin.methods.taskcows(i).call();
        // console.log(task.government, task.username);
        this.setState({
          tasks: [...this.state.tasks, task],
        });
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      taskCount: 0,
      adminaccount: "",
      username: "",
      tasks: [],
      cowcert:[],
      error: null,
      isLoaded: false,
      items: []
    };

    this.createAdmin = this.createAdmin.bind(this);
  }
  
  createAdmin(content) {
    // const objectArray = Object.values(content);
    if (content.adminaccount != null) {
      const addOwner = this.state.cowCoin.methods
        .addAdmin(content.adminaccount, `${content.username}`)
        .send({ from: this.state.account })
        .once("receipt", (receipt) => {
          this.setState({ loading: false });
      });
      
    } else {
      window.alert("Address not math");
    }
    // console.log(addCert)
  }

  render() {
    return (
      <>
      <div class="container-fluid bg-light py-5">
          <div class="col-md-12 m-auto text-center">
            <h1 class="h1">Create Owners</h1>
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
                this.createAdmin(this.state);
              }}
            >
              <div class="row">
              <div class="form-group col-md-4 mb-3">
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">Address Login</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_no"
                    name="cowcert_no"
                    value={this.state.adminaccount}
                    onChange={(e) => {
                      this.setState({ adminaccount: e.target.value });
                    }}
                    placeholder="โปรดระบุ Address 0xe2219F83a44F1F2CBeDE0cD60d2DB72568de0280"
                    required
                  />
                  
                </div>
              </div>
              <div class="row">
              <div class="form-group col-md-4 mb-3">
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">Full Name</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_no"
                    name="cowcert_no"
                    value={this.state.username}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อผู้ใช้งาน"
                    required
                  />
                </div>
              </div>
              <div class="row">
              <div class="form-group col-md-4 mb-3">
                </div>
                <div class="form-group col-md-4 mb-3">
                  <Link class="btn btn-light btn-lg px-3" to="/showcowcert">
                    ยกเลิก
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="submit"
                    value="บันทึก"
                    class="btn btn-success btn-lg px-3"
                  />
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </>
    );
  }
}

export default AddMember;
