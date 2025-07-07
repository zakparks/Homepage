import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/carousel.module.css";
import ImageData from "../models/ImageData";

interface IProps {
  images: ImageData[];
  interval?: number;
}

const Carousel: React.FC<IProps> = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselBox}>
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className={styles.imageContainer}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              title={images[index].title}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev}>◀</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};

export default Carousel;
