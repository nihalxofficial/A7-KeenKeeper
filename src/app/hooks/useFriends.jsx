"use client"
import { useEffect, useState } from "react";

const useFriends = () => {


    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json()
            setFriends(data)
            setLoading(false)
        }
        fetchData()
    },[])
    
    return {friends, loading}

};

export default useFriends;