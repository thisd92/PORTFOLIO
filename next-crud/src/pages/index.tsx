import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

export default function Home() {
  
  const clients = [
    new Client('Thiago', 29, '1'),
    new Client('Flávia', 31, '2'),
    new Client('Sophia', 8, '3'),
    new Client('Amanda', 16, '4')
  ]

  function clientSelected(client: Client){
    console.log(client.name)
  }

  function clientRemoved(client: Client){
    console.log(`Excluir ${client.name}`)
  }
  
  return (
    <div className={`flex h-screen justify-center items-center 
    bg-gradient-to-l from-purple-500 to to-blue-500
    text-white`}>
      <Layout title='Cadastro'>
        <Table clients={clients} 
        clientSelected={clientSelected}
        clientRemoved={clientRemoved}
        ></Table>
      </Layout>
    </div>
  )
}
