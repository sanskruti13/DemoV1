import React from 'react'
import Style from './main.module.css'

const main = () => {
    return (
        <div className={Style.mainContentWrapper}>
            <div className={Style.mainImg}>
                <img src="./image/div.MuiAvatar-root.png" alt="img" />
            </div>
            <div className={Style.mainHeading}>
                <p>Achieve unique healthcare data security,
                    business integrity with DocXel</p>
            </div>
            <div className={Style.mainPara}>
                <p>With the help of cutting edge technology and government complaint data storage methodologies, DocXel helps you grow your healthcare business 10x
                    without worrying about data storage, data processing and data management of your patients, lab tests, medicine reports, etc.</p>
            </div>
        </div>
    )
}

export default main
