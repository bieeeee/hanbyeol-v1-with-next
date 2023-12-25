'use client'
import { useState } from 'react';
import { MenuItems } from './MenuItem';
import styles from './dropdown.module.scss';
import Link from 'next/link';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? styles.clicked : `${styles.menu} border`}
    >
      {MenuItems.map((item, index) => {
        return (
          <Link href={item.path} key={index} replace>
            <li className={styles.li} onClick={() => setClick(false)}>
              <span className={styles.link}>
                {item.title}
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Dropdown;
