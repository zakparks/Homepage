import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import chevronUp from "/public/static/chevronUp.png";
import chevronDown from "/public/static/chevronDown.png";

interface IProps {
  open?: boolean;
  title: string;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.collapseContainer} onClick={handleFilterOpening}>
        <div>
          <div className={styles.collapseTitle}>
            <h3>{title}</h3>
            <button type="button">
              {!isOpen ? (
                <Image src={chevronDown} alt="Down arrow" width="24" height="24" />
              ) : (
                <Image src={chevronUp} alt="Up arrow" width="24" height="24" />
              )}
            </button>
          </div>
        </div>

        <div>
          <div>{isOpen && <div>{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
