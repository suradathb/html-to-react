import React, { Component } from "react";

class CreateMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name_TH:'',
            name_Eng:'',
            birtDate:'',
            card_no:'',
            email:'',
            line:'',
            facbook:'',
            phone:'',
            address:'',
            name_farm:'',
            address_id_card:'',
            address_no:'',
            moo:'',
            alley:'',
            road:'',
            sub_district:'',
            district:'',
            province:'',
            zip_code:'',
            member_type:''
        }
    }
  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Create Member</h1>
            <div class="input-group mb-3">
              <p></p>
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
                event.preventDefault();
                // console.log(this.state)
                this.props.createTask(this.state);
              }}
            >
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <h3>ข้อมูลสมัครสมาชิก</h3>
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
                  <label for="inputemail">ชื่อโคบราห์มัน</label>
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
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateMember;
