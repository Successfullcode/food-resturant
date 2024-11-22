import React from "react";
import Layout from "../Component/Layout/Layout";
import { MenuList } from "../Component/Data/Data";


import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
 
   
 
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map(menu => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                // component={"img."}
                src={menu.image}
                alt={menu.name}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
