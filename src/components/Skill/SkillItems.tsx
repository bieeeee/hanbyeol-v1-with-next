import { basicFetch } from "@/app/api/fetchFunction";
import Skill from "./Skill";

const SkillItems = async () => {
  const projectKey = { "X-MASTER-KEY": process.env.PROJECT_KEY, "X-Bin-Meta": false };
  const projects = await basicFetch<Project[]>(process.env.PROJECT_URL, projectKey);
  const skills: Skills = projects.reduce((acc: Skills, cur: Project) => {
    cur.stack.forEach((skill) => acc[skill] = (acc[skill] || 0) + 1)
    return acc
  }, {});

  const sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1])
  const skillData = Object.fromEntries(sortedSkills)

  const data = {
    labels: Object.keys(skillData),
    datasets: [
      {
        data: Object.values(skillData),
        hoverOffset: 4
      }
    ]
  }

  return (
    <Skill data={data} />
  )
}

export default SkillItems
