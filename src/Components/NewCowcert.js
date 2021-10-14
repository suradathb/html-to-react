import React from 'react'


function NewCowcert(props) {
   
    const {newcowdam} = props;
       console.log(newcowdam)     
    return (
            <>
            
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src={newcowdam.photo} class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    {/* <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i> */}
                                </li>
                                <li class="text-muted text-right">{newcowdam.price}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">{newcowdam.name}</a>
                            <p class="card-text">
                                {newcowdam.dedcription}
                            </p>
                            {/* <p class="text-muted">Reviews (24)</p> */}
                        </div>
                    </div>
                </div>
            
              </>
    );
}

export default NewCowcert
