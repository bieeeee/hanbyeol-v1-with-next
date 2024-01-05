'use client'
import styles from './Project.module.scss';
import Image from "next/image";
import { useState } from "react";
import { close, folder, openFolder } from "@images";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt";
import { FaCode } from "@react-icons/all-files/fa/FaCode";


const Project = ({ projects }: { projects: Project[] }) => {
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [isSelected, setIsSelcted] = useState<boolean>(false);
  const selectedProject = projects[selectedId];
  const image = selectedProject?.image;

  const toggleProjectItem = (id: number) => {
    setSelectedId(id - 1);
    setIsSelcted(!isSelected);
  };

  return (
    <>
      <div className="folderContainer">
        <div className="modalBar">
          <div className="modalBarLeft">
            <Image src={openFolder} width={12} height={12} alt="folder-opened" priority />
            <p>
              {isSelected ?
                projects[selectedId].title
                :
                "Projects"
              }
            </p>
          </div>
          <button className="close-modal" disabled={!isSelected} onClick={() => toggleProjectItem(0)}>
            <Image src={close} width={12} height={12} alt="folder-opened" />
          </button>
        </div>
        <div className='modal-content'>
          {!isSelected ? (
            <div className="folderGrid">
              {projects.map((project: Project) => (
                <div
                  key={project.id}
                  onClick={() => toggleProjectItem(project.id)}
                  className='folder'
                >
                  <Image src={folder} width={48} height={48} alt="folder" />
                  <p>{project.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <div className={styles.projectImg}>
                  <Image src={image} fill style={{ objectFit: "cover" }} alt={selectedProject.title} />
                </div>
                <div className={styles.projectDetail}>
                  <h1>{selectedProject.title}</h1>
                  <div>
                    <div>
                      <BsFillPeopleFill size={13} />
                      <p>1</p>
                    </div>
                    <div>
                      <FaRegCalendarAlt size={13} />
                      <p>2023/04/29 - 2023/11/20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectDetail}>
                {selectedProject.desc}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum cupiditate repellat ab. At, ipsum mollitia perspiciatis tempore fuga fugit minus libero, doloremque exercitationem est asperiores esse accusantium, quod deserunt et!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Project;
