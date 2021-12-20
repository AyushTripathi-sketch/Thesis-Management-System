import {
    UnorderedListOutlined,
    CalendarOutlined,
    FolderViewOutlined,
    HomeOutlined,
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
        key:"/ad/home",
        path:"/ad/home",
        icon:<HomeOutlined />,
        name:"Home",
        children:null,
    },
    {
        key:"/ad/profile",
        path:"/ad/profile",
        icon:<UserOutlined />,
        name:"Profile",
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
        key:"/ad/create-new",
        path:"/ad/create-new",
        icon:<PlusCircleOutlined />,
        name:"Create New",
        children:[
            {
                key:"/ad/addscholar",
                path:"/ad/addscholar",
                name:"Add Scholar",
            },
            {
                key:"/ad/addsupervisor",
                path:"/ad/addsupervisor",
                name:"Add Supervisor",
            },
            {
                key:"/ad/addexaminer",
                path:"/ad/addexaminer",
                name:"Add Examiner",
            }
        ]
    }
]

export default menu;