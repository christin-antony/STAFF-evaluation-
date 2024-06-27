import React from 'react';
import lead1 from './assets/avatar-1.png'
import lead2 from './assets/avatar-2.png'
import lead3 from './assets/avatar-3.png'
import lead4 from './assets/avatar-4.png'
import lead5 from './assets/avatar-7.png'
import lead6 from './assets/avatar-8.png'

export const Leads = () => {
  return (
    <div>
      <div className="card radius-10 m-0 mt-4 mb-5 shadow">
        <div className="card-body">
          <div className="table-responsive lead-table">
            <table className="table mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Potential Leads</th>
                  <th>Deposit</th>
                  <th>Progress</th>
                  <th>Last Update</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead1} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">Ronald Waters</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$89,620</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-75" role="progressbar" style={{ backgroundColor: '#0d6efd' }}></div>
                    </div>
                  </td>
                  <td>14 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#0d6efd' }}>In Progress</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead2} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">David Buckley</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$38,520</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-50" role="progressbar" style={{ backgroundColor: '#f41127' }}></div>
                    </div>
                  </td>
                  <td>15 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#f41127' }}>Cancelled</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead3} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">James Caviness</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$63,820</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-100" role="progressbar" style={{ backgroundColor: '#17a00e' }}></div>
                    </div>
                  </td>
                  <td>16 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#17a00e' }}>Completed</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead4} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">John Roman</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$97,420</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-50" role="progressbar" style={{ backgroundColor: '#0d6efd' }}></div>
                    </div>
                  </td>
                  <td>18 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#0d6efd' }}>In Progress</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead5} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">Johnny Seitz</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$48,360</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-50" role="progressbar" style={{ backgroundColor: '#f41127' }}></div>
                    </div>
                  </td>
                  <td>22 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#f41127' }}>Cancelled</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                      </div>
                      <div className="">
                        <img src={lead6} className="rounded-circle" width="40" height="40" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 font-14">Pauline Bird</h6>
                        <p className="mb-0 font-13 text-secondary">Lead Designers</p>
                      </div>
                    </div>
                  </td>
                  <td>$74,620</td>
                  <td className="w-25">
                    <div className="progress radius-10" style={{ height: '5px' }}>
                      <div className="progress-bar w-100" role="progressbar" style={{ backgroundColor: '#17a00e' }}></div>
                    </div>
                  </td>
                  <td>24 Oct 2020</td>
                  <td>
                    <div className="badge rounded-pill w-100" style={{ backgroundColor: '#17a00e' }}>Completed</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
