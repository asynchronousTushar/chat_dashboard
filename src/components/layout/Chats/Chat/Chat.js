import './Chat.css';
import TitleImage from '../../../../assets/images/24.png';
import { RiAttachment2 } from 'react-icons/ri';
import { FiMoreHorizontal, FiMoreVertical, FiImage, FiSmile } from 'react-icons/fi';
import { IoCheckmarkDoneOutline, IoNavigate } from 'react-icons/io5';
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';

const data = [
    {
        name: 'Tushar Biswas',
        id: 1,
        profileImage: TitleImage,
        message: ["Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes)."],
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

const Chat = () => {
    return (
        <section className="chat">
            <div className="chat-head">
                <div className="user-info">
                    <div className={`active-icon ${data[0].active ? 'active-icon-active' : ""}`}></div>

                    <img src={data[0].profileImage} alt={data[0].name} />
                    <div className="info">
                        <h4 className="title">{data[0].name}</h4>
                        {data[0].active ?
                            <p className="message-type"><span>{data[0].messageTypeExp}</span>{data[0].messageType}</p>
                            :
                            <p className="lastActive">
                                last online 5 hours ago
                            </p>
                        }
                    </div>
                </div>
                <div className="chat-meta">
                    <div className="chat-meta-icon">
                        <RiAttachment2 />
                    </div>
                    <div className="chat-meta-icon">
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
            <div className="chat-body">

                {/* ============incoming message=========== */}
                <div className="incoming-message-container">
                    <div className="profile">
                        <img src={data[0].profileImage} alt={data[0].name} className="profile-img" />
                    </div>
                    <div className="incoming-message">
                        <div className="incoming-message-header">
                            <div className="incoming-message-card">
                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                            </div>
                            <FiMoreHorizontal className="before-message-icon" />
                        </div>
                        <div className="incoming-message-header">
                            <div className="incoming-message-card">
                                Can I send you files?
                            </div>
                            <FiMoreHorizontal className="before-message-icon" />
                        </div>
                        <p>4 days ago</p>
                    </div>
                </div>

                {/* ========== outgoing message========== */}
                <div className="outgoing-message-container">
                    <div className="outgoing-message-header">
                        <FiMoreHorizontal className="before-message-icon" />
                        <div className="outgoing-message-card">
                            Hey! Okay, send out.
                        </div>
                        <IoCheckmarkDoneOutline className="before-message-icon" />
                    </div>
                    <p>4 days ago</p>
                </div>

                {/* ============ incoming message =============== */}
                <div className="incoming-message-container">
                    <div className="profile">
                        <img src={data[0].profileImage} alt={data[0].name} />
                    </div>
                    <div className="incoming-message">
                        <div className="incoming-message-header">
                            <div className="incoming-message-card">
                                <div className="card-icon-container">
                                    <AiOutlineFile className="card-icon" />
                                </div>
                                <div className="file-info">
                                    <h5>Style.zip</h5>
                                    <p>41.36 MB</p>
                                </div>
                            </div>
                            <FiMoreHorizontal className="before-message-icon" />
                        </div>
                        <p className="second-message-time">4 days ago</p>
                    </div>
                </div>

                <p className="hr">3 days ago</p>

                {/* ================== outgoing message ===================== */}
                <div className="outgoing-message-container">
                    <div className="outgoing-message-header">
                        <FiMoreHorizontal className="before-message-icon" />
                        <div className="outgoing-message-card">
                            <div className="message">
                                Hello! I tweaked everything you asked. I am sending the finished file.
                            </div>
                            <div className="file-info">
                                <h5>(52.05 Mb) New_Style.zip</h5>
                                <AiOutlineFile className="card-icon" />
                            </div>
                        </div>
                        <MdOutlineDone className="before-message-icon" />
                    </div>
                    <p>3 days ago</p>
                </div>
            </div>
            <div className="chat-footer">
                <div className="left-icons">
                    <TbMovie className="chat-footer-icon" />
                    <FiImage className="chat-footer-icon" />
                    <AiOutlineFile className="chat-footer-icon" />
                    <AiOutlinePlus className="chat-footer-icon" />
                </div>
                <input type="text" placeholder="Type a message here" />
                <div className="right-icons">
                    <FiSmile className="chat-footer-icon" />
                    <IoNavigate className="chat-footer-icon" />
                </div>
                <div className="message-line"></div>
            </div>

        </section>
    );
}

export default Chat;