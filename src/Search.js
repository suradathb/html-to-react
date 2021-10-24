import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Web3 from "web3";
import CowCertificate from "./abis/CowCertificate.json";
import { encode } from "utf8";

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
      const networkData = CowCertificate.networks[networkId];
      const abi = CowCertificate.abi;
      const address = networkData.address;
      const cowCertificate = new web3.eth.Contract(abi, address);
      this.setState({ cowCertificate });
      const taskCount = await cowCertificate.methods.taskCount().call();
      this.setState({ taskCount });
      for (var i = 1; i <= taskCount; i++) {
        const task = await cowCertificate.methods.taskcows(i).call();
        const data = task[1];
        const taskArray = data.split(",");
        this.setState({
          tasks: [...this.state.tasks, taskArray],
        });
      }
    }
    else{
      const publicweb3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/")
      this.setState({ account: "0x5548BBf0736ca2f04417273c0F9edb1D23a13a10" });
      const networkId = await publicweb3.eth.net.getId();
      const networkData = CowCertificate.networks[networkId];
      const abi = CowCertificate.abi;
      const address = networkData.address;
      const cowCertificate = new publicweb3.eth.Contract(abi, address);
      this.setState({ cowCertificate });
      const taskCount = await cowCertificate.methods.taskCount().call();
      this.setState({ taskCount });
      for (var i = 1; i <= taskCount; i++) {
        const task = await cowCertificate.methods.taskcows(i).call();
        const data = task[1];
        const taskArray = data.split(",");
        this.setState({
          tasks: [...this.state.tasks, taskArray],
        });
      }
    }
  }

  // getEmployees = () => {
  //   const search = this.state.search;
  //   const selectDrop = this.state.selectDrop;
  //   if (selectDrop == 0) {
  //     // alert("0")
  //   }
  //   if (selectDrop == 1) {
  //     alert("1");
  //   }
  //   if (selectDrop == 2) {
  //     axios
  //       .get(
  //         "https://api-testnet.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=" +
  //           search +
  //           "&apikey=YourApiKeyToken"
  //       )
  //       .then((response) => {
  //         // setEmployeeList(response.data);
  //         alert(response.data.message);
  //       });
  //   }
  //   if (selectDrop == 3) {
  //     alert("3");
  //   }
  //   if (selectDrop == 4) {
  //     alert("4");
  //   }
  //   axios
  //     .get(
  //       "https://api-testnet.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=" +
  //         search +
  //         "&apikey=YourApiKeyToken"
  //     )
  //     .then((response) => {
  //       console.log(search, response.data);
  //       this.setState({
  //         tasks: [...this.steate.task, response.data],
  //       });
  //     });
  // };
  getEmployeestest() {
    axios
      .get(
        "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x5548bbf0736ca2f04417273c0f9edb1d23a13a10&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
      )
      .then((response) => {
        // console.log(response.data)
        // this.setState({
        //   dataall: [...this.state.dataall, response.data],
        // });
        const getDataAll = response.data.result.map((cow, key) => {
          let arrTmp = response.data.result;
          // console.log(arrTmp.length)
          if (arrTmp.length) {
            for (var i = 1; i <= arrTmp.length; i++) {
              if (arrTmp[i] === undefined) continue;
              const show = arrTmp[i].hash;
              const input = arrTmp[i].input;
              // console.log(show,input)
              this.setState({
                hash: [...this.state.hash, arrTmp[i].hash],
              });
            }
          }
        });
      });
  }

  searchChanged = (event) => {
    const search = this.state.search;
    const selectDrop = this.state.selectDrop;
    const hash = this.state.hash;
    const count = 0;
    
    const setup = this.state.tasks.map((task, showkey) => {
      for (var x = 0; x <= hash.length; x++) {
        if (search == hash[showkey]) {
          this.setState({
            searchShow: [task],
          });
        }
      }
      
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      taskCount: 0,
      tasks: [],
      arrayCow: "",
      dataall: [],
      selectDrop: 0,
      search: "",
      searchShow: [],
      hash: [],
    };
    // this.getEmployeestest = this.getEmployeestest.bind(this);
  }
  render() {
    const show = this.state.searchShow.map((show, setkey) => {
      if(show) {
        return (
          <form class="col-md-9 m-auto" method="post" role="form">
            <div class="row">
              <div class="mb-3 name-app">
                <h1 class="h1">{show[3]}</h1>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 show-logo">
                <img
                  className="img-fluid-show"
                  src="./assets/images/Me02.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 name-app">
                <h1 class="h2">Cowcert Type : {show[0]}</h1>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12 mb-3">
                <h3>ข้อมูลโคบราห์มัน</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">ทะเบียนโคเลขที่ : {show[2]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">ชื่อโค : {show[3]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">เพศ : {show[1]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">เลขประจำตัวโค : {show[5]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">วัน/เดือน/ปี เกิด : {show[4]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">ผู้บำรุงพันธุ์ : {show[7]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">เจ้าของปัจจุบัน : {show[8]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">ชื่อเจ้าของปัจจุบัน : {show[9]}</label>
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="inputsubject">วันที่โอน : {show[10]}</label>
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="inputsubject">
                  สถานะเปลี่ยนเจ้าของวัว : {show[11]}
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
              <div class="mb-3">
                <label for="inputsubject">Hash.พ่อวัว : {show[18]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">ชื่อพ่อโค : {show[14]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">วันเกิดพ่อ : {show[13]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">เลขทะเบียนพ่อ : {show[12]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">สีพ่อวัว : {show[15]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">
                  เจ้าของปัจจุบันสายพ่อ : {show[17]}
                </label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">เลขประจำตัวพ่อโค : {show[16]}</label>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="form-group col-md-12 mb-3">
                <h3>ข้อมูลแม่โคบราห์มัน</h3>
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="inputsubject">Hash.แม่โค : {show[25]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">ชื่อแม่โค : {show[21]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">วันเกิดแม่ : {show[20]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">เลขทะเบียนแม่ : {show[19]}</label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">สีแม่วัว : {show[22]}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6 mb-3">
                <label for="inputname">
                  เจ้าของปัจจุบันสายแม่ : {show[24]}
                </label>
              </div>
              <div class="form-group col-md-6 mb-3">
                <label for="inputemail">เลขประจำตัวแม่โค : {show[23]}</label>
              </div>
            </div>
          </form>
        );
      } else if(show == 0) {
        return (
          <form class="col-md-9 m-auto" method="post" role="form">
            <div class="row">
              <div class="mb-3 name-app">
                <h1 class="h1">ไม่พบข้อมูล</h1>
              </div>
            </div>
            </form>
        )
      }

    });
    
    
    
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
                      selectDrop: [event.target.value],
                    });
                  }}
                >
                  <option selected="" value="0">
                    All Filters
                  </option>
                  <option value="1">Addresses</option>
                  <option value="2">Tokens</option>
                  <option value="3">Name Tags</option>
                  <option value="4">Labels</option>
                  <option value="5">Websites</option>
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
            {show}
            {/* <form class="col-md-9 m-auto" method="post" role="form">
              <div class="row">
                <div class="mb-3 name-app">
                  <h1 class="h1">{this.state.arrayCow.value}</h1>
                </div>
              </div>
              <div class="row">
                <div class="mb-3 show-logo">
                  <img
                    className="img-fluid-show"
                    src="./assets/images/Me02.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 name-app">
                  <h1 class="h2">Cowcert Type : {this.state.arrayCow.value}</h1>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12 mb-3">
                  <h3>ข้อมูลโคบราห์มัน</h3>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    ทะเบียนโคเลขที่ : {this.state.dataall[0]}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    ชื่อโค : {this.state.dataall[1]}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เพศ : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">เลขประจำตัวโค : 20</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    วัน/เดือน/ปี เกิด : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    ผู้บำรุงพันธุ์ : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบัน : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    ชื่อเจ้าของปัจจุบัน : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="inputsubject">
                    วันที่โอน : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="inputsubject">
                    สถานะเปลี่ยนเจ้าของวัว : {this.state.arrayCow.value}
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
                <div class="mb-3">
                  <label for="inputsubject">
                    Hash.พ่อวัว : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    ชื่อพ่อโค : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    วันเกิดพ่อ : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เลขทะเบียนพ่อ : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    สีพ่อวัว : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบันสายพ่อ : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    เลขประจำตัวพ่อโค : {this.state.arrayCow.value}
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
                <div class="mb-3">
                  <label for="inputsubject">
                    Hash.แม่โค : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    ชื่อแม่โค : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    วันเกิดแม่ : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เลขทะเบียนแม่ : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    สีแม่วัว : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบันสายแม่ : {this.state.arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    เลขประจำตัวแม่โค : {this.state.arrayCow.value}
                  </label>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
