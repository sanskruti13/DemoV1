'use client'

import * as React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import  Style  from './header.module.css';

const Header = () =>{

  return (
    <Grid container alignItems='center' justifyContent='space-between'>
     <div className={Style.logoImg}>
      <Image
        src="/image/DocXel logo 1.png"
        alt="Description of the image"
        width={150} 
        height={150} 
      />
    </div>
      <Button className={Style.btn} variant="contained">Request a demo</Button>
    </Grid>

  );
}

export default Header
