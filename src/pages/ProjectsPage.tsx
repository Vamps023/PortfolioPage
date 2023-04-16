import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import React from "react";
import Footer from "./utils/Footer";
import TopBar from "./utils/TopBar";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const images = [
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

const ProjectsPage = () => {
  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <TopBar />
          <div
            style={{
              flexGrow: 1,
              marginLeft: "24px",
              marginRight: "24px",
              overflow: "auto",
            }}
          >
            <div style={{ overflowX: "scroll" }}>
              <Grid container spacing={3}>
                {images.map((image, index) => (
                  <Grid item xs={6} sm={3} md={2} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      elevation={1}
                      square={true}
                    >
                      <CardActionArea
                        onClick={() => handleImageClick(image.Artstation)}
                      >
                        <CardMedia
                          component="img"
                          image={image.src}
                          alt="Art Name"
                          style={{ height: "100%" }}
                        />
                      </CardActionArea>
                      <div style={{ padding: "8px", background: "#3d3c3c" }}>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          style={{ color: "white" }}
                        >
                          {image.name}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;
