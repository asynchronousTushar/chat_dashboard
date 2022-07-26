import './Chats.css';
import Chat from './Chat/Chat';
import AllChats from './AllChats/AllChats';

const Chats = () => {
    return (
        <section className="chats">
            <AllChats />
            <Chat />
        </section>
    );
}

export default Chats;