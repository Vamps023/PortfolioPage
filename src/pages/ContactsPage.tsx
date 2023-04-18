import { Box, Typography, Link, Grid } from "@material-ui/core";
import { Category, LinkedIn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    color: "#fff", // <-- add this line
    marginTop: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(1),
    },
    "& a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: theme.palette.common.white,
    },
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
  textWhite: {
    color: theme.palette.common.white,
  },
}));

const ContactsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#333" }}>
      <Box py={4}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className={classes.textWhite}
            >
              Contact Information
            </Typography>
            <Typography
              align="center"
              gutterBottom
              className={classes.textWhite}
            >
              I am open to hearing about any job opportunities, freelance work,
              or any other inquiries you may have. Please feel free to reach out
              to me with any questions or comments.
            </Typography>
            <div className={`${classes.contactInfo} ${classes.textWhite}`}>
              <Typography>Email: swapnilnare007@gmail.com</Typography>
              <Typography>Phone: +91 87665679006</Typography>
              <Typography>
                <Link href="https://www.linkedin.com/in/swapnil-nare-b90303193/">
                  <LinkedIn />
                  LinkedIn
                </Link>
              </Typography>
              <Typography>
                <Link href="https://www.artstation.com/vamps23/profile">
                  <Category />
                  Artstation
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactsPage;
