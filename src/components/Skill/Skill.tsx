'use client'
import styles from './Skill.module.scss';
import Image from 'next/image';
import { close, folder, openFolder } from '@images';
import { useState } from 'react';

interface SkillLoaderProps {
  children: React.ReactNode
}

const Skill = ({children}: SkillLoaderProps) => {
  const [skillModal, setSkillModal] = useState(false);

  const toggleModal = () => {
    setSkillModal(!skillModal);
  }

  return (
    <>
      <div onClick={toggleModal} className="folder">
        <Image src={folder} width={48} height={48} alt='folder-icon' priority />
        <p>Skills</p>
      </div>
      {skillModal && (
        <div className='modal'>
          <div className='overlay'>
            <div className={`${styles.skillContainer} border`}>
              <div className="modalBar">
                <div className="modalBarLeft">
                  <Image src={openFolder} alt='open-folder-icon' />
                  <p>Skills</p>
                </div>
                <div onClick={toggleModal} className='close-modal'>
                  <Image src={close} width={12} height={12} alt='close-button' />
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Skill
