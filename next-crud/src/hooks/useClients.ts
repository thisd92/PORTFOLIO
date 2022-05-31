import { useState, useEffect } from "react"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import ColectionClient from "../backend/db/ColectionClient"
import useTableForm from "./useTableForm"

export default function useClients() {
    const repo: ClientRepository = new ColectionClient()

    const { 
        showForm, 
        showTable, 
        visibleTable, 
        visibleForm 
    } = useTableForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(showAll, [])

    function showAll() {
        repo.all().then(clients => {
            setClients(clients)
            showTable()
        })

    }

    function addClient() {
        setClient(Client.empty())
        showForm()
    }

    function clientSelected(client: Client) {
        setClient(client)
        showForm()
    }

    async function removeClient(client: Client) {
        await repo.remove(client)
        showAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        showAll()
    }

    return{
        client,
        clients,
        addClient,
        saveClient,
        removeClient,
        clientSelected,
        showAll,
        visibleForm,
        visibleTable,
        showTable
    }
}