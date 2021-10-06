import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../../store/context/auth'
import { supabase } from '../../utils/supabase'

const index = () => {
    const {auth, dispatch} = useAuth()
    const router = useRouter()
    useEffect(() => {
        const session = supabase.auth.session()
        console.log({ session })
        if(!session){
            router.push("/dashboard/login")
        }
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default index
