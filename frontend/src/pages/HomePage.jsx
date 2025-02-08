import ChatCOntainer from "../components/ChatCOntainer";
import NoChatSelected from "../components/NoChatSelected";
import Sidedbar from "../components/Sidedbar";
import { useChatStore } from "../store/useChatStore"

const HomePage = () => {
  const {setlectedUser} = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            {/* sidebar */}
            <Sidedbar />

            {!setlectedUser ? <NoChatSelected /> : <ChatCOntainer />}

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage