import React from "react";
import Layout from "../Component/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, mr:10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact ChopNchat</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          modi cupiditate aspernatur possimus corporis quia minus molestiae
          ratione sapiente molestias quisquam, maxime quasi. At commodi a,
          veniam modi consectetur dicta.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "300px",
          ml: 10,
          mr: 10,
          "@media (max-width:600px": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={"paper"}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", }}
                  align="center"
                >
                  
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 08104160633
                  (tolfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  successobijuru91@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  successobijuru91@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
