import "./styles.css";
import Plx from "react-plx";


export default function Main() {
  return (
    <div>
      <div className="main">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2.6,
                property: "scale",
              },
              {
                startValue:1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img style={{ width: "100%",height:'100vh' }} src="back.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale",
              },
              {
                startValue: 0.5,
                endValue: 0.1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          opacity: 0.5,
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%",height:'100vh'  }} src="bgfinal.png" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: 0,
          width: "100%",
          zIndex: 200,
        }}
      >
        <img
          style={{
            width: "90vw",
          }}
          src="/logo.png"
          alt="Goonies"
        />
      </Plx>
      </div>
    </div>
  );
}
