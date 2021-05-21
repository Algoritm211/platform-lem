import React from 'react'

const PricePage = () => {
  return (
    <div className="container my-3">
      <div style={{ backgroundColor: '#B2CCFC', borderRadius: '8px' }}>
        <div className="row">
          <div className="col-12 col-md-4 p-5 m-auto">
            <h3 className="content-title mb-2">Upgrade your education</h3>
            <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor</p>
          </div>
          <div className="col-12 col-md-8 m-auto">
            <img className="content-image" src="/8.png" alt="photo"/>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-4 my-3 text-center">
          <div className="price-card mb-4 current-plan">
            <h3 className="price-card-name mt-4 mb-3">Free</h3>
            <h1 className="price-card-title pricing-card-title mb-3">
              <small className="price-card-sum">$</small>
              0
              <small className="price-card-sum">/mo</small>
            </h1>
            <div className="price-benefits my-5">
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">10 users included</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">2 courses available</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">3 editor elements</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">Basic tools of the course</p>
              </div>
            </div>
            <button type="button" className="price-button current-plan mb-4">Your current plan</button>
          </div>
        </div>
        <div className="col-md-4 my-3 text-center">
          <div className="price-card mb-4">
            <h3 className="price-card-name mt-4 mb-3">Pro</h3>
            <h1 className="price-card-title pricing-card-title mb-3">
              <small className="price-card-sum">$</small>
              20
              <small className="price-card-sum">/mo</small>
            </h1>
            <div className="price-benefits my-5">
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">60 users included</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">5 courses available</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">5 editor elements</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">Files and analytics of the course</p>
              </div>
            </div>
            <button type="button" className="price-button mb-4">Get upgrade</button>
          </div>
        </div>
        <div className="col-md-4 my-3 text-center">
          <div className="price-card mb-4">
            <h3 className="price-card-name mt-4 mb-3">Master</h3>
            <h1 className="price-card-title pricing-card-title mb-3">
              <small className="price-card-sum">$</small>
              300
              <small className="price-card-sum">/mo</small>
            </h1>
            <div className="price-benefits my-5">
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">100+ users included</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">20 courses available</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">7 editor elements</p>
              </div>
              <div className="price-benefits-one">
                <i className="far fa-check-circle price-benefits-ill"/>
                <p className="price-benefits-text">Access level of moderator</p>
              </div>
            </div>
            <button type="button" className="price-button mb-4">Get upgrade</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PricePage
