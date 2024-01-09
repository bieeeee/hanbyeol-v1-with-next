'use client'
import styles from './Project.module.scss';
import Image from "next/image";
import { useState } from "react";
import { close, folder, openFolder } from "@images";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { useRouter } from 'next/navigation';


const Project = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();
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
          <button
            className="close-modal"
            onClick={() => {
              if (selectedId === -1) {
                router.back()
              } else {
                toggleProjectItem(0)
              }
            }}
          >
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
              <div className={styles.projectImg}>
                <Image src={image} fill alt={selectedProject.title} />
              </div>
              <div className={styles.projectDetail}>
                <h1>{selectedProject.title}</h1>
                <div>
                  <div>
                    <BsFillPeopleFill size={13} />
                    <p>{selectedProject.team}</p>
                  </div>
                  <div>
                    <FaRegCalendarAlt size={13} />
                    <p>{selectedProject.period}</p>
                  </div>
                  <div>
                    <FaGithub size={13} />
                    <a href={selectedProject.repo} target='_blank'>Code</a>
                    </div>
                </div>
                <div className={styles.tagContainer}>
                  {selectedProject.stack.map((item, i) =>
                    <p key={i} className={styles.tag}>{item}</p>
                  )}
                </div>
              </div>
              <div className={styles.projectDesc}>
                <div>
                  <h4>설명</h4>
                  {selectedProject.desc.replace('.', '.\n')}
                </div>
                <div>
                  <h4>역할</h4>
                  {selectedProject.role.map((item, i) =>
                    <li key={i}>{item}</li>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Project;
