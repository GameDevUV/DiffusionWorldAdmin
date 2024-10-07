import React from 'react'
import '../../css/Stacks.css'
import t1 from '../../assets/t.jpeg'

const Stacks = () => {
  return (
    <>
    <div className="Home-Stacks">
        <div className="Filter-stack">
            <li className="filter-li">Images</li>
            <li className="filter-li">Videos</li>
        </div>
        <div className="stack-box">
          <div className="stack-card">
            <div className="card-image">
              <img src={t1} alt="" className="image-card-stack" />
            </div>
            <div className="stack-popularity">
              <div className="rating">4.5/5</div>
              <div className="visits">
                <span className="monthly-visits"></span>
                <span className="monthly-visits-numbers">5000</span>
              </div>
            </div>
          </div>
          <div className="stack-card">
            <div className="card-image">
              <img src={t1} alt="" className="image-card-stack" />
            </div>
            <div className="stack-popularity">
              <div className="rating">4.5/5</div>
              <div className="visits">
                <span className="monthly-visits"></span>
                <span className="monthly-visits-numbers">5000</span>
              </div>
            </div>
          </div>
          <div className="stack-card">
            <div className="card-image">
              <img src={t1} alt="" className="image-card-stack" />
            </div>
            <div className="stack-popularity">
              <div className="rating">4.5/5</div>
              <div className="visits">
                <span className="monthly-visits"></span>
                <span className="monthly-visits-numbers">5000</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Stacks