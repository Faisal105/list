import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
            <h1 className={styles.title}>HomePage</h1>
            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus esse animi quibusdam ipsam ad reprehenderit velit cumque aliquid ea enim? Placeat beatae dignissimos illum sed voluptatem, minima culpa nisi?</p>
            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus esse animi quibusdam ipsam ad reprehenderit velit cumque aliquid ea enim? Placeat beatae dignissimos illum sed voluptatem, minima culpa nisi?</p>
            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, delectus esse animi quibusdam ipsam ad reprehenderit velit cumque aliquid ea enim? Placeat beatae dignissimos illum sed voluptatem, minima culpa nisi?</p>
            <Link href="/friendsList"><a className={styles.btn}>see Friends List</a></Link>
         </div>
  )
}
