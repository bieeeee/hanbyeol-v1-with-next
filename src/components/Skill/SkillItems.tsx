import Image from "next/image";
import { basicFetch } from "@/app/api/fetchFunction";

const SkillItems = async () => {
  const skills = await basicFetch<Skill[]>(process.env.SKILL_URL);

  return (
    <div className="modal-content modal-skill">
      {skills.map((skill: Skill) => (
        <div key={skill.id} className="folder">
          <Image src={skill.img} width={43} height={43} alt={skill.title} />
          {skill.title}
        </div>
      ))}
    </div>
  )
}

export default SkillItems
