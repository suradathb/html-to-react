import Footer from "./Components/Footer";
import Header from "./Components/Header";
import newcowdams from "./data/NewCowDam";
import NewCowcert from "./Components/NewCowcert";
import Banner from "./Components/Banner";
import { Route, Switch } from "react-router-dom";
import Abount from "./Abount";
import Contract from "./Contract";
import Login from "./Login";
import Page404 from "./Page404";
import Search from "./Search";
import Web3 from 'web3';
import AddCowCert from "./AddCowCert";
import React,{Component} from "react";
import Home from "./Home";
import ShowCowCert from "./Components/ShowCowCert";

const str = "F1|009255|F|PX|MrKOK201|04/10/2556|แดง|100001|100002|สวาท บังนิไกร|10/4/2556|0|007255|Mr.MOT 09|ZX|แดง|90|10/04/2554|100002|0|003255|Ms.SXT 02|SX|แดง|2|10/4/2555|100003|0";
const arrayCow = str.split("|");
  
// const [selectNewCowItem,setSelectNewCowItem] = useState('');

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }
  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }
  //console.log(arrayCow)
  constructor(props) {
    super(props)
    this.state = { account: '' }
  }
  
 render(){
  
    return (
      <>
        <Header account={this.state.account} />
        <Switch>
            <Route path="/" exact>
              <Banner />
              <section class="bg-light">
                <div class="container py-5">
                  <div class="row text-center py-3">
                      <div class="col-lg-6 m-auto">
                          <h1 class="h1">ทำเนียบพ่อบราห์มัน</h1>
                          <p>
                            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            
                          </p>
                      </div>
                  </div>
                  <div class="row">
                  <Home />
                  </div>
                  {/* <div class="row">
                      {tattooElements}
                  </div> */}
                </div> 
              </section>
            </Route>
            <Route path="/search">
              <Search value={arrayCow} />
            </Route>
            <Route path="/abount">
                <Abount />
            </Route>
            <Route path="/showcowcert">
                {/* <AddCowCert value={this.state.account}/> */}
                <ShowCowCert />
            </Route>
            <Route path="/addcowcert">
                  <AddCowCert />
            </Route>
            <Route path="/contact">
              <Contract />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
        </Switch>
        <Footer />
      </> 
    );
  }
}

export default App;
