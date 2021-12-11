import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Web3 from "web3";
import CowCertificate from "./abis/CowCertificate.json";
import CowCoin from "./abis/CowCoin.json";
import ERC721 from "./abis/ERC721.json";
import "./Search.css";
import Example from "./Components/ReportCert";


// function Search(props) {
class Search extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.getEmployeestest();
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
        // task.push(shwaddress)
        // console.log(shwaddress);
        this.setState({
          tasks: [...this.state.tasks, task],
          owner: [...this.state.owner,shwaddress],
        });
      }
    } else {
      const publicweb3 = new Web3(
        Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/"
      );

      this.setState({ account: "0x9029ce7108536BB09EE0C5bdB39cdF8bdFcfD4ce" });
      const networkId = await publicweb3.eth.net.getId();
      const networkData = CowCoin.networks[networkId];
      const abi = CowCoin.abi;
      const abiERC = ERC721.abi;
      const address = networkData.address;
      const cowCoin = new publicweb3.eth.Contract(abi, address);
      const cowerc = new publicweb3.eth.Contract(abiERC, address);
      this.setState({ cowCoin });
      this.setState({ cowerc });
      const coinCow = await cowCoin.methods.cowCertCount().call();
      this.setState({ coinCow });
      // console.log(cowerc)
      for (var i = 1; i <= coinCow; i++) {
        const task = await cowCoin.methods.blacklistedCowCert(i).call();
        // console.log(task)
        this.setState({
          tasks: [...this.state.tasks, task],
        });
      }
    }
  }

  getEmployeestest() {
    axios
      .get(
        "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x82eaDcf8504F893993cf075b98f11465078B240E&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
      )
      .then((response) => {
        const getDataAll = response.data.result.map((cow, key) => {
          // console.log(cow,key)
          this.setState({
            hash: [...this.state.hash, cow.hash],
          });
        });
      });
  }

  searchChanged = (event) => {
    // console.log(event)
    const search = this.state.search;
    const selectDrop = this.state.selectDrop;
    const hashs = this.state.hash;
    const count = 0;

    switch (selectDrop) {
      case "1":
        hashs.map((cert, key) => {
          // console.log(hash,key)
          for (var h = 1; h <= key; h++) {
            // const owner = "";
            if (cert == search) {
              let number = key - 1;
              this.state.tasks.map((name, keyname) => {
                if (number == keyname) {
                  const shwaddress = this.state.cowerc.methods.ownerOf(keyname).call();
                  this.setState({
                    searchShow: [...this.state.searchShow, name],
                    winOwner: [...this.state.owner, this.state.owner[number]],
                  });
                }
              });
            }
          }
        });
      case "2":
        this.state.tasks.map((name, key) => {
          
          if (name.tokendId == search) {
            let addressnum
            let number = key + 1;
            this.setState({
              searchShow: [...this.state.searchShow, name],
              winOwner: [...this.state.owner, this.state.owner[number]],
            });
          }
        });
    }
    // this.setState({ search: "" });
  };
  

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      cowCoin: [],
      coinCow: 0,
      cowerc: [],
      tasks: [],
      arrayCow: "",
      dataall: [],
      selectDrop: "1",
      search: "",
      searchShow: [],
      hash: [],
      getapi: [],
      owner: [],
      winOwner:"",
      isReadMore:true,
    };
    // this.getEmployeestest = this.getEmployeestest.bind(this);
  }

  render() {
    // console.log(this.state.owner)
  //   const getnumber = this.state.owner
  //   var newArray = [];
  //   var newArray = getnumber.filter(function(elem, pos) {
  //           return getnumber.indexOf(elem) == pos;
  //   });
  // const pads = newArray.map((num) => {
  //   console.log(num)
  // })
   
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Search Cowcert</h1>
            <div class="input-group mb-3">
              <div class="input-group-prepend d-none d-md-block input-group-text">
                <select
                  name="f"
                  class="custom-select custom-select-sm  custom-arrow-select input-group-text font-size-base "
                  onChange={(event) => {
                    this.setState({
                      selectDrop: event.target.value,
                    });
                  }}
                >
                  <option value="0">All</option>
                  <option value="1">Txn Hash</option>
                  <option value="2">เลขทะเบียนโค</option>
                </select>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Search by  Txn Hash / เลขทะเบียนโค "
                // onChange={this.searchChanged}
                value={this.state.search}
                onChange={(event) => {
                  this.setState({ search: event.target.value });
                }}
              />
              <button
                type="submit"
                onClick={this.searchChanged}
                class="input-group-text btn-success"
              >
                <i class="bi bi-search me-2"></i> Search
              </button>
            </div>
          </div>
        </div>
        <div class="container py-5">
          <div class="row py-5">
            <div id="contentCow">
              {/* {show} */}
              {this.state.searchShow.map((show, setkey) => {
                const Anum = show.id -1
                document.getElementById("contentCow").innerHTML = "";
                const beforAr = show.cowCertlist;
                const afterSp = beforAr.split(",");
                if (show && afterSp[13] == "0") {
                  return (
                    <form class="col-md-9 m-auto" method="post" role="form" key={setkey}>
                      <div class="row">
                        <div class="mb-3 name-app">
                          <h1 class="h1">{afterSp[3]}</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 show-logo">
                          <img
                            className="img-fluid-show"
                            // src="./assets/images/Me02.jpeg"
                            src={`https://ipfs.io/ipfs/${show.imgPath}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 name-app">
                          <h1 class="h2">Cowcert Type : {afterSp[0]}</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลโคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <label htmlFor="inputname">
                            <img
                              className="imgPreview"
                              src="../assets/images/CowCoin.jpeg"
                              alt=""
                            />
                            address เจ้าของโค : {this.state.winOwner[Anum]}
                           
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียนโคเลขที่ : {afterSp[2]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ชื่อโค : {afterSp[3]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">เพศ : {afterSp[1]}</label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            เลขประจำตัวโค : {afterSp[5]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            วัน/เดือน/ปี เกิด : {afterSp[4]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ผู้บำรุงพันธุ์ : {afterSp[7]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            เจ้าของปัจจุบัน : {afterSp[8]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ชื่อเจ้าของปัจจุบัน : {afterSp[9]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3">
                          <label htmlFor="inputsubject">
                            วันที่โอน : {afterSp[10]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3">
                          <label htmlFor="inputsubject">
                            สถานะเปลี่ยนเจ้าของวัว : {afterSp[11]}
                          </label>
                        </div>
                      </div>
                      <hr />

                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลพ่อโคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ชื่อพ่อโค : {afterSp[15]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            เลขทะเบียนพ่อ : {afterSp[14]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            สีพ่อวัว : {afterSp[16]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            เจ้าของปัจจุบันสายพ่อ : {afterSp[18]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            เลขประจำตัวพ่อโค : {afterSp[17]}
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลแม่โคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            เลขทะเบียนแม่ : {afterSp[20]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ชื่อแม่โค : {afterSp[19]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            สีแม่วัว : {afterSp[21]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            เจ้าของปัจจุบันสายแม่ : {afterSp[23]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            เลขประจำตัวแม่โค : {afterSp[22]}
                          </label>
                        </div>
                      </div>
                     </form>
                  );
                } else if (show && afterSp[13] == "1") {
                  return (
                    <form class="col-md-9 m-auto" method="post" role="form" key={setkey}>
                      <div class="row">
                        <div class="mb-3 name-app">
                          <h1 class="h1">{afterSp[3]}</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 show-logo">
                          <img
                            className="img-fluid-show"
                            // src="./assets/images/Me02.jpeg"
                            src={`https://ipfs.io/ipfs/${show.imgPath}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 name-app">
                          <h1 class="h2">Cowcert Type : {afterSp[0]}</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลโคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <label htmlFor="inputname">
                            <img
                              className="imgPreview"
                              src="../assets/images/CowCoin.jpeg"
                              alt=""
                            />
                            address เจ้าของโค : {this.state.winOwner[Anum]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียนโคเลขที่ : {afterSp[2]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ชื่อโค : {afterSp[3]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">เพศ : {afterSp[1]}</label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            เลขประจำตัวโค : {afterSp[5]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            วัน/เดือน/ปี เกิด : {afterSp[4]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ผู้บำรุงพันธุ์ : {afterSp[7]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label for="inputname">
                            เจ้าของปัจจุบัน : {afterSp[8]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputemail">
                            ชื่อเจ้าของปัจจุบัน : {afterSp[9]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3">
                          <label htmlFor="inputsubject">
                            วันที่โอน : {afterSp[10]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3">
                          <label htmlFor="inputsubject">
                            สถานะเปลี่ยนเจ้าของวัว : {afterSp[11]}
                          </label>
                        </div>
                      </div>
                      <hr />

                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลพ่อโคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียนพ่อโคบราห์มัน : {afterSp[24]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash พ่อ : {afterSp[25]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ปู่สายพ่อ : {afterSp[26]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ปู่สายพ่อ : {afterSp[27]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ย่าสายพ่อ : {afterSp[28]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ย่าสายพ่อ : {afterSp[29]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ปู่ทวดสายปู่ : {afterSp[30]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ปู่ทวดสายปู่ : {afterSp[31]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label for="inputname">
                            ทะเบียน ย่าทวดสายปู่ : {afterSp[32]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ย่าทวดสายปู่ : {afterSp[33]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ตาทวดสายย่า : {afterSp[34]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ตาทวดสายย่า : {afterSp[35]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ยายทวดสายย่า : {afterSp[36]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ยายทวดสายย่า : {afterSp[37]}
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="form-group col-md-12 mb-3">
                          <h3>ข้อมูลแม่โคบราห์มัน</h3>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียนแม่โคบราห์มัน : {afterSp[24]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash แม่ : {afterSp[25]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ตาสายแม่ : {afterSp[26]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ตาสายแม่ : {afterSp[27]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ยายสายแม่ : {afterSp[28]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ยายสายแม่ : {afterSp[29]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ปู่ทวดสายตา : {afterSp[30]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ปู่ทวดสายตา : {afterSp[31]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ย่าทวดสายตา : {afterSp[32]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ย่าทวดสายตา : {afterSp[33]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ตาทวดสายยาย : {afterSp[34]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ตาทวดสายยาย : {afterSp[35]}
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            ทะเบียน ยายทวดสายยาย : {afterSp[36]}
                          </label>
                        </div>
                        <div class="form-group col-md-6 mb-3">
                          <label htmlFor="inputname">
                            Hash ยายทวดสายยาย : {afterSp[37]}
                          </label>
                        </div>
                      </div>
                    </form>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/* </form> */}
      </>
    );
  }
}

export default Search;
