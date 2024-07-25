import images from "../assets/images.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function ImageSlider() {
  return (
    <div className="mt-8 max-w-7xl mx-auto shadow-2xl">
      <Carousel
        showArrows={true}
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src={images}
            className="object-cover w-full h-64 rounded-lg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src={image2}
            className="object-cover w-full h-64 rounded-lg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src={image3}
            className="object-cover w-full h-64 rounded-lg"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
}
