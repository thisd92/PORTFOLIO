interface ButtonProps{
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    const color = props.color ?? 'gray'
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white rounded-md px-3 py-2
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}