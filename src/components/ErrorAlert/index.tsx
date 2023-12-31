import { FC } from "react"

interface Props {
    error: {
        code: number,
        data: {
            statusCode: number,
            message: string
        }
    }
}

export const ErrorAlert: FC<Props> = ({error}) => {
    const { statusCode, message } = error?.data || { statusCode: null, message: null }
    return (
        <div className="flex flex-col justify-center items-center font-mono text-pink-500 p-6">
            <ErrorSvg />
            <h1 className="h1 text-3xl">{statusCode}</h1>
            <p>{message}</p>
        </div>
    )
}

const ErrorSvg: FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="fill-pink-500">
            <path d="m23.341,9.48l-3.501-6c-.893-1.53-2.547-2.48-4.318-2.48h-7.071c-1.771,0-3.426.951-4.319,2.48L.631,9.48c-.906,1.554-.906,3.485,0,5.039l3.501,6c.893,1.53,2.547,2.48,4.318,2.48h7.071c1.771,0,3.426-.951,4.319-2.48l3.5-6c.906-1.554.906-3.485,0-5.039Zm-1.729,4.031l-3.499,6c-.536.918-1.529,1.488-2.592,1.488h-7.071c-1.062,0-2.056-.57-2.591-1.488l-3.5-6c-.544-.933-.544-2.091,0-3.023l3.499-6c.536-.918,1.529-1.488,2.592-1.488h7.071c1.062,0,2.056.57,2.591,1.488l3.5,6c.544.933.544,2.091,0,3.023Zm-5.905-3.805l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z"/>
        </svg>
    )
}