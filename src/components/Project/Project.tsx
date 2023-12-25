'use client'
import { useState } from "react";
import Image from "next/image";
import { close, folder, openFolder } from "@images";

type Project = {
  id: string;
  title: string;
}

type ProjectStates = {
  [key: string]: boolean;
}

const projects: Project[] = [
  { id: 'plan', title: 'Plan For You' },
  { id: 'varcharforyou', title: 'Varchar For You' },
  { id: 'v1', title: 'Hanbyeol.me' },
  { id: 'zapfit', title: 'Zapfit.ca' },
  { id: 'only', title: 'OnlyDevs' },
  { id: 'booking', title: 'Booking.com' },
];

function Project({ data }: any) {
  const [selectedId, setSelectedId] = useState("")
  const [projectStates, setProjectStates] = useState(
    projects.reduce((acc, project: Project) => {
      acc[project.id] = false;
      return acc;
    }, {} as ProjectStates
    ));

  const toggleProjectModal = (e: any, id: string) => {
    e.stopPropagation();
    setProjectStates((prevStates: ProjectStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <main>
      <div className="modal">
        <div className="modal-container">
          <div className="modal-bar">
            <div className="modal-bar-left">
              <Image src={openFolder} width={12} height={12} alt="folder-opened" priority />
              <p>Projects</p>
            </div>
            <button
              className='close-modal'
            >
              <Image src={close} width={12} height={12} alt="folder-opened" />
            </button>
          </div>
          <div className="project-modal-content">
            <div className="modal-content-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={(e) => toggleProjectModal(e, project.id)}
                  className='btn-modal project-modal-icon'
                >
                  <Image src={folder} width={48} height={48} alt="folder" />
                  <p>{project.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {projects.map((project) => (
        <div key={project.id}>
          {projectStates[project.id] && (
            <div className='modal'>
              <div className='modal-container'>
                <div className="modal-bar">
                  <div className="modal-bar-left">
                    <Image src={openFolder} width={12} height={12} alt="folder-opened" priority />
                    <p>{project.title}</p>
                  </div>
                  <button
                    onClick={(e) => toggleProjectModal(e, project.id)}
                    className='close-modal'
                  >
                    <Image src={close} width={12} height={12} alt="folder-opened" />
                  </button>
                </div>
                <div className="project-modal-content">
                  {data[selectedId].desc}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  )
}

export default Project;
