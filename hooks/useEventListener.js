import { useRef, useEffect, useLayoutEffect } from "react"

export default function useEventListener(eventType, cb, element = window){
    
    const cbRef = useRef(cb)
    useEffect(() => {
        cbRef.current = cb;
    }, [cb])

    useEffect(() => {
        if(!element) return;
        const handler = event => cbRef.current(event);
        element?.addEventListener(eventType, handler)

        return () => element?.removeEventListener(eventType, handler)
    }, [eventType, element])
}