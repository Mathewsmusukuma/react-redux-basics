import { Layout, Menu} from 'antd';

const { Header, Content } = Layout;

 
 export default function AppLayout({children}) {
     return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        
          </Menu>
        </Header>
        <Content>
          <div className="content">{children}</div>
        </Content>
      </Layout>
     )
 }
 