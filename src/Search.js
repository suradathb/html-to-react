import React from 'react'

function Search(props) { 
    const arrayCow = props;
   console.log(arrayCow.value)
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
                            <h1 class="h1">{arrayCow.value[4]}</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 show-logo">
                                <img className="img-fluid-show" src="./assets/images/Me02.jpeg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 name-app">
                            <h1 class="h2">Cowcert Type : {arrayCow.value[0]}</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12 mb-3">
                                <h3>ข้อมูลโคบราห์มัน</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ทะเบียนโคเลขที่ : {arrayCow.value[1]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ชื่อโค : {arrayCow.value[4]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เพศ : {arrayCow.value[2]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวโค : 20</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">วัน/เดือน/ปี เกิด : {arrayCow.value[5]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ผู้บำรุงพันธุ์ : {arrayCow.value[7]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบัน : {arrayCow.value[8]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">ชื่อเจ้าของปัจจุบัน : {arrayCow.value[9]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">วันที่โอน : {arrayCow.value[10]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="inputsubject">สถานะเปลี่ยนเจ้าของวัว : {arrayCow.value[11]}</label>
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
                                <label for="inputsubject">Hash.พ่อวัว : {arrayCow.value[19]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ชื่อพ่อโค : {arrayCow.value[13]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">วันเกิดพ่อ : {arrayCow.value[17]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เลขทะเบียนพ่อ : {arrayCow.value[12]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">สีพ่อวัว : {arrayCow.value[15]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบันสายพ่อ : {arrayCow.value[18]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวพ่อโค : {arrayCow.value[16]}</label>
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
                                <label for="inputsubject">Hash.แม่โค : {arrayCow.value[27]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">ชื่อแม่โค : {arrayCow.value[21]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">วันเกิดแม่ : {arrayCow.value[25]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เลขทะเบียนแม่ : {arrayCow.value[20]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">สีแม่วัว : {arrayCow.value[23]}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputname">เจ้าของปัจจุบันสายแม่ : {arrayCow.value[26]}</label>
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label for="inputemail">เลขประจำตัวแม่โค : {arrayCow.value[24]}</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Search
