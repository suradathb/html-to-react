import React, { Component, useRef } from "react";
import { CustomDialog, useDialog } from "react-st-modal";
import axios from "axios";
import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import ERC721 from "./abis/ERC721.json";
import "./SearchItem.css";
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

class SearchItem extends Component {
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
    if (window.web3) {
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      //   0xccf359752b0411133c9DbdD3774e37b21CDF8969
      const networkId = await web3.eth.net.getId();
      const networkData = CowCoin.networks[networkId];
      const abi = CowCoin.abi;
      const abiERC = ERC721.abi;
      const address = networkData.address;
      const cowCoin = new web3.eth.Contract(abi, address);
      const cowerc = new web3.eth.Contract(abiERC, address);
      this.setState({ cowCoin });
      this.setState({ cowerc });
      const coinCow = await cowCoin.methods.cowCertCount().call();
      this.setState({ coinCow });

      axios
        .get(
          // `https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x82eaDcf8504F893993cf075b98f11465078B240E&address=${accounts}`
          `https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x82eadcf8504f893993cf075b98f11465078b240e&address=${accounts}`
        )
        .then((response) => {
          const getDataAll = response.data.result.map((cow, key) => {
            const task = cowCoin.methods.blacklistedCowCert(cow.tokenID).call();
            task.then((hist) => {
              this.setState({
                tasks: [...this.state.tasks, hist],
              });
            });
          });
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      datas: this.props.data,
      login: "",
      toAddress: "",
      tokenId: 0,
      account: "",
      tasks: [],
      result: "No result",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.TransFromTo = this.TransFromTo.bind(this);
  }
  handleChange(event) {
    this.setState({ login: event.target.value });
  }

  TransFromTo(event) {
    // event.preventDefault()
    const fromCert = this.state.account;
    const to = event.toAddress;
    const tokend = event.datas.accessKey;
    // console.log(fromCert,to,tokend);
    // const CowCoinNo = content.cowcert_no;
    // const account = content.account_Employee;
    // const objectArray = Object.values(content);

    const addCert = this.state.cowCoin.methods
      .safeTransferFrom(fromCert, to, tokend)
      .send({ from: fromCert })
      .once("receipt", (receipt) => {
        console.log("ToSusess", to);
        document.getElementById("contentCowCoin").innerHTML = "";
      });
  }
  handleScan(data) {
    const getdata = data
    const Sdata = getdata.split(":");
    // console.log(Sdata[1].toLocaleLowerCase())
    this.setState({
      toAddress: Sdata[1].toLocaleLowerCase(),
    });
  }
  handleError(err) {
    console.error(err);
  }
  openImageDialog() {
    document.getElementById("contentCow").innerHTML = "";
    this.refs.qrReader1.openImageDialog();
  }
  render() {
    const data = this.state.datas;
    const image = this.state.datas.images;
    const smart = data.smart;
    const sprit = smart.split(",");

    return (
      <>
        <from id="contentCowCoin" className="search-item">
          <br />
          <div className="row s-im">
            <img
              className="s-CowCoin"
              src={`https://ipfs.io/ipfs/${image}`}
              alt=""
            />
          </div>
          <br />
          <div class="row s-item">
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputname">ทะเบียนโคเลขที่ : {sprit[2]}</label>
            </div>
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputemail">ชื่อโค : {sprit[3]}</label>
            </div>
          </div>
          <div class="row s-item">
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputname">เพศ : {sprit[1]}</label>
            </div>
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputemail">เลขประจำตัวโค : {sprit[5]}</label>
            </div>
          </div>
          <div class="row s-item">
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputname">วัน/เดือน/ปี เกิด : {sprit[4]}</label>
            </div>
            <div class="form-group col-md-6 mb-3">
              <label htmlFor="inputemail">ผู้บำรุงพันธุ์ : {sprit[7]}</label>
            </div>
          </div>
          <div className="input-group mb-3 s-box" >
            <input
              readOnly
              required
              id="contentCow"
              class="form-control  form-control-lg"
              type="text"
              placeholder="Address"
              value={this.state.toAddress}
              onChange={(event) => {
                this.setState({ toAddress: event.target.value });
              }}
            />
            <QrReader
              ref="qrReader1"
              delay={this.state.delay}
              // previewStyle={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              legacyMode={true}
            />
            <Button
              className="btn btn-success btn-lg px-3"
              variant="contained"
              color="secondary"
              onClick={this.openImageDialog.bind(this)}
            >
              Scan Qr Code
            </Button>
            {/* <p>{this.state.result}</p> */}
          </div>
          <div class="row s-item">
            <div class="col text-end mt-2">
              <input
                type="submit"
                value="บันทึก"
                class="btn btn-success btn-lg px-3"
                onClick={(event) => {
                  event.preventDefault();
                  // console.log(this.state)
                  this.TransFromTo(this.state);
                }}
              />
            </div>
          </div>
          <br />
        </from>
      </>
    );
  }
}

function CustomExample(props) {
  const padd = props.pad;
  const getacc = props.account.toLocaleLowerCase();
  var newArray = [];
  var newArray = padd.filter(function (elem, pos) {
    return padd.indexOf(elem) == pos;
  });
  let shwerc = props.ERC721.methods.ownerOf(props.accessKey).call();

  const pads = newArray.map((num) => {
    if (num != props.accessKey && getacc == props.hash.to) {
      return (
        <div>
          <button
            className="btn btn-success btn-lg px-3"
            onClick={async () => {
              // console.log(props)
              const smartshow = props.smart.split(",");
              const result = await CustomDialog(<SearchItem data={props} />, {
                title: "โอนเหรียญ : " + smartshow[3],
                showCloseIcon: true,
              });
            }}
          >
            โอนเหรียญ
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  });
  // if(newArray.length == 0)
  // {
  //   return (
  //     <div>
  //       <button
  //         className="btn btn-success btn-lg px-3"
  //         onClick={async () => {
  //           //   console.log(props)
  //           const smartshow = props.smart.split(",");
  //           const result = await CustomDialog(<SearchItem data={props} />, {
  //             title: "โอนเหรียญ : " + smartshow[3],
  //             showCloseIcon: true,
  //           });
  //         }}
  //       >
  //         โอนเหรียญ
  //       </button>
  //     </div>
  //   );
  // }
  return <div>{pads}</div>;
}
const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

export default CustomExample;
