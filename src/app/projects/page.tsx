import { getProjects } from '../../../actions/getProjects';
import styles from '../../app/(main)/page.module.scss';
import Project from '@/components/Project/Project';

export default async function Page() {
  const projects = await getProjects();

  return (
    <main className={styles.projectMain}>
        <Project projects={projects} />
    </main>
  )
}
