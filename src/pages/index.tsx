// SPA - os dados carrega depois
// import { useEffect } from "react"

// export default function Home() {
//   useEffect(() => {
//     fetch('http://localhost:3333/episodes')
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }, [])
  
//   return (
//     <h1>Index</h1>
//   )
// }



// SSR - os dados ja vem carregados mesmo desabilitando JS
// export default function Home(props) {
//   return (
//     <div>
//       <h1>Index</h1>
//       <p>{JSON.stringify(props.episodes)}</p>
//     </div>
//   )
// }

// export async function getServerSideProps() {
//   const response = await fetch ('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }



//SSG - Gera uma versão estática (html puro) - vai ter mesmo conteúdo gerado na 1 vez, sem solicitar uma nova requisição da API
export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch ('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}