import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { CustomDialog, useDialog } from "react-st-modal";
import QrReader from "react-qr-reader";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

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
      username: "",
      tasks: [],
      cowcert: [],
      error: null,
      isLoaded: false,
      items: [],
      adminaccount: "",
      result: "No result",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.createAdmin = this.createAdmin.bind(this);
  }

  createAdmin(content) {
    // const objectArray = Object.values(content);
    if (content.adminaccount != null) {
      const addOwner = this.state.cowCoin.methods
        .addAdmin(content.adminaccount, `${content.username}`)
        .send({ from: this.state.account })
        .once("receipt", (receipt) => {
          // this.setState({ loading: false });
          window.location.reload();
        });
    } else {
      window.alert("Address not math");
    }
    // console.log(addCert)
  }
  handleChange = (e) => {
    this.setState({ cow_type: e.target.value });
  };
  // captureFile(event) {
  //   event.preventDefault();
  //   const file = event.target.files[0];
  //   const reader = new window.FileReader();
  //   reader.readAsArrayBuffer(file);
  //   reader.onloadend = () => {
  //     this.setState({ buffer: Buffer(reader.result) });
  //     // console.log('buffer', this.state.buffer)
  //   };
  // }
  handleScan(data) {
    // console.log(data)
    const getdata = data
    const Sdata = getdata.split(":");
    // console.log(Sdata[1].toLocaleLowerCase())
    this.setState({adminaccount: Sdata[1].toLocaleLowerCase()})
  }
  handleError(err) {
    console.error(err);
  }
  openImageDialog() {
    document.getElementById("contentCow").innerHTML = "";
    this.refs.qrReader1.openImageDialog();
  }
  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-12 m-auto text-center">
            <h1 class="h1">สร้าง Owners</h1>
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
                <div class="form-group col-md-4 mb-3"></div>
                <div class="form-group col-md-4 mb-3">
                  <QrReader
                    ref="qrReader1"
                    delay={this.state.delay}
                    // previewStyle={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode={true}
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3"></div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">Address เข้าใช้งาน</label>
                  <input
                    readOnly
                    required
                    id="contentCow"
                    class="form-control  form-control-lg"
                    type="text"
                    placeholder="Address"
                    name="account_Employee"
                    value={this.state.adminaccount}
                    onChange={(e) => {
                      this.setState({ adminaccount: e.target.value });
                    }}
                  />
                  <Button
                    className="btn btn-success btn-lg px-3"
                    variant="contained"
                    color="secondary"
                    onClick={this.openImageDialog.bind(this)}
                  >
                    Scan Qr Code
                  </Button>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3"></div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อผู้ใช้งาน</label>
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
                <div class="form-group col-md-4 mb-3"></div>
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
