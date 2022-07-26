import './AllChats.css';
import { FiChevronDown } from 'react-icons/fi';
import { HiPlus } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { TbPhoto } from 'react-icons/tb';
import TitleImage from "../../../../assets/images/24.png";
import { useState } from 'react';

const data = [
    {
        name: 'Tushar Biswas',
        id: 1,
        profileImage: TitleImage,
        message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
        active: true,
        messageType: "writes",
        messageTypeExp: ".-.",
        messageCount: 2,
        messageTime: new Date((new Date()).getTime() - 10 * 60 * 1000)
    },
    {
        name: 'Tufan Biswas',
        id: 2,
        profileImage: TitleImage,
        message: "Voice message (01:15)",
        active: true,
        messageType: "records voice message",
        messageTypeExp: ".-.",
        messageCount: 2,
        messageTime: new Date((new Date()).getTime() - 10 * 60 * 1000),
        file: "File",
        fileCount: 2,
        photo: "Photo",
        photoCount: 2
    },
    {
        name: 'Tarun Biswas',
        id: 3,
        profileImage: TitleImage,
        message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
        active: false,
        lastActive: "last online 5 hours ago",
        messageType: "writes",
        messageTypeExp: ".-.",
        messageCount: 2,
        messageTime: new Date((new Date()).getTime() - 10 * 60 * 1000)
    },
]


const AllChats = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedPerson, setClickedPerson] = useState();

    const chatOnclick = (id) => {
        setIsClicked(true);
        setClickedPerson(id)

    }
    return (
        <section className="AllChats">
            <div className="allchat-head">
                <div className="main-head">
                    <h1>Chats</h1>
                    <h4>Recent Chats <FiChevronDown className="main-head-arrow" /></h4>
                </div>
                <div className="btn allchat-head-btn"><HiPlus className="allchat-head-icon" />Create New Chat</div>
            </div>
            <div className="allchat-searchbar">
                <div className="allchat-search">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search" className="search" />
                </div>
                <div className="allchat-search-option">
                    <select name="chat-option" id="chat-option" className="options">
                        <option value="messages" selected>Messages</option>
                        <option value="demo">Demon</option>
                    </select>
                </div>
            </div>
            {data.map(person => (
                <div className={`single-chat ${isClicked && clickedPerson === person.id ? "single-chat-active" : ""}`} key={person.id} onClick={() => chatOnclick(person.id)}>
                    <div className="single-chat-header">
                        <div className="single-chat-head">

                            <div className={`active-icon ${person.active ? 'active-icon-active' : ""}`}></div>

                            <img src={person.profileImage} alt={person.name} />
                            <div className="info">
                                <h4 className="title">{person.name}</h4>
                                {person.active ?
                                    <p className="message-type"><span>{person.messageTypeExp}</span>{person.messageType}</p>
                                    :
                                    <p className="lastActive">
                                        last online 5 hours ago
                                    </p>
                                }
                            </div>
                        </div>
                        <p className="time">{new Date(Date.now() - person.messageTime).getMinutes()} min ago</p>
                    </div>
                    <div className="message">
                        <p> {person.messageType === "records voice message" ? <BiMicrophone className="single-chat-icon" /> : null}  {person.message}</p>
                        <div className="alert">{person.messageCount}</div>
                    </div>
                    <div className="single-chat-footer">
                        {person.file && <div className="file"><TbPhoto className="single-chat-icon" />{person.file + (person.fileCount !== 0 ? '(x' + person.fileCount + ')' : '')}</div>
                        }
                        {person.photo && <div className="photo"><AiOutlineFileText className="single-chat-icon" />{person.photo + (person.photoCount !== 0 ? '(x' + person.photoCount + ')' : '')}</div>
                        }
                    </div>
                </div>
            ))}
        </section>
    );
}

export default AllChats;