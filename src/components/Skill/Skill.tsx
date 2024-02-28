'use client'
import styles from './Skill.module.scss';
import Image from 'next/image';
import { folder, openFolder } from '@images';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Modal } from '../ui/modal';
import { useModalStore } from '../hooks/useModalStore';

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
        title: function (context: any) {
          return context[0].dataset.labels[context[0].dataIndex];
        }
      }
    }
  }
}

const Skill = ({ data }: any) => {
  const skillModal = useModalStore();

  return (
    <>
      <div onClick={skillModal.onOpen} className="folder">
        <Image src={folder} width={48} height={48} alt='folder-icon' priority />
        <p>Skills</p>
      </div>
        <Modal
          title='Frequently Used Skills'
          modalStyle={styles.modal}
          containerStyle={`${styles.skillContainer} folderContainer`}
          src={openFolder}
          alt='open-folder'
          isOpen={skillModal.isOpen}
          onClose={skillModal.onClose}
        >
          <div className={styles.chart}>
            <Doughnut data={data} options={options} />
          </div>
        </Modal>
    </>
  )
}

export default Skill
