import styles from './Skill.module.scss';
import { openFolder } from '@assets/images/index';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Modal } from '../ui/modal';
import { getSkills } from '../../app/api/getSkills';

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

const Skill = async () => {
  const skillsData = await getSkills();
  return (
    <Modal
      title='Frequently Used Skills'
      modalStyle={styles.modal}
      containerStyle={`${styles.skillContainer} folderContainer`}
      src={openFolder}
      alt='open-folder'
    >
      <div className={styles.chart}>
        <Doughnut data={skillsData} options={options} />
      </div>
    </Modal>
  )
}

export default Skill
