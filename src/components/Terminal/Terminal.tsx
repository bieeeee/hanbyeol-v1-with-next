'use client'
import styles from './Terminal.module.scss';
import Image from 'next/image';
import { close, prompt } from '@images';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

function Terminal() {
  const [openT, setOpenT] = useState(true);
  return (
    <>
      {openT == false ?
        <div className='folder' onClick={() => setOpenT(true)}>
          <Image src={prompt} alt='prompt' width={48} height={48} />
          About Me
        </div>
        :
        <div className={styles.terminal} id='about'>
          <div className={`${styles.container} border`}>
            <div className="modalBar">
              <div className="modalBarLeft">
                <Image src={prompt} alt='prompt' />
                About Me
              </div>
              <div className="close-modal" aria-label="Close button" onClick={() => setOpenT(false)}>
                <Image src={close} alt='close' width={13} height={12} />
              </div>
            </div>
            <div className={styles.content}>
              <TypeAnimation
                sequence={[
                  "안녕하세요, 주니어 풀스택 개발자 권한별입니다.\n주어진 것을 단순히 사용하는 유저가 아닌 필요한 것을 직접 개발하고 싶어 직업전환을 결심하였습니다.\n호기심이 많고 새로운 영역을 탐구하기를 즐깁니다.\n현재는 CS전공지식을 보충하기 위하여 정보처리기사를 공부 중에 있으며, 성능 최적화 기술에 가장 관심이 많습니다.\n그 밖에는 등산이나 캠핑과 같은 강아지랑 할 수 있는 모든 활동을 즐기며,\n쓸모없지만 재미있는 코딩 프로젝트를 좋아합니다.\n언제나 좋은 팀 프로젝트 기회를 찾고 있으니, 이메일 또는 링크드인으로 연락주시면 빠른 시일내에 답장 드리겠습니다!\n2024년 새해에도 좋은 하루들이 가득하시길 바랍니다 :)",
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={60}
                className={styles.text}
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Terminal
