import { useApiChats } from "../services/whatsapp.service";

export default function Home() {
    const {chats, loading, error} = useApiChats();
    console.log({chats, loading, error})
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>
    return (
        <div>
            {
                chats!.notArchived.map((chat: any) => {
                    return (
                        <div>
                            <h1>{chat.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}