import { useEffect, useState } from 'react';
import { useAuth } from './../../../context/AuthContext';
const useSocketOn = () => {

    const { socket } = useAuth();

    const [listen, setListen] = useState(listListenOn);

    useEffect(() => {
        listen.forEach((item) => {
            socket.on(item.name, item.callback);
        });
    })

    return { listen, setListen };

}

export default useSocketOn;

const listListenOn = [
    {
        name: 'whatsapp_authenticated',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_disconnected',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_received'
    },
    {
        name: 'whatsapp_message_sent',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_ack',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_revoke_for_everyone',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_revoke_for_me',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_group_join',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_group_leave',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_group_update',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_message_call',
        callback: (data: any) => console.log(data)
    },
    {
        name: 'whatsapp_state',
        callback: (data: any) => console.log(data)
    },

]
