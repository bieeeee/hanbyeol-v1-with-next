'use client'
import styles from './Terminal.module.scss';
import Image from 'next/image';
import { close, prompt } from '@images';
import { TypeAnimation } from 'react-type-animation';

function Terminal() {
  return (
    <div className={styles.terminal} id='about'>
      <div className={`${styles.container} border`}>
        <div className="modal-bar">
          <div className="modal-bar-left">
            <Image src={prompt} alt='prompt' />
            About Me
          </div>
          <div className="close-modal" aria-label="Close button">
            <Image src={close} alt='close' width={13} height={12} />
          </div>
        </div>
        <div className={styles.content}>
          <TypeAnimation
            sequence={[
              "Hello, bonjour!\nMy name is Hanbyeol(or Bie).\nWelcome to my 90s-inspired screen, where web development meets nostalgia.\nBesides coding, I dabble in DIY, baking, camping, and being the best dog mom ever!\nIf you're up for a fun project, feel free to reach out through this website or connect with me on LinkedIn.\nHave a nice day ou bonne soirée! :)",
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
  )
}

export default Terminal
