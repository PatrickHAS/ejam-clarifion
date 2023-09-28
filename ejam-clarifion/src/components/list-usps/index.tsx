import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

const ListUsps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          if (screenSize > 1000) {
            return;
          }
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
  return (
    <>
      {screenSize < 1000 ? (
        <ul ref={sliderRef} className="keen-slider">
          <li className="keen-slider__slide list-item">
            <img src={"Vector.png"} alt="" />
            30-DAY SATISFACTION GUARANTEE
          </li>
          <li className="keen-slider__slide list-item">
            <img src={"ph_truck-light.png"} alt="" />
            FREE DELIVERY ON ORDERS OVER $40.00
          </li>
          <li className="keen-slider__slide list-item">
            <img src={"heart.png"} alt="" />
            50.000+ HAPPY CUSTOMERS
          </li>
          <li className="keen-slider__slide list-item">
            <img src={"fluent_arrow-sync-checkmark-20-regular.png"} alt="" />
            100% MONEY BACK GUARANTEE
          </li>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </ul>
      ) : (
        <ul className="list-usps">
          <li className=" list-item">
            <img src={"Vector.png"} alt="" />
            30-DAY SATISFACTION GUARANTEE
          </li>
          <li className=" list-item">
            <img src={"ph_truck-light.png"} alt="" />
            FREE DELIVERY ON ORDERS OVER $40.00
          </li>
          <li className=" list-item">
            <img src={"heart.png"} alt="" />
            50.000+ HAPPY CUSTOMERS
          </li>
          <li className=" list-item">
            <img src={"fluent_arrow-sync-checkmark-20-regular.png"} alt="" />
            100% MONEY BACK GUARANTEE
          </li>
        </ul>
      )}
    </>
  );
};
export default ListUsps;
