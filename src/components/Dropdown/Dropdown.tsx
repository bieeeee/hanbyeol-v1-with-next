import { useState } from 'react';
import { MenuItems } from './MenuItem';
import styles from './dropdown.module.scss';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ul
      onClick={handleClick}
      className={click ? styles.clicked : styles.menu}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <span
              className={item.cName}
              onClick={() => {
                smoothScrollToSection(item.id);
                setClick(false);
              }}
            >
              {item.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
