import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid'>
      <footer className='text-center text-white bg-light'>
        <div className='container pt-4'>
          <section className='mb-4'>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-facebook-f'></i>
            </a>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-twitter'></i>
            </a>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-google'></i>
            </a>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-instagram'></i>
            </a>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-linkedin'></i>
            </a>
            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='#!'
              role='button'
              data-mdb-ripple-color='dark'
            >
              <i className='fa fa-github'></i>
            </a>
          </section>
        </div>

        <div className='text-center text-dark p-3 bg-light'>
          <span className='mx-2'>© 2022 Copyright:</span>
          <a className='text-dark' href='https://example.com'>
            Simba Pfaira
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
