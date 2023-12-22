import Terminal from '@/components/Terminal/Terminal'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Skill from '@/components/Skill/Skill'
import SkillItems from '@/components/Skill/SkillItems'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <Terminal />
        <Skill>
          <SkillItems />
        </Skill>
      </div>
    </main>
  )
}
