import React from 'react'
import Style from './section.module.css'
import Button from '@mui/material/Button';


const section = () => {
    return (
        <div className={Style.sectionCardWrapper}>
            <div className={Style.sectionContentWrapper}>
                <p>Sky rocket your business growth
                    with DocXel</p>
                <Button className={Style.btn} variant="contained">Request a demo</Button>
            </div>
            <div className={Style.sectionImageWrapper}>
                <img src="./image/div.MuiGrid2-root.png" alt="Img" />
            </div>
        </div>
    )
}

export default section