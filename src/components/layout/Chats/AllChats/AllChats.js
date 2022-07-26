import './AllChats.css';
import { FiChevronDown } from 'react-icons/fi';
import { HiPlus } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import TitleImage from "../../../../assets/images/24.png";

const AllChats = () => {
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
            <div className="single-chat">
                <div className="single-chat-header">
                    <div className="single-chat-head">
                        <div className={"active-icon"}></div>
                        <img src={TitleImage} alt="Luy Robin" />
                        <div className="info">
                            <h4 className="title">Luy Robin</h4>
                            <p className="message-type"><span>{":-)"}</span>writes</p>
                        </div>
                    </div>
                    <p className="time">1 min ago</p>
                </div>
                <div className="message">
                    <p>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>
                    <div className="alert">{2}</div>
                </div>
            </div>
        </section>
    );
}

export default AllChats;