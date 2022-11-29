import axios from "axios";
import { useEffect, useState } from "react";
import { environment } from "../environment/environment";
import { Chat, ChatOrGroupChat, GroupChat } from "../modules/Chats/interfaces/chat";
import { Response } from "../modules/interfaces/Response";


export function useApiChats() {
    const [chats, setChats] = useState<{archived: ChatOrGroupChat[], notArchived:ChatOrGroupChat[]}>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get(environment.serverApi+'/chats');
                console.log(response);
                separeChatsArchived(response.data.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        console.log('fetching chats');
        fetchChats();
    }, []);

   function separeChatsArchived(chats: ChatOrGroupChat[]) {
       setChats(() => {
          return chats.reduce((acc: any, chat) => {
               if (chat.archived) {
                   acc.archived.push(chat);
               } else {
                   acc.notArchived.push(chat);
               }
               return acc;
           }, {archived: [], notArchived: []});
    }) 
   }

    return { chats, loading, error };
}