import React from 'react'
import Style from './footer.module.css'

const Footer = () => {
  return (
    <div className={Style.footerCardWrapper}>
        <div className={Style.preFooter}>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
        </div>
        <div className={Style.postFooter}>© All Right reserved</div>
    </div>
  )
}

export default Footer