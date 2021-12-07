import React from 'react'
import { Layout} from 'antd';
import "antd/dist/antd.css";
import { MyProjectNav } from '../../components';
const {Content} = Layout;

function Final(){
    return (
          <Content style={{ margin: '25px 25px'}}>
          <MyProjectNav />
          <div>
          </div>
          </Content>
    )
}

export default Final;