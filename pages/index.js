import Head from 'next/head'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/pokemon')
    }

    return (
        <div>
            <Head>
                <title>My Next.js site</title>
            </Head>
            <p>Welcome, explorer!</p>
            <button onClick={handleClick} >Click me!</button>
        </div>
    )
}

export default Home