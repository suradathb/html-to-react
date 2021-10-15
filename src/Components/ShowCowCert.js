import React from "react";
import { Route,Link} from "react-router-dom";
import AddCowCert from "../AddCowCert";

function ShowCowCert() {
  <Route path="/AddCowCert">
    <AddCowCert />
  </Route>
  return (
    <>
      <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
          <h1 class="h1">Create Cowcert</h1>
          <div class="input-group mb-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div class="container py-5">
        <div class="row py-5">
          <form class="col-md-9 m-auto" method="post" role="form" action="">
            <div className="Add-app">
                <Link class="btn btn-success btn-lg px-3" to="/showcowcert">
                  Create Addrewss 
                  <i className="fa fa-plus-circle"></i>
                </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
                <Link class="btn btn-success btn-lg px-3" to="/AddCowCert">
                  CreateCowCert
                  <i className="fa fa-plus-circle"></i>
                </Link>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Hash</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    B6A98075E4C2A24724C805F905A9CA1CED77AC09B4B497EF5600B0FCB3C12708
                  </td>
                  <td>
                    <Link class="btn btn-outline-secondary" to="/search">
                    <i class="fa fa-eye"></i>
                    &nbsp;
                    View
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td>
                    <a type="submit" class="btn btn-outline-secondary">
                      <i class="fa fa-copy"></i>
                      &nbsp;Copy
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    B6A98075E4C2A24724C805F905A9CA1CED77AC09B4B497EF5600B0FCB3C12708
                  </td>
                  <td>
                    <Link class="btn btn-outline-secondary" to="/search">
                    <i class="fa fa-eye"></i>
                    &nbsp;
                    View
                    </Link>
                  </td>
                  <td>
                    <a type="submit" class="btn btn-outline-secondary">
                      <i class="fa fa-copy"></i>
                      &nbsp;Copy
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    B6A98075E4C2A24724C805F905A9CA1CED77AC09B4B497EF5600B0FCB3C12708
                  </td>
                  <td>
                    <Link class="btn btn-outline-secondary" to="/search">
                    <i class="fa fa-eye"></i>
                    &nbsp;
                    View
                    </Link>
                  </td>
                  <td>
                    <a type="submit" class="btn btn-outline-secondary">
                      <i class="fa fa-copy"></i>
                      &nbsp;Copy
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShowCowCert;
