import Link from "next/link";
import Image from "next/image";
import ImageData from "../models/ImageData";

interface IProps {
  images: ImageData[];
}

const Carousel: React.FC<IProps> = ({ images }) => {
  var links = [];
  var slides = [];

  for (var i = 0; i < images.length; i++) {
    links.push(
      <Link href={"#slide" + (i + 1)} scroll={false}>
        <a>{i + 1}</a>
      </Link>
    );
    slides.push(
      <div id={"slide" + (i + 1)}>
        <Image src={images[i].src} alt={images[i].alt} title={images[i].title} layout="fill" objectFit="scale-down" />
      </div>
    );
  }

  return (
    <>
      <div className="slider">
        {links}

        <div className="slides">{slides}</div>
      </div>
    </>
  );
};

export default Carousel;
