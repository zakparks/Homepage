import styles from "../styles/carousel.module.css";
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
      <Link href={"#slide" + (i + 1)} replace={true} scroll={false}>
        {i + 1}
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
      <div className={styles.slider}>
        {links}
        <div className={styles.slides}>{slides}</div>
      </div>
    </>
  );
};

export default Carousel;
