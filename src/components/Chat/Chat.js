import React, { useState, useEffect } from 'react';
import queryString from 'query-string' 
import io from 'socket.io-client'
import { useLocation } from "react-router-dom";

let socket;

const Chat = () => {
    const location = useLocation();
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io('http://localhost:5000/')
        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, (error) => {
            console.log("error===>", error)
        })

        console.log("socket=============>", socket)

        return(() => {
            socket.emit('disconnect')
            socket.off()
        })
    }, [location.search])

    return (<h1>Chat</h1>)
}

export default Chat;