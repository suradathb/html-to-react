import React from 'react'
import {Dropdown,DropdownButton,ButtonGroup} from 'react-dropdown';
import { Route, Switch } from "react-router-dom";


function createCowCert() {
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
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <h3>ข้อมูลโคบราห์มัน</h3>
                  
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
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">หมายเลขประจำตัวโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_number"
                    name="cowcert_number"
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
                  />
                </div>
                <div class="form-group col-md-8 mb-3">
                  <label for="inputemail">REF.เปลี่ยนมือ</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="cowcert_ref_hash"
                    name="cowcert_ref_hash"
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
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อพ่อโคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="sire_name"
                    name="sire_name"
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
                  />
                </div>
                <div class="form-group col-md-4 mb-3">
                  <label for="inputemail">ชื่อแม่โคบราห์มัน</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="dam_name"
                    name="dam_name"
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
                    placeholder="HASH.แม่โคบราห์มัน"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col text-end mt-2">
                  <a type="submit" class="btn btn-light btn-lg px-3">
                    ยกเลิก
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a type="submit" class="btn btn-success btn-lg px-3">
                    บันทึก
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        </>
    )
}

export default createCowCert
