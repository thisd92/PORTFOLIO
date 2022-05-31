import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Button from '../components/Button'
import Form from '../components/Form'
import ClientRepository from '../core/ClientRepository'
import ColectionClient from '../backend/db/ColectionClient'
import useClients from '../hooks/useClients'

export default function Home() {

  const { 
    client, 
    clients, 
    addClient, 
    clientSelected, 
    removeClient, 
    saveClient,
    visibleTable,
    visibleForm,
    showTable
  } = useClients()
    
  return (
    <div className={`flex h-screen justify-center items-center 
    bg-gradient-to-l from-purple-500 to-blue-500
    text-white`}>
      <Layout title='Cadastro'>
        {visibleTable? (
      <>
          <div className="flex justify-end">
            <Button color="green" className="mb-4" onClick={addClient}>Add New Client</Button>
          </div>
          <Table clients={clients} 
            clientSelected={clientSelected}
            clientRemoved={removeClient}
          />
        </>

        ) : (
          <Form client={client} 
          clientChanged={saveClient}
          canceled={showTable} />
        )}
      </Layout>
    </div>
  )
}