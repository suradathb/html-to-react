import React, { Component } from "react";
import { Link } from "react-router-dom";

// function createCowCert() {
class CreateCowCert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cow_sax: "",
      cowcert_no: "",
      cowcert_name: "",
      cowcert_birth: "",
      cowcert_number: "",
      cowcert_color: "",
      cowcert_breeder: "",
      cowcert_owner_no: "",
      cowcert_owner_name: "",
      cowcert_trans_date: "",
      cowcert_ref_hash: "",
      //
      sire_no: "",
      sire_birtdate: "",
      sire_name: "",
      sire_color: "",
      sire_number: "",
      sire_ownerno: "",
      sire_hash: "",
      //
      dam_no: "",
      dam_birtdate: "",
      dam_name: "",
      dam_color: "",
      dam_number: "",
      dam_ownerno: "",
      dam_hash: "",
    };
  }
  

  render() {
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
            <form
              class="col-md-9 m-auto"
              role="form"
              // onSubmit={() => alert(JSON.stringify(this.state))}
              onSubmit={(event) => {
                event.preventDefault()
                this.props.createTask(this.state)
              }}
            >
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <h3>ข้อมูลโคบราห์มัน</h3>
                  <select className="btn btn-secondary dropdown-toggle">
                    <option value="F1">F1</option>
                    <option value="F2">F2</option>
                    <option value="F3">F3</option>
                    <option value="F4">F4</option>
                    <option value="F5">F5</option>
                    <option value="100">เลือด 100 %</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">เพศ</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cow_sax"
                    name="cow_sax"
                    value={this.state.cow_sax}
                    onChange={(e) => {
                      this.setState({ cow_sax: e.target.value });
                    }}
                    placeholder="เพศ"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ทะเบียนโคบราห์มันเลขที่</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_no"
                    name="cowcert_no"
                    value={this.state.cowcert_no}
                    onChange={(e) => {
                      this.setState({ cowcert_no: e.target.value });
                    }}
                    placeholder="เช่น 009255"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อพ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_name"
                    name="cowcert_name"
                    value={this.state.cowcert_name}
                    onChange={(e) => {
                      this.setState({ cowcert_name: e.target.value });
                    }}
                    placeholder="ชื่อโคบราห์มัน"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">วันเกิดโคบราห์มัน</label>
                  <input
                    type="date"
                    class="form-control mt-1"
                    id="cowcert_birth"
                    name="cowcert_birth"
                    value={this.state.cowcert_birth}
                    onChange={(e) => {
                      this.setState({ cowcert_birth: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">หมายเลขประจำตัวโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_number"
                    name="cowcert_number"
                    value={this.state.cowcert_number}
                    onChange={(e) => {
                      this.setState({ cowcert_number: e.target.value });
                    }}
                    placeholder="เลขประจำตัวโคบราห์มัน เช่น 20"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">สีโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_color"
                    name="cowcert_color"
                    value={this.state.cowcert_color}
                    onChange={(e) => {
                      this.setState({ cowcert_color: e.target.value });
                    }}
                    placeholder="ระบุสีของโคบราห์มัน"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">เลขผู้บำรุงพันธุ์</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_breeder"
                    name="cowcert_breeder"
                    value={this.state.cowcert_breeder}
                    onChange={(e) => {
                      this.setState({ cowcert_breeder: e.target.value });
                    }}
                    placeholder="เช่น 1000001"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">เลขเจ้าของปัจจุบัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_owner_no"
                    name="cowcert_owner_no"
                    value={this.state.cowcert_owner_no}
                    onChange={(e) => {
                      this.setState({ cowcert_owner_no: e.target.value });
                    }}
                    placeholder="เช่น 1000002"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อเจ้าของปัจจุบัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_owner_name"
                    name="cowcert_owner_name"
                    value={this.state.cowcert_owner_name}
                    onChange={(e) => {
                      this.setState({ cowcert_owner_name: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อเจ้าของโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">วันที่โอน</label>
                  <input
                    type="date"
                    class="form-control mt-1"
                    id="cowcert_trans_date"
                    name="cowcert_trans_date"
                    value={this.state.cowcert_trans_date}
                    onChange={(e) => {
                      this.setState({ cowcert_trans_date: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group col-md-8 mb-3">
                  <label for="inputemail">REF.เปลี่ยนมือ</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_ref_hash"
                    name="cowcert_ref_hash"
                    value={this.state.cowcert_ref_hash}
                    onChange={(e) => {
                      this.setState({ cowcert_ref_hash: e.target.value });
                    }}
                    placeholder="REF.Hash"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <h3>ข้อมูลสายพ่อ</h3>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">ทะเบียนโคบราห์มันเลขที่ พ่อ</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_no"
                    name="sire_no"
                    value={this.state.sire_no}
                    onChange={(e) => {
                      this.setState({ sire_no: e.target.value });
                    }}
                    placeholder="เช่น 1000001"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">วันเกิด พ่อ</label>
                  <input
                    type="date"
                    class="form-control mt-1"
                    id="sire_birtdate"
                    name="sire_birtdate"
                    value={this.state.sire_birtdate}
                    onChange={(e) => {
                      this.setState({ sire_birtdate: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อพ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_name"
                    name="sire_name"
                    value={this.state.sire_name}
                    onChange={(e) => {
                      this.setState({ sire_name: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อเจ้าของโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">สีพ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_color"
                    name="sire_color"
                    value={this.state.sire_color}
                    onChange={(e) => {
                      this.setState({ sire_color: e.target.value });
                    }}
                    placeholder="ระบุสีพ่อโคบราห์มัน"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">หมายเลขประจำตัวพ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_number"
                    name="sire_number"
                    value={this.state.sire_number}
                    onChange={(e) => {
                      this.setState({ sire_number: e.target.value });
                    }}
                    placeholder="เช่น 1000002"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">เจ้าของปัจจุบัน สายพ่อ</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_ownerno"
                    name="sire_ownerno"
                    value={this.state.sire_ownerno}
                    onChange={(e) => {
                      this.setState({ sire_ownerno: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อเจ้าของโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12 mb-3">
                  <label for="inputemail">HASH.พ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_hash"
                    name="sire_hash"
                    value={this.state.sire_hash}
                    onChange={(e) => {
                      this.setState({ sire_hash: e.target.value });
                    }}
                    placeholder="HASH.พ่อโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <h3>ข้อมูลสายแม่</h3>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">ทะเบียนโคบราห์มันเลขที่ แม่</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_no"
                    name="dam_no"
                    value={this.state.dam_no}
                    onChange={(e) => {
                      this.setState({ dam_no: e.target.value });
                    }}
                    placeholder="เช่น 003255"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">วันเกิด แม่</label>
                  <input
                    type="date"
                    class="form-control mt-1"
                    id="dam_birtdate"
                    name="dam_birtdate"
                    value={this.state.dam_birtdate}
                    onChange={(e) => {
                      this.setState({ dam_birtdate: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อแม่โคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_name"
                    name="dam_name"
                    value={this.state.dam_name}
                    onChange={(e) => {
                      this.setState({ dam_name: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อเจ้าของโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4 mb-3">
                  <label for="inputname">สีแม่โคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_color"
                    name="dam_color"
                    value={this.state.dam_color}
                    onChange={(e) => {
                      this.setState({ dam_color: e.target.value });
                    }}
                    placeholder="เช่น แดง"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">หมายเลขประจำตัวแม่โคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_number"
                    name="dam_number"
                    value={this.state.dam_number}
                    onChange={(e) => {
                      this.setState({ dam_number: e.target.value });
                    }}
                    placeholder="เช่น 02"
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">เจ้าของปัจจุบัน สายแม่</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_ownerno"
                    name="dam_ownerno"
                    value={this.state.dam_ownerno}
                    onChange={(e) => {
                      this.setState({ dam_ownerno: e.target.value });
                    }}
                    placeholder="โปรดระบุ ชื่อเจ้าของโค"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12 mb-3">
                  <label for="inputemail">HASH.แม่โคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_hash"
                    name="dam_hash"
                    value={this.state.dam_hash}
                    onChange={(e) => {
                      this.setState({ dam_hash: e.target.value });
                    }}
                    placeholder="HASH.แม่โคบราห์มัน"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col text-end mt-2">
                  <Link class="btn btn-light btn-lg px-3" to="/showcowcert">
                    ยกเลิก
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <Link class="btn btn-success btn-lg px-3" to="/showcowcert">
                  บันทึก
                  </Link> */}
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

export default CreateCowCert;
