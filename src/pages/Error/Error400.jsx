import React from "react";

import './Error.css'
import logo from './assets/galtech-school-black-new-1.png.webp'
import er400 from './assets/404.png'

const Error400 =()=>{
	
return (
    <>
    	<div className="wrapper">
		<nav className="navbar navbar-expand-lg navbar-light bg-white rounded fixed-top rounded-0 shadow-sm">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={logo} width="140" alt="" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
				</button>
				
			</div>
		</nav>
		<div className="error-404 d-flex align-items-center justify-content-center">
			<div className="container">
				<div className="card">
					<div className="row g-0">
						<div className="col-xl-5">
							<div className="card-body p-4">
								<h1 className="display-1"><span className="text-warning">4</span><span className="text-danger">0</span><span className="text-primary">4</span></h1>
								<h2 className="font-weight-bold display-4">Sorry, unexpected error</h2>
								<p>Looks like you are lost!
									<br/>May be you are not connected to the internet!</p>
								<div className="mt-5">	<div  className="btn btn-lg btn-primary px-md-5 radius-30" >Go Home</div>
								
									<a className="btn btn-lg btn-outline-dark ms-3 px-md-5 radius-30">Back</a>
								</div>
								
							</div>
						</div>
						<div className="col-xl-7">
							<img src={er400} className="img-fluid" alt=""/>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className="bg-white p-3 fixed-bottom border-top shadow">
			<div className="d-flex align-items-center justify-content-between flex-wrap">
				<ul className="list-inline mb-0">
					<li className="list-inline-item">Follow Us :</li>
					<li className="list-inline-item"><a ><i className='bx bxl-facebook me-1'></i>Facebook</a>
					</li>
					<li className="list-inline-item"><a ><i className='bx bxl-twitter me-1'></i>Twitter</a>
					</li>
					<li className="list-inline-item"><a ><i className='bx bxl-google me-1'></i>Google</a>
					</li>
				</ul>
				<p className="mb-0">Copyright © 2023. All right reserved.</p>
			</div>
		</div>
	</div>
            {/* <!--end row--> */}
        
    
    </>
)
}

export default Error400
