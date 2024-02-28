'use client'

import React from 'react'
import Button from '@mui/material/Button';
import Style from "./hero.module.css";

export const hero = () => {

    return (
            <div className={Style.heroWrapper}>
                <div className={Style.heroContentWrapper}>
                        <h1 className={ Style.heroHeading }>DocXel - The Healthcare Paradise</h1>
                        <p className={Style.p}>Smart healthcare management system,for smart healthcare businesses</p> 
                        <Button className={Style.btn} variant="contained">Request a demo</Button>
                </div>
                <div className={Style.heroImageWrapper}>
                    <img src="./image/Hero 2 (1).png" alt="Img" />
                    {/* <img src="./image/Blob (1).png" alt="" className={Style.blob1} />
                    <img src="./image/Blob (2).png" alt="" className={Style.blob2} />
                    <img src="./image/Blob.png" alt="" className={Style.blob} />
                    <img src="./image/Frame 31.png" alt="" className={Style.frame1} />
                    <img src="./image/medical-concept-asian-beautiful-female-doctor-white-coat-with-glasses-waist-high-medical-student-female-hospital-worker-looks-into-camera-smiles-studio-blue-background_185696-615-removebg-preview 1 (1).png" alt="" className={Style.asian} />
                    <img src="./image/Frame 32.png" alt="" className={Style.frame2} /> */}

                </div>
            </div>
    )
}
export default hero
