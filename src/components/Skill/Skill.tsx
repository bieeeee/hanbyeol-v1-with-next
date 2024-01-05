'use client'
import styles from './Skill.module.scss';
import Image from 'next/image';
import { close, folder, openFolder } from '@images';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const Skill = ({ data }: any) => {
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
        <div className={styles.modal}>
          <div className={styles.overlay}>
            <div className={`${styles.skillContainer} folderContainer`}>
              <div className="modalBar">
                <div className="modalBarLeft">
                  <Image src={openFolder} alt='open-folder-icon' />
                  <p>Skills</p>
                </div>
                <div onClick={toggleModal} className='close-modal'>
                  <Image src={close} width={12} height={12} alt='close-button' />
                </div>
              </div>
              <div className="modal-content">
                <Doughnut data={data} />
              </div>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Skill
