import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`flex h-screen justify-center items-center 
    bg-gradient-to-l from-purple-500 to to-blue-500
    text-white`}>
      <Layout titulo='Cadastro'>
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
