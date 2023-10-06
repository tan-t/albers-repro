import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@super_studio/ecforce_ui_albers'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button>test</Button>
      </div>
    </main>
  )
}
