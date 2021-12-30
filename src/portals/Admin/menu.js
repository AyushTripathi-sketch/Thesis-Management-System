import {
    UnorderedListOutlined,
    CalendarOutlined,
    FolderViewOutlined,
    UserOutlined,
    MailOutlined,
    PlusCircleOutlined,
    DashboardOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/ad/dashboard",
        path:"/ad/dashboard",
        icon:<DashboardOutlined />,
        name:"Dashboard",
        children:null,
    },
    {
        key:"/ad/profile",
        path:"/ad/profile",
        icon:<UserOutlined />,
        name:"My Profile",
        children:null,
    },
    {
        key:"/ad/details",
        path:"/ad/details",
        icon:<DashboardOutlined />,
        name:"Details",
        children:null,
    },
    {
        key:"/ad/calendar",
        path:"/ad/calendar",
        icon:<CalendarOutlined />,
        name:"Calendar",
        children:null,
    },
    {
        key:"/ad/email",
        path:"/ad/email",
        icon:<MailOutlined />,
        name:"Email",
        children:null,
    },
    {
        key:"/ad/tasks",
        path:"/ad/tasks",
        icon:<UnorderedListOutlined />,
        name:"Tasks",
        children:null
    },
    {
        key:"/ad/files",
        path:"/ad/files",
        icon:<FolderViewOutlined />,
        name:"Files",
        children:null
    },
    {
        key:"/ad/add_new",
        path:"/ad/add_new",
        icon:<PlusCircleOutlined />,
        name:"Add New",
        children:null
    }
]

export default menu;
