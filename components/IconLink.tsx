import Image from "next/image";
import Link from "next/link";
import styles from "../styles/IconLink.module.css";

interface IconLinkProps {
  href: string;
  alt: string;
  defaultSrc: string;
  hoverSrc: string;
  size?: number;
}

const IconLink: React.FC<IconLinkProps> = ({ href, alt, defaultSrc, hoverSrc, size = 20 }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
      <div className={styles.iconWrapper}>
        <Image
          src={defaultSrc}
          alt={alt}
          className={styles.default}
          width={size}
          height={size}
        />
        <Image
          src={hoverSrc}
          alt={alt}
          className={styles.hover}
          width={size}
          height={size}
        />
      </div>
    </Link>
  );
};

export default IconLink;
