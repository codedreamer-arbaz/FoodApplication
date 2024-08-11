import React from 'react'
import {Box, Typography} from "@mui/material"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3}}>
        <Box sx={{my:3,"& svg":{
          fontSize:"60px",
          cursor:"pointer",
          mr:2
        },
        "& svg:hover":{
          color:"goldenrod",
          transform:"translateX(5px)",
          transition:'all 400ms',
        }
        }}>
          <XIcon/>
          <LinkedInIcon/>
          <FacebookIcon/>
          <InstagramIcon/>
          <GitHubIcon/>
        </Box>
        <Typography variant="h5" sx={{"@media (max-width:600px)":{
            fontSize:'1rem'
        }}}>
            All Rights Reserved &copy; Techinfo YT
        </Typography>

    </Box>
    </>
  )
}

export default Footer