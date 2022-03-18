import Head from "next/head"
import Image from "next/image"
import LogoImg from '../../public/logo.svg'
import styles from '../../styles/home.module.scss'
import {Input} from '../components/ui/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo do Pizzaria" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu Email" 
            type={'text'}
            />

            <Input placeholder="Sua senha" type={'password'}/>

          </form>
        </div>

      </div>
    </>
  )
}
