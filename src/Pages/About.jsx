import React from 'react'
import Layout from '../Component/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: 'center',
        p:2,
        "& h4": {
          fontWeight: 'bold',
          my:2,
          fontSize: '2rem',
          
        },
         "& p": {
          textAlign: 'justify',
          
        },
        '@media (max-width:600px)':{
          mt:0,
          fontSize:"1rem"
        }
      }}>
        <Typography variant='h4'>
          Welcome To My resturant

        </Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit obcaecati atque, explicabo autem cupiditate perferendis? Maiores consectetur repellendus enim, sequi dolor vitae laboriosam sed a tempore reiciendis pariatur labore nostrum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero consectetur ipsa adipisci, et quisquam debitis similique eveniet. Odit repellendus libero incidunt, consectetur ipsum explicabo error! Libero voluptate ex sequi repellat numquam similique explicabo, adipisci velit veniam. Necessitatibus exercitationem reprehenderit voluptatem quibusdam itaque ratione ducimus alias pariatur optio. Deleniti exercitationem voluptatibus perspiciatis dolores ipsa iste corrupti saepe, cum praesentium tempora a rerum, est facilis necessitatibus velit ea nulla maxime soluta omnis doloribus fugit quibusdam! Quibusdam vel sint aut, id quam facilis vero dolores necessitatibus incidunt error ducimus consequuntur quas explicabo voluptatibus praesentium sequi nam accusamus fugiat illo officiis! Dolor, ipsam?
        </p>
      </Box>
    </Layout>
  );
}

export default About