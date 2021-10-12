import React from 'react'

function Search() {
    return (
        <>
            <div class="container-fluid bg-light py-5">
                <div class="col-md-6 m-auto text-center">
                    <h1 class="h1">Search Cowcert</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg" placeholder="Search by Address / Txn Hash / Block / Token" />
                        <button type="submit" class="input-group-text btn-success"><i class="bi bi-search me-2"></i> Search</button>
                    </div>
                </div>
            </div>
            <div class="container py-5">
                <div class="row py-5">
                    <form class="col-md-9 m-auto" method="post" role="form">
                    <div class="row">
                            <div class="mb-3 name-app">
                            <h1 class="h1">Mr.Me 02</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 show-logo">
                                <img className="img-fluid-show" src="./assets/images/Me02.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 name-app">
                            <h1 class="h2">Cowcert Type : F1</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <h3>ข้อมูลโคบราห์มัน</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ทะเบียนโคเลขที่ : 009255</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ชื่อโค : Mr.MT 209</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เพศ : เมีย</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวโค : 20</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">วัน/เดือน/ปี เกิด : 10/04/2556</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ผู้บำรุงพันธุ์ : 108001</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบัน : 100001</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ชื่อเจ้าของปัจจุบัน : สวาท บังนิไกร</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">วันที่โอน : 10/04/2556</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">สถานะเปลี่ยนเจ้าของวัว : 3FB836229505C02D85EF0286B0C93213DB710766D841F00D91DB5EDAEADE136B</label>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <h3>ข้อมูลพ่อโคบราห์มัน</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">Hash.พ่อวัว : 3FB836229505C02D85EF0286B0C93213DB710766D841F00D91DB5EDAEADE136B</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ชื่อพ่อโค : Mr.MOT 09</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">วันเกิดพ่อ : 10/04/2554</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เลขทะเบียนพ่อ : 007255</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">สีพ่อวัว : สีแดง</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบันสายพ่อ : 100002</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวพ่อโค : 90</label>
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <h3>ข้อมูลแม่โคบราห์มัน</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">Hash.แม่โค : 3FB836229505C02D85EF0286B0C93213DB710766D841F00D91DB5EDAEADE136B</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ชื่อแม่โค : Ms.MIKI 22</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">วันเกิดแม่ : 10/04/2555</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เลขทะเบียนแม่ : 003255</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">สีแม่วัว : สีแดง</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบันสายแม่ : 100003</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวแม่โค : 02</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Search
