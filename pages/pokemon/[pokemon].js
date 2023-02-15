import Head from 'next/head'

function Pokemon({pokemon}) {
    const name = pokemon.name;
    return (<div>
        <Head>
            <title>Pokemon, {name}</title>
        </Head>
        <div>
            Welcome, {pokemon?.name}!
            <img src={pokemon?.sprites.front_default}/>
        </div>
    </div>)
}

export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemon = await res.json();

    let paths = pokemon.results.map((pok) => {
        return `/pokemon/${pok.name}`
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}

export default Pokemon