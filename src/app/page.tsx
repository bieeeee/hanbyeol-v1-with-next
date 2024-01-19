import styles from './page.module.scss';
import Terminal from '@/components/Terminal/Terminal';
import SkillItems from '@/components/Skill/SkillItems';
import Link from 'next/link';
import Image from 'next/image';
import { folder, linkedin, github, calculator, velog } from '@images';

export default function Home() {
  return (
    <main className={styles.main}>
      <Terminal />
      <SkillItems />
      <Link href="/projects" className='folder'>
        <Image src={folder} width={48} height={48} alt='projects-folder' priority />
        <p>Projects</p>
      </Link>
      <Link href="/calculator" className='folder'>
        <Image src={calculator} width={53} height={48} alt='calculator' priority />
        <p>N빵 계산기</p>
      </Link>
      <a href="https://velog.io/@bieeeee" target='_blank' rel="noreferrer noopener" className='folder' style={{ textDecoration: 'none', color: 'black' }}>
        <Image src={velog} height={46} width={46} alt='velog' priority />
        <p>Velog</p>
      </a>
      <a href="https://www.linkedin.com/in/hanbyeol-kwon/" target='_blank' rel="noreferrer noopener" className='folder' style={{ textDecoration: 'none', color: 'black' }}>
        <Image src={linkedin} height={46} width={46} alt='linkedin' priority />
        <p>LinkedIn</p>
      </a>
      <a href="https://github.com/bieeeee" target='_blank' rel="noreferrer noopener" className='folder' style={{ textDecoration: 'none', color: 'black' }}>
        <Image src={github} height={46} width={46} alt='github' priority />
        <p>Github</p>
      </a>
    </main>
  )
}
