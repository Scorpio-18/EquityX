import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor: '#FFF'}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src='media/images/logo.jpeg' style={{width:'15%', marginLeft: '150px'}} alt='logo'/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
      <form className="d-flex" role="search" style={{marginRight:'150px'}}>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft:"80px", gap:'25px'
      }}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
        </li>
        <li class="nav-item dropdown">
          <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars text-muted" style={{fontSize: '22px',color: 'black', cursor: 'pointer', marginTop:'7px'}}></i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">EquityX Invest</a></li>
            <li><a class="dropdown-item" href="#">EquityX Trade</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Signup</a></li>
          </ul>
        </li>
      </ul>
      </div>
      </form>
    </div>
</nav>
    );
}

export default Navbar;