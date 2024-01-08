import Link from 'next/link'
import Terminal from '@/components/Terminal/Terminal'
import styles from './page.module.scss'
import SkillItems from '@/components/Skill/SkillItems'
import Image from 'next/image'
import { folder, linkedin, github } from '@images'

export default function Home() {
  return (
    <main className={styles.main}>
      <Terminal />
      <div className={styles.icons}>
        <SkillItems />
        <Link href="/projects" className='folder'>
          <Image src={folder} width={48} height={48} alt='projects-folder' />
          <p>Projects</p>
        </Link>
        <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='folder' style={{ textDecoration: 'none', color: 'black' }}>
          <Image src={linkedin} height={48} width={48} alt='linkedin' priority />
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='folder' style={{ textDecoration: 'none', color: 'black' }}>
          <Image src={github} height={48} width={48} alt='github' priority />
          <p>Github</p>
        </a>
      </div>
    </main>
  )
}
