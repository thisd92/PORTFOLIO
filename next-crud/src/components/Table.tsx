import Client from '../core/Client'
import { IconEdit, IconRemove } from './Icons'

interface TabelaProps{
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientRemoved?: (client: Client) => void
}

export default function Tabela(props: TabelaProps){
    
    const showAction = props.clientRemoved || props.clientSelected

    function renderHeader(){
        return(
        <tr>
            <th className='text-left p-4'>ID</th>
            <th className='text-left p-4'>Name</th>
            <th className='text-left p-4'>Age</th>
            {showAction ? <th className='p-4'>Action</th> : false}
        </tr>
        )}

    function renderData(){
        return props.clients?.map((client, i) => {
            return(
                <tr key={client.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{client.id}</td>
                    <td className='text-left p-4'>{client.name}</td>
                    <td className='text-left p-4'>{client.age}</td>
                    {showAction ? renderAction(client) : false}
                </tr>
            )
        })
    }

    function renderAction(client: Client){
        return(
            <td className='flex justify-center'>
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`
                    p-2 m-1 flex justify-center items-center
                    text-green-500 rounded-full
                    hover:bg-purple-50
                    `}>
                        {IconEdit}
                    </button>
                ) : false}
                {props.clientRemoved ? (
                    <button onClick={() => props.clientRemoved?.(client)} className={`
                    p-2 m-1 flex justify-center items-center
                    text-red-600 rounded-full
                    hover:bg-purple-50
                    `}>
                        {IconRemove}
                    </button>
                ) : false}
            </td>
        )
    }
    
    return(
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}