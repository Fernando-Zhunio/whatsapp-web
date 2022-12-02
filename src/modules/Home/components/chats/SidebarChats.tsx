import { ChatOrGroupChat } from "../../interfaces/Chat";

const SidebarChats = ({ chats }: { chats: ChatOrGroupChat[] }) => {
    return (
        <div>
            <div>

            </div>
            <div>
                {chats.map((chat) => {
                    return (
                        <div className="bg-white px-4 py-5 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">{chat.name}</dt>
                            <small className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{chat.timestamp}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SidebarChats;