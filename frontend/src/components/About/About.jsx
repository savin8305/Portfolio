import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>this is akash</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://i.pinimg.com/736x/b2/cd/4d/b2cd4dafd0e78b73c76a0e7e5e9ff25d.jpg" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Akash VIshwakarma
          </Typography>

          <Typography>Helloword</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae, modi, minus iusto asperiores, voluptas reiciendis soluta numquam deleniti libero ea veritatis dolorem autem maxime repellat praesentium amet adipisci cupiditate?
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cupiditate nisi earum nobis obcaecati nihil dolore mollitia, doloremque quae officia eius natus voluptas expedita explicabo quisquam ducimus molestiae ab repellat.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
