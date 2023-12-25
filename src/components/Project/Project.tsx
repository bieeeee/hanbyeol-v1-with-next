'use client'
import styles from './Project.module.scss';
import Image from "next/image";
import { useState } from "react";
import { close, folder, openFolder } from "@images";


const Project = ({ projects }: { projects: Project[] }) => {
  const [isSelected, setIsSelcted] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();

  const toggleProjectItem = (id: number) => {
    setIsSelcted(!isSelected);
    setSelectedId(id - 1);
  };

  return (
    <>
      <div className={`${styles.projectContainer} border`}>
        <div className="modal-bar">
          <div className="modal-bar-left">
            <Image src={openFolder} width={12} height={12} alt="folder-opened" priority />
            <p>
              {isSelected && selectedId ?
                projects[selectedId].title
                :
                "Projects"
              }
            </p>
          </div>
          <button className="close-modal" onClick={() => toggleProjectItem(0)}>
            <Image src={close} width={12} height={12} alt="folder-opened" />
          </button>
        </div>
        <div className={`${styles.projectContent} clickedBorder`}>
          {!isSelected ? (
            projects.map((project: Project) => (
              <div
                key={project.id}
                onClick={() => toggleProjectItem(project.id)}
                className='folder'
              >
                <Image src={folder} width={48} height={48} alt="folder" />
                <p>{project.title}</p>
              </div>
            ))
          ) : (
            <div className="project-modal-content">
              {selectedId !== undefined && projects[selectedId].desc}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Project;
