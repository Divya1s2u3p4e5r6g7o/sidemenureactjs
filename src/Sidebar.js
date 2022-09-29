import React,{useState} from 'react';
import './Sidebar.css';
import FolderIcon from '@mui/icons-material/Folder';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { GiProgression } from "react-icons/gi";
import {  FaAngleRight } from "react-icons/fa";
const Sidebar = ({sidebar}) => {
    const sidebarCollapsed =localStorage.getItem('sidebarCollapsed');
    const [isExpanded,setIsExpanded] =useState(sidebarCollapsed ? false :true);

    const handleToggler =() =>{
        if(isExpanded){
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed',true)
            return ;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-collapsed');
    }
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>

    <div className= {isExpanded ? "Sidebar" : "Sidebar collapsed"}>
        <div className='sidebar-header'>
        <FaAngleRight
  className="sidebar-icon"
  onClick={handleToggler}
/>
            <h1 className="sidebar-logo">Close</h1>
        </div>
        <div className='sidebar-items'>
            <div className="item">
      <FolderIcon className='sidebar-icon'/><span className='sidebar-text'>Teaching Packages</span></div>
      <div className="item"> <PermMediaIcon className='sidebar-icon'/><span className='sidebar-text'>Content Bank</span></div> 
      <div className="item">  <FactCheckIcon className='sidebar-icon'/><span className='sidebar-text'>Quiz Results</span></div>
      <div className="item"> <EmojiEventsIcon className='sidebar-icon'/><span className='sidebar-text'>Leaderboard</span></div>
      <div className="item"> <GiProgression className='sidebar-icon'/><span className='sidebar-text'>Lesson Progress</span></div>
      <div className="item"> <ManageAccountsIcon className='sidebar-icon'/><span className='sidebar-text'>Management</span></div>
        </div>
    </div>
</div>  )
}

export default Sidebar
