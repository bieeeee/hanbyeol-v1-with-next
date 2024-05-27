import { getProjects } from '../api/getProjects';
import Project from '@/components/Project/Project';

export default async function Page() {
  const projects = await getProjects();

  return (
    <main className={"main gap-0 p-0 justify-center items-center my-auto !flex"}>
        <Project projects={projects} />
    </main>
  )
}
