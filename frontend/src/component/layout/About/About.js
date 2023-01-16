import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/usamasaim73/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dyoczrvps/image/upload/v1673731254/avatars/IMG_0819_1_afolfm.jpg"
              alt="Founder"
            />
            <Typography>Usama & Abdullah</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This website is made by Usama and Abdullah. Usama is a very
              talented frontend developer and I am currently under supervision
              of Usama.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">
              Connect us through social media
            </Typography>
            <a
              href="https://www.facebook.com/mara.mahi.71?mibextid=ZbWKwL"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="https://www.instagram.com/usamasaim73/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
