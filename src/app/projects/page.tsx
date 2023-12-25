import styles from '../page.module.css';
import Project from '@/components/Project/Project';
import { basicFetch } from '../api/fetchFunction';
import { projectUrl } from '../../../config';

type ProjectItem = {
  [projectId: string]: {
    desc: string
  }
}

export default async function Home() {
  const projectItems = await basicFetch<ProjectItem[]>(projectUrl);

  return (
    <main className={styles.main}>
        <Project data={projectItems} />
    </main>
  )
}
