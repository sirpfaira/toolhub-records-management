import React from 'react';
import { missingFields, allToolsSummary } from '../assets/data';

const RecordsDashboard = () => {
  let currentTools = allToolsSummary.slice(0, 6);
  return (
    <div className='container-fluid'>
      <div className='m-4'>
        <div className='row'>
          <div className='card col-md-4 col-xs-12'>
            <div className='card-header'>
              <h3>All Missing Attributes</h3>
            </div>
            <div className='card-body d-flex flex-column gap-2'>
              {missingFields.map((element, index) => (
                <div className='d-flex justify-content-between align-items-center gap-2'>
                  <h5>{Object.keys(element)[0]}</h5>
                  <div className='bg-light p-2 border rounded'>
                    <h5>{element[Object.keys(element)[0]]}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className='card-footer text-muted'>
              <a href='/' className='btn btn-primary'>
                Fill in the information
              </a>
            </div>
          </div>
          <div className='col-md-8 col-xs-12 d-flex flex-column'>
            <h2>All Tools</h2>
            <hr />
            <div className='d-flex flex-wrap justify-content-around gap-3'>
              {currentTools.map((element, index) => (
                <div className='card col-md-4'>
                  <div className='card-header'>
                    <h5>{Object.keys(element)[0].replaceAll('_', ' ')}</h5>
                  </div>
                  <div className='card-body d-flex flex-column gap-2'>
                    <div className='d-flex flex-column justify-content-between align-items-center gap-2'>
                      <p>{`${
                        element[Object.keys(element)[0]][0]
                      } missing attributes`}</p>

                      <p>{`Last edited ${
                        element[Object.keys(element)[0]][1]
                      } days ago`}</p>
                    </div>
                  </div>
                  <div className='card-footer text-muted'>
                    <a href='/' className='btn btn-primary'>
                      Contribute
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordsDashboard;
