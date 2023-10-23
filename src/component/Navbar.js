import React from "react";

const Navbar = () => {
    return (
        <div class="container">
            <nav className="navbar navbar-expand-lg bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AVADOHA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div>
                <center><h1>AVADOHA DIARY FARM</h1></center>
                <center><img src="http://southeastagnet.com/wp-content/uploads/2017/05/Assortment-of-dairy-products-4.jpg"></img></center>
            

            </div>
            
        </div>


    )
}

export default Navbar;