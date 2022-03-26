import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { FiRefreshCcw } from 'react-icons/fi'
import { setupAPIClient } from '../../services/api'
import { type } from 'os'
import { useState } from 'react'


type orderProps = {
    id: string
    table: string | number
    status: boolean
    draft: boolean
    name: string | null
}
interface HomeProps {
    orders: orderProps[]
}


export default function Dashboard({ orders }: HomeProps) {
    const [orderList, setOrderList] = useState(orders || [])

    function handleOpenModalView(id :string){
        alert("Id " + id)
    }


    return (
        <>
            <Head>
                <title>Painel - Pizzaria</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <div className={styles.containerHeader}>
                        <h1>Últimos pedidios</h1>

                        <button>
                            <FiRefreshCcw color='#3fffa3' size={25} />

                        </button>
                    </div>

                    <article className={styles.listOreders}>

                        {orderList.map(item => (
                            <section key={item.id} className={styles.orderItem}>
                                <button onClick={() => handleOpenModalView(item.id)}>
                                    <div className={styles.tag}></div>
                                    <span>Mesa {item.table}</span>

                                </button>
                            </section>
                        ))}


                    </article>

                </main>

            </div>


        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx)

    const response = await apiClient.get('/orders')

    // console.log(response.data)
    return {
        props: {
            orders: response.data
        }
    }

})