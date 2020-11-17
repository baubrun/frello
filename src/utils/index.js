import { useRef, useEffect } from "react"


export const useFocus = () => {
    const ref = null

    useEffect(() => {
        ref.current.focus()
    })
    return ref
}

export const findByIndex = (items, id) => {
    return items.findIndex((item) => item.id === id)
}


