import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles.css";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const eventsRef = useRef(null);
  const startupsRef = useRef(null);
  const attendeesRef = useRef(null);
  const contentRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    const pin2 = gsap.fromTo(
        attendeesRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-30vw",
          ease: 'none',
          rotation:720,
          duration: 1,
          scrollTrigger: {
            trigger: attendeesRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            
          },
        }
      );
      const pin3 = gsap.fromTo(
        startupsRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-25vw",
          ease: 'none',
          rotation:720,
          duration: 1,
          scrollTrigger: {
            trigger: startupsRef.current,
            start: "center center",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            
          },
        }
      );
      const pin4 = gsap.fromTo(
        eventsRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-20vw",
          ease: 'none',
          rotation:720,
          
          duration: 1,
          scrollTrigger: {
            trigger: eventsRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 1,
            pin: true,
            
          },
        }
      );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
      pin2.kill();
      pin3.kill();
      pin4.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="info">
              <h1 className="mb-4 main-font2 text-4xl font-extrabold font leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">What is Esummit ?</h1>
              <p className="mb-6 main-font text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 hover:dark:text-gray-300">
              E-Summit is a dynamic platform that brings together entrepreneurs, experts and industry leaders to support the entrepreneurial spirit. 
              It is a melting pot of ideas, the collision of innovation and business, and the competition of dreams. Through hosting lectures,
               workshops and interactive sessions, E-Summit aims to inspire, educate and inspire the next generation of dreamers and revolutionaries.
              </p>
              <hr />
            </div>
          </div>

          <div className="scroll-section2">
            <div className="info2">
              <div className="videodiv">
                <h1 style={{ paddingBottom: "10px", color: "white" }} className="main-font">
                  After Movie
                </h1>

                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/tA8h_exda3E?si=0CKILmSmZ6MeTQVT"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
        

              </div>

              <div className="stats" ref={contentRef}>
                <div className="attendees" ref={attendeesRef}><p className="main-font">Attendees</p><p className="main-font">30 +</p></div>
                <div className="startups" ref={startupsRef}>
                <p className="main-font">startups</p><p className="main-font">30 +</p>
                </div>
                <div className="events" ref={eventsRef}>
                <p className="main-font">Events</p><p className="main-font">10 +</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
