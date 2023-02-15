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

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}

export default Pokemon