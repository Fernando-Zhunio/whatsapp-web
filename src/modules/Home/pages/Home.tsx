import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { methodGet } from "../../../shared/services/methodsHttp.service";
import useSocketOn from "../class/SocketOn";
import SidebarChats from "../components/chats/SidebarChats";
import { ChatOrGroupChat } from "../interfaces/Chat";

const Home = () => {
    const [chats, setChats] = useState<ChatOrGroupChat[]>([]);
    const { listen } = useSocketOn();

    useEffect(() => {
        methodGet<{data:ChatOrGroupChat[]}>('/chats').then((res) => {
            setChats(res.data);
        })
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 w-full">
                <SidebarChats chats={chats}></SidebarChats>
                <div className="col-span-3">
            
                </div>
            </div>
        </div>
    );
}

export default Home;