
import Link from 'next/link'
import styles from './Tag.module.css'

export default function Tag({ tag }) {
  return (
    <Link href={`/industries/${tag.slug}`} passHref legacyBehavior>
      <a className={styles.tag}>{tag.name}</a>
    </Link>
  )
}
