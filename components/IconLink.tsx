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
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
        <img
          src={defaultSrc}
          alt={alt}
          className={styles.default}
          width={size}
          height={size}
        />
        <img
          src={hoverSrc}
          alt={alt}
          className={styles.hover}
          width={size}
          height={size}
        />
      </a>
  );
};

export default IconLink;
