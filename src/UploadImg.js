import React, { Component } from "react";
import Web3 from "web3";
import CowCoin from "./abis/CowCoin.json";
import ipfs from './ipfs';

// function UploadImg() {
class UploadImg extends Component {
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
    for (var i = 0; i <= coinCow; i++) {
      const task = await cowCoin.methods.blacklistedCowCert(i).call();
      // console.log(cowCoin.methods.blacklistedCowCert("0009255").call())
      this.setState({
        tasks: [...this.state.tasks, task],
      });
    }
    this.setState({ loading: false });
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      ipfsHash: "",
      account: null,
      buffer: null,
      loading: true,
      tasks : []
    };
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    // const fd = FormData();
    // fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
    // axios.post('https://ipfs.fleek.co/ipfs/QmTecfbJp9xpxoGur23fBEUYQCta7MCKygGyCMa4YQcp1D',fd)
    // .then(res => {
    //     console.log(res);
    // })
  };
  render() {
    console.log(ipfs)
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Create Cowcert</h1>
            <div class="input-group mb-3">
              <p>
                โปรดทราบการสร้างข้อมูล CowCert
                ไม่สามารถเปลี่ยนแปลงข้อมูลได้หากบันทึกแล้ว
                โปรดตรวจสอบข้อมูลก่อนการบันทึกทุกครั้ง
              </p>
            </div>
          </div>
        </div>
        <input type="file" />
        <button>Upload File</button>
      </>
    );
  }
}

export default UploadImg;
