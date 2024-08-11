import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">
          Contact My Restraunt
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ad beatae aliquam esse ea dolores deleniti accusamus fuga at repudiandae distinctio animi numquam aspernatur cupiditate, atque molestias voluptas error reiciendis quibusdam? Voluptatum, necessitatibus architecto! Odio maxime itaque accusamus at beatae tempora, esse, vel exercitationem consequuntur praesentium accusantium culpa nam? Vel?
        </p>
      </Box>
      <Box sx={{m:3, width:"600px",ml:10,"@media (max-width:600px)":{
        width:'300px'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="Contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:"white"}}
                align="center">Contact Detais</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <ContactSupportIcon sx={{color:'black',pt:1}}/> 11111111
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ContactSupportIcon sx={{color:'black',pt:1}}/> restraunt@food.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ContactSupportIcon sx={{color:'black',pt:1}}/> 1800123123
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact