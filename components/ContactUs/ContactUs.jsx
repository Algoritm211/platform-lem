import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="container my-3" style={{ backgroundColor: '#8cdac8', borderRadius: '8px' }}>
        <div className="row">
          <div className="col-12 col-md-4 p-5 m-auto">
            <h3 className="content-title mb-2">Stay in touch</h3>
            <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor</p>
            <a className="contact-link" href="https://t.me/EdwardDK">
              <div className="d-flex mt-5 contacts-links py-1">
                <i className="fab fa-telegram contacts-illustration"/>
                <p className="contacts-text">@EdwardDK</p>
              </div>
            </a>
            <a className="contact-link" href="mailto:edwardkvashin@gmail.com">
              <div className="d-flex contacts-links py-1">
                <i className="fas fa-envelope contacts-illustration"/>
                <p className="contacts-text">edwardkvashin</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-8 m-auto">
            <img className="content-image" src="/4.png" alt="photo"/>
          </div>
        </div>
      </div>
      {/*<div className="container my-5">*/
      }
      {/*  <div className="row">*/
      }
      {/*    <div className="col-12 col-md-6">*/
      }
      {/*      <div className="row">*/
      }
      {/*        <div className="col-3 col-md-3">*/
      }
      {/*          <i className="fas fa-envelope" style={{ fontSize: '60px', marginBottom: '20px' }}/>*/
      }
      {/*          <a href="mailto:edwardkvashin@gmail.com">edwardkvashin@gmail.com</a>*/
      }
      {/*        </div>*/
      }
      {/*        <div className="col-9 col-md-9">*/
      }
      {/*          <h3 className="contact-title">Email</h3>*/
      }
      {/*          <a href="mailto:edwardkvashin@gmail.com">edwardkvashin@gmail.com</a>*/
      }
      {/*        </div>*/
      }
      {/*      </div>*/
      }
      {/*    </div>*/
      }
      {/*    <div className="col-12 col-md-6">*/
      }
      {/*      <div className="row">*/
      }
      {/*        <div className="col-3 col-md-3">*/
      }
      {/*          <i className="fab fa-telegram" style={{ fontSize: '60px' }}/>*/
      }
      {/*          <a href="https://t.me/EdwardDK">@EdwardDK</a>*/
      }
      {/*        </div>*/
      }
      {/*        <div className="col-9 col-md-9">*/
      }
      {/*          <h3 className="contact-title">Telegram</h3>*/
      }
      {/*          <a href="https://t.me/EdwardDK">@EdwardDK</a>*/
      }
      {/*        </div>*/
      }
      {/*      </div>*/
      }
      {/*    </div>*/
      }
      {/*  </div>*/
      }
      {/*</div>*/
      }
    </div>
  )
}

export default ContactUs
