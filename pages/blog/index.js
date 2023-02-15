import Head from 'next/head'
import Link from 'next/link'

function Home() {
    return (
        <div>
            <Head>
                <title>My blog</title>
            </Head>
            <p>Welcome, blog reader!</p>
            <Link href = "/">Go back home</Link>
        </div>
    )
}

export default Home