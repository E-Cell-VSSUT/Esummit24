import { Stack, Typography } from "@mui/material";
import ServiceCard from "./PastCard";
import { useEffect, useRef } from "react";
import styles from "./past.module.css";
import { pastSpon,pastGuests } from "../../constants";


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
      <Typography variant="displayLarge"  color={"white"} textAlign="center" className="text-white text-2xl xl:text-5xl main-font2">
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
            {pastGuests.lead
              .filter((item, idx) => idx <= pastGuests.lead?.length / 2)
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
            {pastGuests.lead
              .filter((item, idx) => idx <= pastGuests.lead.length /2)
              .map((filteredItem) => (
                <Stack
                  className={styles.cards}
                  height={"350px"}
                  width="250px"
                  key={filteredItem.name}
                >
                  <ServiceCard service={filteredItem} />
                </Stack>
              ))}
          </Stack>
        </Stack>

        <Typography variant="displayLarge"  color={"white"} textAlign="center" marginTop={5} marginBottom={5} className="text-white text-2xl xl:text-5xl main-font2">
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
            {pastSpon.lead
              .filter((item, idx) => idx >= pastSpon.lead.length / 2)
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
            {pastSpon.lead
              .filter((item, idx) => idx >= pastSpon.lead.length / 2)
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
