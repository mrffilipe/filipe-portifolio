import styles from './page.module.css'

import Image from 'next/image'

import ProfilePicture from '../assets/img/profile_picture.jpg'
import LinkedinSvg from '../assets/svg/linkedin.svg'
import GithubSvg from '../assets/svg/github.svg'

export default function Home() {
  return (
    <section id='container'>
      <div className={styles.content}>
        <div className={styles.profile_picture}>
          <Image
            src={ProfilePicture}
            alt='My photo'
          />
        </div>
        <div className={styles.description}>
          <h2>HI THERE! I'M</h2>
          <h1><span>FILIPE</span> M. FERRACIOLI</h1>
          <p>A <span>backend developer</span> who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet.</p>
          <div className={styles.action}>
            <a href="#">Links</a>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/filipemrf/" target='_blank'>
                <Image src={LinkedinSvg} alt="Linkedin icons8" />
              </a>
              <a href="https://github.com/mrffilipe" target='_blank'>
                <Image src={GithubSvg} alt="GitHub icons8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}