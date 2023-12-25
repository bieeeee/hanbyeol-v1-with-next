import styles from '../page.module.scss';
import Project from '@/components/Project/Project';
import { basicFetch } from '../api/fetchFunction';
import { projectKey, projectUrl } from '../../../config';

export default async function Home() {
  const projects = await basicFetch<Project[]>(projectUrl, projectKey);

  return (
    <main className={styles.projectMain}>
      <Project projects={projects} />
    </main>
  )
}
