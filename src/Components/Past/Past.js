import { Stack, Typography } from "@mui/material";
import ServiceCard from "./PastCard";
import { useEffect, useRef } from "react";
import {
  faBrain,
  faGamepad,
  faGlobe,
  faLaptopCode,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faFigma } from "@fortawesome/free-brands-svg-icons";
import styles from "./past.module.css";

const services = [
  {
    icon: faGlobe,
    name: "Web Development",
    description:
      "We are a team of highly skilled developers who are passionate about creating exceptional websites and web applications.",
  },
  {
    icon: faLaptopCode,
    name: "Competitive Programming",
    description:
      "We train together to take our programming skills to the next level with our competitive programming domain.",
  },
  {
    icon: faBrain,
    name: "AI/ML",
    description:
      "We are passionate students who are dedicated to exploring the latest AI/ML technologies and techniques, from developing custom AI models to creating intelligent chatbots.",
  },
  {
    icon: faAndroid,
    name: "App Development",
    description:
      "Our team of talented developers specializes in creating apps for Android and iOS platforms, using the latest technologies and techniques, from developing user-friendly interfaces to building secure and scalable back-end systems.",
  },
  {
    icon: faFigma,
    name: "UI/UX",
    description:
      "Explore the world of user interface and user experience design. Gain hands-on experience in UI/UX, from designing user-friendly interfaces to creating engaging user experiences.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
  {
    icon: faGamepad,
    name: "Game Development",
    description:
      "We are dedicated to exploring the latest game development technologies and techniques. Here at Enigma, we create compelling game mechanics and build immersive game worlds.",
  },
  {
    icon: faShield,
    name: "Cyber Security",
    description:
      "Our community of like-minded peers supports each other's growth and development in the Cyber Security domain, by implementing secure systems to conducting ethical hacking exercies.",
  },
];

const Services = () => {
  const servicesContainerRef = useRef();

  useEffect(() => {
    servicesContainerRef.current.addEventListener("mousemove", (e) => {
      for (const card of servicesContainerRef.current.querySelectorAll(
        ".MuiStack-root"
      )) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    });
  }, []);

  return (
    <Stack
      minHeight="100vh"
      alignItems="center"
      overflow={"hidden"}
    >
      <Typography variant="displayLarge" fontSize={"30px"} color={"white"} textAlign="center">
        PAST SPEAKERS
      </Typography>

      <Stack gap={3} paddingTop={7} width={"100vw"} overflow={"hidden"}>
        <Stack
          className={styles.slideContainer}
          direction={"row"}
          gap={3}
          overflow={"hidden"}
        >
          <Stack
            className={styles.leftSlider}
            gap={3}
            direction={"row"}
            ref={servicesContainerRef}
          >
            {services
              .filter((item, idx) => idx <= services.length / 2)
              .map((filteredItem) => (
                <Stack
                  className={styles.cards}
                  height={"270px"}
                  width="250px"
                  key={filteredItem.name}
                >
                  <ServiceCard service={filteredItem} />
                </Stack>
              ))}
          </Stack>
          <Stack
            className={styles.leftSlider}
            gap={3}
            direction={"row"}
            ref={servicesContainerRef}
          >
            {services
              .filter((item, idx) => idx <= services.length / 2)
              .map((filteredItem) => (
                <Stack
                  className={styles.cards}
                  height={"270px"}
                  width="250px"
                  key={filteredItem.name}
                >
                  <ServiceCard service={filteredItem} />
                </Stack>
              ))}
          </Stack>
        </Stack>

        <Typography variant="displayLarge" fontSize={"30px"} color={"white"} textAlign="center" marginTop={5} marginBottom={5}>
        PAST SPONSORS
      </Typography>

        <Stack
          className={styles.slideContainer}
          direction={"row"}
          gap={3}
          overflow={"hidden"}
        >
          <Stack
            className={styles.rightSlider}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            direction={"row"}
            ref={servicesContainerRef}
          >
            {services
              .filter((item, idx) => idx >= services.length / 2)
              .map((filteredItem) => (
                <Stack
                  className={styles.cards}
                  height={"270px"}
                  width="250px"
                  key={filteredItem.name}
                >
                  <ServiceCard service={filteredItem} />
                </Stack>
              ))}
          </Stack>

          <Stack
            className={styles.rightSlider}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            direction={"row"}
            ref={servicesContainerRef}
          >
            {services
              .filter((item, idx) => idx >= services.length / 2)
              .map((filteredItem) => (
                <Stack
                  className={styles.cards}
                  height={"270px"}
                  width="250px"
                  key={filteredItem.name}
                >
                  <ServiceCard service={filteredItem} />
                </Stack>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Services;
