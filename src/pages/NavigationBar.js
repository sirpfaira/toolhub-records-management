import React from 'react';

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light px-3'>
      <div className='container-fluid'>
        <a className='navbar-brand fw-semibold' href='/'>
          Toolhub Records Management
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/records-dashboard'>
                Dashboard
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/leaderboard'>
                Leaderboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
