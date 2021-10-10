import React from 'react'

function Page404() {
    return (
        <>
            <section class="container py-5">
                <div class="row text-center pt-5 pb-3">
                    <div class="col-lg-6 m-auto">
                        <img className="logo" src="./assets/images/cowcert-01.png" alt="" />
                        <h1 class="h1">ERROR 404.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                            <div class="row">
                                <div class="col text-end mt-2">
                                    <input type="text" class="form-control mt-1" id="error" name="Error 404" placeholder="Error 404" />
                                    <br/>
                                    <a class="btn btn-success btn-lg px-3" href="/">กลับหน้าหลัก</a>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page404
