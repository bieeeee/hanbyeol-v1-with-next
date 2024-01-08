'use client'
import styles from './Skill.module.scss';
import Image from 'next/image';
import { close, folder, openFolder } from '@images';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, ChartDataLabels, Tooltip, Legend, Colors);

const options: any = {
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      align: "center",
      formatter: function (_: any, context: any) {
        return context.dataset.labels[
          context.dataIndex
        ]
      },
      color: "#fff",
      font: {
        weight: 600,
        size: 12
      }
    },
    tooltip: {
      callbacks: {
        title: function(context: any) {
          return context[0].dataset.labels[context[0].dataIndex];
        }
      }
    }
  }
}

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
                  <p>프로젝트에 사용한 기술빈도</p>
                </div>
                <div onClick={toggleModal} className='close-modal'>
                  <Image src={close} width={12} height={12} alt='close-button' />
                </div>
              </div>
              <div className="modal-content">
                <div className={styles.chart}>
                  <Doughnut data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Skill
