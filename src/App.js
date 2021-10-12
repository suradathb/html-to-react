import Footer from "./Components/Footer";
import Header from "./Components/Header";
import newcowdams from "./data/NewCowDam";
import { useState } from 'react';
import NewCowcert from "./Components/NewCowcert";
import Banner from "./Components/Banner";
import { Route, Switch } from "react-router-dom";
import Abount from "./Abount";
import Contract from "./Contract";
import Login from "./Login";
import Page404 from "./Page404";
import Search from "./Search";

function App() {
  const [selectNewCowItem,setSelectNewCowItem] = useState('');

  
  const tattooElements = newcowdams.filter((newcowdam) => {
    return newcowdam.name.includes(selectNewCowItem);
  }).map((newcowdam,index) => {
    return  <NewCowcert key={index} newcowdam={newcowdam} />;
  });

  return (
    <>
      <Header />
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
                    {tattooElements}
                </div>
              </div> 
            </section>
          </Route>
          <Route path="/search">
              <Search />
          </Route>
          <Route path="/abount">
              <Abount />
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

export default App;
