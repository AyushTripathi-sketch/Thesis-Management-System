import {
    FileOutlined,
    TeamOutlined,
    AppstoreOutlined,
    HomeOutlined,
    UserOutlined,
    DesktopOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/sp/home",
        path:"/sp/home",
        icon:<HomeOutlined />,
        name:"Home",
        children:null,
    },
    {
        key:"/sp/profile",
        path:"/sp/profile",
        icon:<UserOutlined />,
        name:"My profile",
        children:null,
    },
    {
        key:"/sp/mygroupoverview",
        path:"/sp/mygroupoverview",
        icon:<TeamOutlined />,
        name:"My Group",
        children:null,
    },
    {
        key:"/sp/myproject",
        path:"/sp/myproject",
        icon:<DesktopOutlined />,
        name:"My Project",
        children:null,
    },
    {
        key:"/sp/thesis",
        path:"/sp/thesis",
        icon:<FileOutlined/>,
        name:"Submitted Thesis",
        children:null
    },
    {
        key:"sub1",
        icon:<AppstoreOutlined/>,
        name:"More",
        children:[
            {
                key:"/sp/ce",
                path:"/sp/ce",
                name:"Comprehensive Examination",
            },
            {
                key:"/sp/rps",
                path:"/sp/rps",
                name:"Research Proposal Seminar",
            },
        ]
    }
]

export default menu;