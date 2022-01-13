import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { CustomDialog, useDialog } from "react-st-modal";
import { Link, Route, Switch } from "react-router-dom";
import Search from "../Search";
import Web3 from "web3";
import CowCoin from "../abis/CowCoin.json";
import ERC721 from "../abis/ERC721.json";
import axios from "axios";
import jsPDF from "jspdf";
import logoPDF from "./image/cowcert-01.png";
import '../font/Kanit-Medium.ttf';
import '../font/Kanit-Bold.ttf';



class ReportCert extends Component {
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
      const abiERC = ERC721.abi;
      const address = networkData.address;
      const cowCoin = new web3.eth.Contract(abi, address);
      const cowerc = new web3.eth.Contract(abiERC, address);
      this.setState({ cowCoin });
      this.setState({ cowerc });
      const coinCow = await cowCoin.methods.cowCertCount().call();
      this.setState({ coinCow });

      for (var i = 1; i <= coinCow; i++) {
        const task = await cowCoin.methods.blacklistedCowCert(i).call();
        const shwaddress = await cowerc.methods.ownerOf(i).call();
        const checkblock = await cowCoin.methods.blockCowcert(i).call();
        // console.log(cowCoin.methods.blockCowcert(i).call());
        // console.log(checkblock)
        this.setState({
          tasks: [...this.state.tasks, task],
          owner: [...this.state.owner, shwaddress],
          status: [...this.state.status, checkblock],
        });
      }
      axios
        .get(
          // "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x82eaDcf8504F893993cf075b98f11465078B240E&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
          "https://api-testnet.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x8501F5517751F191894dA46F80aD8f6A6ECb3554"
        )
        .then((response) => {
          // this.setState({
          //   setDataAll: [...this.state.setDataAll, response.data],
          // });
          const getDataAll = response.data.result.map((cow, key) => {
            const hashs = {
              hash: cow.hash,
              token: cow.tokenID,
              from: cow.from,
              to: cow.to,
            };
            this.setState({
              hash: [...this.state.hash, hashs],
            });
            // console.log(this.state.blocks)
            // let arrTmp = cow.result;
            // const saveshow = [];
            // if (arrTmp.length) {
            //   for (var i = 1; i <= arrTmp.length; i++) {
            //     if (arrTmp[i] === undefined) continue;
            //     this.setState({
            //       hash: [...this.state.hash, arrTmp[i].hash],
            //       blocks: [...this.state.blocks, arrTmp[i]],
            //     });
            //   }
            // }
          });
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
      owner: "",
      status: [],
      datas: this.props.data,
    };
    // this.createPDF = this.createPDF.bind(this);
  }
  createPDF(event) {
    const smart = event.datas.smart;
    const sprit = smart.split(",");
    let content ={

    }
    // console.log(sprit);
    if (sprit[13] == 1) {
      // var doc = new jsPDF("landscape", "px", "a4", "flase");
      var doc = new jsPDF("landscape", "px", "a4");
      // doc.addFileToVFS('Kanit-Bold.ttf','Kanit')
      doc.addFont('Kanit-Bold.ttf','Bold','normal');
      doc.setFont('Bold');
      // doc.addFont('supermarket.ttf', 'supermarket', 'normal');
      // doc.setFont('supermarket');
      doc.text(150, 20, 'COWCOIN NFT ASSOCIATION OF BRAHMAN BREEDERS');
      doc.addFont('Kanit-Medium.ttf','Kanit','normal');
      doc.setFont('Kanit');
      doc.addImage(logoPDF, "png", 10, 10, 60, 60);
      doc.text(80, 50, `Breeding leaves of Thai Brahman cattle, sex : ${sprit[1]=='F'?'เมีย':'ผู้'}`);
      doc.text(400, 50, `Registration number : ${sprit[2]}`);
      doc.text(80, 65, `Name : ${sprit[3]}`);
      doc.text(400, 65, `Date of birthday : ${sprit[4]}`);
      doc.text(80, 80, `ID Number : ${sprit[5]}`);
      doc.text(400, 80, `color : ${sprit[6]}`);
      doc.text(80, 95, `Breeder : ${sprit[7]} `);
      doc.text(80, 110, `Current owner : ${sprit[8]} ${sprit[9]}`);
      doc.text(400, 110, `Transfer date : ${sprit[10]}`);
      // Group SIRE Start
      doc.text(250, 150, `A  ${sprit[26]}`);
      doc.text(10, 170, `SIRE : T  ${sprit[24]}`);
      doc.text(250, 190, `T  ${sprit[28]}`);
      doc.text(400, 140, `${sprit[30]}`);
      doc.text(400, 160, `${sprit[32]}`);
      doc.text(400, 180, `${sprit[34]}`);
      doc.text(400, 200, `${sprit[36]}`);
      //  Group  DAM Start
      doc.text(250, 250, `A  ${sprit[40]}`);
      doc.text(10, 270, `DAM : T  ${sprit[38]}`);
      doc.text(250, 290, `T  ${sprit[42]}`);
      doc.text(400, 240, `${sprit[44]}`);
      doc.text(400, 260, `${sprit[46]}`);
      doc.text(400, 280, `${sprit[48]}`);
      doc.text(400, 300, `${sprit[50]}`);

      doc.save(`${sprit[3]}.pdf`);
      window.location.reload();
    }
    // var doc = new jsPDF('landscape','px','a4','flase');
    // doc.addImage(logoPDF,'png',10,10,60,60)
    // doc.text(260,90,`Certificate Brahman ${sprit[1]}`)
    // doc.text(260,100,`${sprit[3]}`)
    // doc.text(15,100,`${sprit[2]}`)
    // doc.save('cowcoin.pdf')
    // window.location.reload();
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
          <div class="row s-item">
            <div class="col text-end mt-2">
              <input
                type="submit"
                value="Download PDF"
                class="btn btn-success btn-lg px-3"
                onClick={(event) => {
                  event.preventDefault();
                  // console.log(this.state)
                  this.createPDF(this.state);
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
  return (
    <div>
      <button
        className="btn btn-success btn-lg px-3"
        onClick={async () => {
          //   console.log(props)
          const result = await CustomDialog(<ReportCert data={props} />, {
            title: "print PDF : ",
            showCloseIcon: true,
          });
        }}
      >
        ดาวโหลด
      </button>
    </div>
  );
}
export default CustomExample;
