import { basicFetch } from "@/app/api/fetchFunction";
import { getProjects } from "./getProjects";

export const getSkills = async () => {
    const projects = await getProjects();
    const skills: Skills = projects.reduce((acc: Skills, cur: Project) => {
        cur.stack.forEach((skill) => acc[skill] = (acc[skill] || 0) + 1)
        return acc
    }, {});
    const sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1])
    const skillData = Object.fromEntries(sortedSkills)

    const repos = await basicFetch<any>("https://api.github.com/users/bieeeee/repos")

    const languages = repos.reduce((acc: Skills, cur: any) => {
        acc[cur.language] = (acc[cur.language] || 0) + 1
        return acc
    }, {})

    const data = {
        labels: [...Object.keys(skillData), ...Object.keys(languages)],
        datasets: [
            {
                labels: Object.keys(skillData),
                data: Object.values(skillData),
                hoverOffset: 4,
            },
            {
                labels: Object.keys(languages),
                data: Object.values(languages),
                hoverOffset: 4
            }
        ]
    }

    return data
}
