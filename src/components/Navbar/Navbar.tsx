'use client'
import styles from './navbar.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Dropdown from '@/components/Dropdown/Dropdown';
import { logo } from '@assets/images/index'

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
          <div className={dropdown ? `${styles.links} clickedBorder` : `${styles.links} border`}>
            <Image src={logo} alt="logo" width={19} height={19} priority={true} />
            Start
          </div>
          {dropdown && <Dropdown />}
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
