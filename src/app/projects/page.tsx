import styles from '../page.module.scss';
import Project from '@/components/Project/Project';
import { basicFetch } from '../api/fetchFunction';

export default async function Home() {
  const projectKey = {"X-MASTER-KEY": process.env.PROJECT_KEY,"X-Bin-Meta": false}
  const projects = await basicFetch<Project[]>(process.env.PROJECT_URL, projectKey);

  return (
    <main className={styles.projectMain}>
      <Project projects={projects} />
    </main>
  )
}
