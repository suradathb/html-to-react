import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Web3 from "web3";
import CowCertificate from "./abis/CowCertificate.json";
import { encode } from "utf8";


// function Search(props) {
class Search extends Component{
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
      const data = task[1];
      const taskArray = data.split(",");
      this.setState({
        tasks: [...this.state.tasks, taskArray],
      });
    }
  }

  // getEmployees = () => {
  //   if(selectDrop == 0)
  //   {
  //       // alert("0")
  //   }
  //   if(selectDrop == 1)
  //   {
  //       alert("1")
  //   }
  //   if(selectDrop == 2)
  //   {
  //       axios
  //       .get(
  //         "https://api-testnet.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=" +
  //           country +
  //           "&apikey=YourApiKeyToken"
  //       )
  //       .then((response) => {
  //         setEmployeeList(response.data);
  //         alert(response.data.message)
  //       });
  //   }
  //   if(selectDrop == 3)
  //   {
  //       alert("3")
  //   }
  //   if(selectDrop == 4)
  //   {
  //       alert("4")
  //   }
  //   axios
  //     .get(
  //       "https://api-testnet.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=" +
  //         country +
  //         "&apikey=YourApiKeyToken"
  //     )
  //     .then((response) => {
  //       console.log(country, response.data);
  //       setEmployeeList(response.data);
  //     });
  // };
  getEmployeestest(){
    axios
      .get(
        "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0xd4294DC99d153027c7fe4ff96037C804c5B10a65&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken"
      )
      .then((response) => {
        this.setState({
          dataall:[...this.state.dataall,response.data],
        });
        const getDataAll  = this.state.dataall.map((cow,key) => {
          let arrTmp = cow.result
          const saveshow = [];
          // console.log(arrTmp)
          if(arrTmp.length)
          {
            for(var i = 1;i <= arrTmp.length;i++)
            {
              if(arrTmp[i] === undefined)
                continue;
                const show = arrTmp[i].hash
                const input = arrTmp[i].input
                // console.log(encode(input))
                this.setState({
                  hash:[...this.state.hash,arrTmp[i].hash],
                })
                // console.log(show)
                
            }
          }
        });
      });
  }
  
  searchChanged = event => {
    // console.log(this.state.search)
    this.setState({ search: this.state.search })
    // console.log(event.target.value)
    const showCowCertAll = this.state.tasks.map((task, showkey) => {
      const hash = this.state.hash
    
      if(hash == this.state.search)
      {
        console.log("test")
      }
      const getKey = hash[showkey]
      // console.log(getKey,task)
    });
  }

  constructor(props){
    super(props);
    this.state = {
      account: "",
      taskCount: 0,
      tasks: [],
      arrayCow:'',
      dataall:[],
      selectDrop:0,
      search:'',
      hash:[]
    }
    this.getEmployeestest = this.getEmployeestest.bind(this)
  }
  render(){
    // console.log(this.state.account)
    const showhash = this.state.hash.map((showhash,key) => {
      // console.log(key)
      for(var i = 0;i <= key;i++)
      {
        // console.log(showhash)
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
                    // setSelectDrop(event.target.value);
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
                  this.setState({search:(event.target.value)});
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
        {/* {this.state.hash
            .filter(hash => hash.includes(this.state.search))
            .map(hash => (
                <ul key={hash.id} class="list-group card card-1">
                    <li class="list-group-item">{hash}</li>
                </ul>
            )
        )} */}
        <div class="container py-5">
          <div class="row py-5">
            {/* <form class="col-md-9 m-auto" method="post" role="form">
              <div class="row">
                <div class="mb-3 name-app">
                  <h1 class="h1">{arrayCow.value}</h1>
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
                  <h1 class="h2">Cowcert Type : {arrayCow.value}</h1>
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
                    ทะเบียนโคเลขที่ : {arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">ชื่อโค : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">เพศ : {arrayCow.value}</label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">เลขประจำตัวโค : 20</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    วัน/เดือน/ปี เกิด : {arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    ผู้บำรุงพันธุ์ : {arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบัน : {arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    ชื่อเจ้าของปัจจุบัน : {arrayCow.value}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="inputsubject">วันที่โอน : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="inputsubject">
                    สถานะเปลี่ยนเจ้าของวัว : {arrayCow.value}
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
                  <label for="inputsubject">Hash.พ่อวัว : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">ชื่อพ่อโค : {arrayCow.value}</label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">วันเกิดพ่อ : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">เลขทะเบียนพ่อ : {arrayCow.value}</label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">สีพ่อวัว : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบันสายพ่อ : {arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    เลขประจำตัวพ่อโค : {arrayCow.value}
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
                  <label for="inputsubject">Hash.แม่โค : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">ชื่อแม่โค : {arrayCow.value}</label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">วันเกิดแม่ : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">เลขทะเบียนแม่ : {arrayCow.value}</label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">สีแม่วัว : {arrayCow.value}</label>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">
                    เจ้าของปัจจุบันสายแม่ : {arrayCow.value}
                  </label>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">
                    เลขประจำตัวแม่โค : {arrayCow.value}
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
