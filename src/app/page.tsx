import Link from 'next/link'
import Terminal from '@/components/Terminal/Terminal'
import styles from './page.module.scss'
import SkillItems from '@/components/Skill/SkillItems'
import Image from 'next/image'
import { folder } from '@images'

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
      </div>
    </main>
  )
}
