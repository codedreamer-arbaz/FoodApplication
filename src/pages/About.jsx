import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{my:15,
        p:2,
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        }, 
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.3rem"
          }
        }

        }}>
          <Typography variant="h4">
            Welcome to  my Restraunt
          </Typography>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis expedita autem cupiditate neque modi aperiam dolor asperiores, quisquam dolorem veniam voluptatem, totam nesciunt nisi quis adipisci enim dignissimos, suscipit odit. Recusandae nostrum laboriosam mollitia consequuntur veniam maiores alias vel reprehenderit reiciendis voluptatibus? Temporibus ullam nihil quasi repudiandae minima sint animi cum recusandae ratione nobis voluptatum vero delectus laborum fugiat doloribus ea, ipsam ipsum perferendis assumenda debitis. Ipsa, consectetur fugit? Perferendis labore ex laboriosam cumque libero, iure qui beatae ut deserunt sit, id voluptates pariatur iste nostrum sequi porro non ipsam quis nulla quidem nisi nam placeat ratione nesciunt. Provident, aliquid?
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus dignissimos cupiditate voluptas consectetur unde rem in soluta. Minus pariatur vitae voluptatibus voluptas laudantium dolore eveniet alias nihil nulla officiis debitis eligendi fugiat ab error nesciunt perspiciatis, magni, aperiam amet odit obcaecati quod quibusdam expedita. Est nam exercitationem vitae. Praesentium.
          </p>
        </Box>
    </Layout>
  )
}

export default About