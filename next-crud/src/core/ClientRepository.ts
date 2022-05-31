import Client from "./Client"

export default interface ClientRepository{
    save(client: Client): Promise<Client>
    remove(client: Client): Promise<void>
    all(): Promise<Client[]>
}