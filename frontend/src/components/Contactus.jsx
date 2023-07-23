import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Contactus() {
  return (
    <div>
      <div style={{minHeight: '90vh'}}></div>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className="text-center">
          <span className='fs-3'>Get connected with us on social networks:</span>
        </div>



        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 " />
                <em><u>The Shaped Wooden </u>  </em>
              </h4>
              <p>
                <h4> Here you can Buy Or Sell Your Old FUrniture With A Great Price ,We Are Working On it To make It Globally avaialable.</h4>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Almirah
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sofa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chairs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Table
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Lucknow 226020
              </p>
              <p>
                <MDBIcon icon="envelope" className="fs-3" />
                SaleemDeveloper@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9569552384
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 8090337729
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2009 Copyright:
        <a className='text-reset fw-bold' href='https://amazon.com/'>
          Amazon
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Contactus