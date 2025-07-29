import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Badge,
  Button,
  Drawer,
  Grid,
  theme as antdTheme,
} from 'antd';
import {
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  DashboardOutlined,
  BellOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const AdminLayout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();
  const screens = useBreakpoint();
  const {
    token: { colorBgContainer },
  } = antdTheme.useToken();

  const isMobile = !screens.lg;
  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/admin/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/admin/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        <Link to="/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    {
      key: '/admin',
      icon: <DashboardOutlined />,
      label: <Link to="/admin">Dashboard</Link>,
    },
    {
      key: '/admin/users',
      icon: <UserSwitchOutlined />,
      label: <Link to="/admin/users">User Management</Link>,
    },
    {
      key: '/admin/reports',
      icon: <FileTextOutlined />,
      label: <Link to="/admin/reports">Reports</Link>,
    },
    {
      key: '/admin/settings',
      icon: <SettingOutlined />,
      label: <Link to="/admin/settings">Settings</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Drawer Sidebar (Mobile) */}
      <Drawer
        title="💖 Serendate Admin"
        placement="left"
        onClose={toggleDrawer}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        className="!p-0"
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={toggleDrawer}
          className="border-none"
        />
      </Drawer>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header className="bg-white px-6 flex justify-between items-center shadow sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
              className="text-xl"
            />
            <h2 className="m-0 text-2xl font-semibold text-pink-500">
              Admin Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <Badge count={3}>
              <Button
                type="text"
                icon={<BellOutlined />}
                className="text-xl text-gray-600"
              />
            </Badge>

            <Dropdown overlay={userMenu} placement="bottomRight" trigger={['click']}>
              <div className="group flex items-center cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100 transition">
                <Avatar
                  size={36}
                  icon={<UserOutlined />}
                  className="bg-gradient-to-br from-pink-500 to-purple-500 mr-2"
                />
                {!isMobile && (
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">
                      Admin User
                    </span>
                    <span className="text-xs text-gray-500">
                      admin@serendate.com
                    </span>
                  </div>
                )}
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Main Content */}
        <Content
          className="m-6 p-8 bg-white rounded-lg shadow min-h-[calc(100vh-112px)]"
          style={{ background: colorBgContainer }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
