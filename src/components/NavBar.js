import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return(
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><h1>Roblino Maderas</h1></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/mesas">Mesas</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/sillas">Sillas</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href='/escritorios'>Escritorios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/bibliotecas">Bibliotecas</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-md-6 d-flex justify-content-end align-items-center'>
          <CartWidget />
        </div>
      </div>
    </div>
  )
}

export default Navbar;