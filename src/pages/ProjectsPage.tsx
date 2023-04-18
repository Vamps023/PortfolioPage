import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

interface Image {
  src: string;
  Artstation: string;
  name: string;
}

const images: Image[] = [
  {
    src: "https://cdnb.artstation.com/p/assets/covers/images/053/513/091/smaller_square/swapnil-nare-swapnil-nare-render-1.jpg?1662396284",
    Artstation: "https://www.artstation.com/artwork/eJyG9D",
    name: "Vintage BlowTorch",
  },
  {
    src: "https://cdna.artstation.com/p/assets/covers/images/050/518/116/smaller_square/swapnil-nare-swapnil-nare-thumb.jpg?1655052729",
    Artstation: "https://www.artstation.com/artwork/NGzx0b",
    name: "Wasteland Sheriff",
  },
  {
    src: "https://cdna.artstation.com/p/assets/covers/images/048/762/786/smaller_square/swapnil-nare-swapnil-nare-screenshot005.jpg?1650889500",
    Artstation: "https://www.artstation.com/artwork/qQPwdR",
    name: "Art Name 3",
  },
  {
    src: "https://cdna.artstation.com/p/assets/videos/images/020/953/004/smaller_square/swapnil-nare-maxresdefault.jpg?1569825031",
    Artstation: "https://www.artstation.com/artwork/w8bODL",
    name: "Art Name 4",
  },
  {
    src: "https://cdnb.artstation.com/p/assets/covers/images/033/175/199/smaller_square/swapnil-nare-swapnil-nare-th.jpg?1608654444",
    Artstation: "https://www.artstation.com/artwork/lxlPWV",
    name: "Art Name 5",
  },
  {
    src: "https://cdnb.artstation.com/p/assets/covers/images/030/264/695/smaller_square/swapnil-nare-swapnil-nare-2.jpg?1600096939",
    Artstation: "https://www.artstation.com/artwork/28WK0Y",
    name: "Art Name 6",
  },
];

const useStyles = makeStyles((theme) => ({
  ProjectsSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    color: "#fff",
    backgroundColor: "#333", // <-- add this line
  },
  aboutText: {
    maxWidth: "50rem",
    textAlign: "center",
    color: "#fff",
  },
}));
const ProjectsPage: React.FC = () => {
  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
  };
  const classes = useStyles();

  return (
    <div style={{ flexGrow: 1, margin: "24px", backgroundColor: "#333" }}>
      <Box className={classes.ProjectsSection}>
        <Typography variant="h4">Projects</Typography>
        <Grid container spacing={3}>
          {images.map((image: Image, index: number) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Paper onClick={() => handleImageClick(image.Artstation)}>
                <img
                  src={image.src}
                  alt={image.name}
                  style={{ width: "100%" }}
                />
                <div style={{ padding: "8px", background: "#3d3c3c" }}>
                  <Typography variant="subtitle1" style={{ color: "white" }}>
                    {image.name}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProjectsPage;
