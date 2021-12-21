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
        key:"/ad/home",
        path:"/ad/home",
        icon:<HomeOutlined />,
        name:"Home",
        children:null,
    },
    {
        key:"/ad/dashboard",
        path:"/ad/dashboard",
        icon:<DashboardOutlined />,
        name:"Dashboard",
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
        name:"Add New",
        children:[
            {
                key:"/ad/add_new/scholar",
                path:"/ad/add_new/scholar",
                name:"Add Scholar",
            },
            {
                key:"/ad/add_new/supervisor",
                path:"/ad/add_new/supervisor",
                name:"Add Supervisor",
            },
            {
                key:"/ad/add_new/examiner",
                path:"/ad/add_new/examiner",
                name:"Add Examiner",
            }
        ]
    }
]

export default menu;