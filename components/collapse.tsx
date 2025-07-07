import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/collapse.module.css";

interface IProps {
  open?: boolean;
  children: any;
  title: string;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.collapseContainer} >
        <div className={styles.collapseTitle} onClick={handleFilterOpening} >
          <h3>{title}</h3>
          <button>
            {!isOpen ? (
              <Image src="/chevronDown.png" alt="Down arrow" width="24" height="24" />
            ) : (
              <Image src="/chevronUp.png" alt="Up arrow" width="24" height="24" />
            )}
          </button>
        </div>

        <div>
          <div>{isOpen && <div>{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
