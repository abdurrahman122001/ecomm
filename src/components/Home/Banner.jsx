import Link from "next/link";
import SimpleSlider from "../Helpers/SliderCom";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import { useRef } from "react";
import bg from "../../../public/images/red.webp";

export default function Banner({ className, sliders = [] }) {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={`w-full xl:h-[733px] h-[500px] ${className || ""}`}>
      <div className="main-wrapper w-full h-full">
        {/*    slider area*/}
        <div className="hero-slider-wrapper xl:h-full mb-20 xl:mb-0  w-full relative">
          <SimpleSlider settings={settings} selector={sliderRef}>
            {sliders.length > 0 &&
              sliders.map((item, i) => (
                <div key={i} className="item w-full xl:h-[733px] h-[500px]">
                  <div
                    className="w-full h-full relative md:bg-center"
                    style={{
                      backgroundImage: `url(${bg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
<div className="container-x mx-auto h-full flex items-center justify-center">
  <div className="w-full h-full flex items-center justify-center">
    <div className="md:w-[626px] w-full flex items-center justify-center">
      <Link
        href={{
          pathname: "/single-product",
          query: { slug: item.product_slug },
        }}
        passHref
      >
        <a rel="noopener noreferrer">
          {/* <ShopNowBtn
            className="md:w-[160px] w-[145px] h-[52px] bg-qpurple"
            textColor="text-white group-hover:text-white"
          /> */}
        </a>
      </Link>
    </div>
  </div>
</div>

                  </div>
                </div>
              ))}
          </SimpleSlider>
        </div>
      </div>
    </div>
  );
}
