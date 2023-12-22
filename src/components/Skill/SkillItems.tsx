import Image from "next/image";

interface skillProps {
  id: number;
  title: string;
  img: string;
}

const SkillItems = async () => {
  const skillsResponse = await fetch("https://api.jsonsilo.com/public/3cc4c28d-b100-44b5-99d7-406a3672c96c");

  const skillsJson = await skillsResponse.json();

  return (
    <div className="modal-content modal-skill">
      {skillsJson.map((skill: skillProps) => (
        <div key={skill.id} className="folder">
          <Image src={skill.img} width={43} height={43} alt={skill.title} />
          {skill.title}
        </div>
      ))}
    </div>
  )
}

export default SkillItems
