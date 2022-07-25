import './Union.css';
import Hero from '../../../assets/images/34.png';
import { TbLayoutGrid } from 'react-icons/tb';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { RiCalendarTodoLine, RiSettings5Line } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import { IoPowerSharp } from 'react-icons/io5';

const Union = () => {
    return (
        <nav className="navigation">
            <div className="nav-head">
                <img src={Hero} alt="Hero" className="nav-image" />
                <h4 className="nav-title">Henry Jabbawockiez <FiChevronDown className="nav-title-arrow" /></h4>
            </div>
            <div className="nav">
                <div className="nav-item"><TbLayoutGrid className="nav-icon" />HOME</div>
                <div className="nav-item active"><BsFillChatDotsFill className="nav-icon" />CHAT</div>
                <div className="nav-item"><BiUser className="nav-icon" />CONTACT</div>
                <div className="nav-item"><VscBell className="nav-icon" />NOTIFICATIONS</div>
                <div className="nav-item"><RiCalendarTodoLine className="nav-icon" />CALENDER</div>
                <div className="nav-item"><RiSettings5Line className="nav-icon" />SETTING</div>
            </div>
            <div className="nav-footer">
                <div className="nav-item"><IoPowerSharp className="nav-icon" />LOG OUT</div>
            </div>
        </nav>
    );
}

export default Union;