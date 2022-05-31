import { useState } from 'react'
import Client from '../core/Client'
import Input from './Input'
import Button from './Button'

interface FormProps{
    client: Client
    clientChanged?: (client: Client) => void
    canceled?: () => void 
}

export default function Form(props: FormProps){
    const id = props.client?.id
    
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    
    return(
        <div>
            {id ? (
                <Input text="Código" value={id} readonly className="mb-4" />
            ) : false}
            <Input text="Name" value={name} onChange={setName} className="mb-4"/>
            <Input text="Age" type='number' value={age} onChange={setAge} className="mb-4" />
            <div className='flex justify-end mt-5'>
                <Button color="blue" className="mr-2"
                onClick={() => props.clientChanged?.(new Client(name, +age, id))}>Save</Button>
                <Button color="gray" onClick={props.canceled}>Cancel</Button>
            </div>
        </div>
    )
}