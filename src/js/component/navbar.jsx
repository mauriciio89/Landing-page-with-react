import React from "react";

//create your first component
const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Services</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav>
    // <>
    //   <nav className="navbar navbar-expand-lg bg-dark">
    //     <div className="container-fluid d-flex justify-content-between">
    //       <div>
    //         <a className="navbar-brand" href="#">
    //           Start Bootstrap
    //         </a>
    //         <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="fa-solid fa-bars"></span>
    //         </button>
    //       </div>
    //       <div className="d-flex justify-content-between">
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="#">
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="#">
    //                 About
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="#">
    //                 Services
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link disabled">Contact</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
};

export default Navbar;
