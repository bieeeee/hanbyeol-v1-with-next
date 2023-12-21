'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { logo } from '@images'
import Dropdown from '@/components/Dropdown/Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  const onClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.menu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
          <div className={dropdown ?`${styles.links} clickedButton`: `${styles.links} button`}>
            <Image src={logo} alt="logo" width={19} height={19} priority={true} />
            <span>Start</span>
          </div>
          {dropdown && <Dropdown />}
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
