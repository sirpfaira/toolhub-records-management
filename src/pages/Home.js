import React from 'react';

const Home = () => {
  return (
    <div className='container-fluid home d-flex flex-column align-items-center'>
      <div className='welcome d-flex flex-column align-items-center container'>
        <h1> Welcome to Toolhub Records Management</h1>
        <p>
          A records management application for Toolhub. Toolhub is a community
          catalog of tools that are used across many Wiki projects. Currently,
          many tools in Toolhub have missing or incomplete information. Help us
          make the information complete.
        </p>
        <button type='submit' className='btn btn-primary'>
          Read Documentation!
        </button>
      </div>
      <div className='d-flex flex-column justify-content-center container align-items-center '>
        <div>
          <h4>Or get right to it....</h4>
          <p>
            This tool below is missing the "keywords" attribute. Can you help us
            fill it in.
          </p>
        </div>
        <div>
          <form className='container d-flex gap-3'>
            <div className='col-auto'>
              <label htmlFor='inputPassword2' className='visually-hidden'>
                Password
              </label>
              <input
                type='text'
                className='form-control'
                id='inputPassword2'
                placeholder='Enter keywords here...'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary mb-3'>
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className='tool-info card'>
          <div className='card-body d-flex flex-column'>
            <span>Title: Pywikibot</span>
            <span>Developer: Pywikibot team</span>
            <span>
              Description: Python library and collection of scripts that
              automate work on MediaWiki sites.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
