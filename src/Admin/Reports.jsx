import React from 'react';
import {
  Layout,
  Menu,
  Typography,
  Card,
  Table,
} from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const dummyReports = [
  {
    id: 1,
    type: 'Abuse',
    reporter: 'Emily Jane',
    reportedUser: 'John Smith',
    status: 'Pending',
    date: '2025-07-28',
  },
  {
    id: 2,
    type: 'Fake Profile',
    reporter: 'Alice Doe',
    reportedUser: 'Mark Lee',
    status: 'Resolved',
    date: '2025-07-27',
  },
  {
    id: 3,
    type: 'Spam',
    reporter: 'Sarah Blake',
    reportedUser: 'Peter Pan',
    status: 'Pending',
    date: '2025-07-26',
  },
];

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Reporter',
    dataIndex: 'reporter',
    key: 'reporter',
  },
  {
    title: 'Reported User',
    dataIndex: 'reportedUser',
    key: 'reportedUser',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
        }`}
      >
        {status}
      </span>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const Reports = () => {
  return (
      <AdminLayout>
        <div className="bg-white border-b border-gray-200 p-6">
          <Title level={4} className="text-purple-700 m-0">
            User Reports
          </Title>
          <Text type="secondary">Manage and review community reports</Text>
        </div>

        {/* Table Section */}
        <Content className="m-6 flex flex-col gap-6">
          <Card bordered={false} bodyStyle={{ padding: 0 }}>
            <Table
              columns={columns}
              dataSource={dummyReports}
              rowKey="id"
              pagination={{ pageSize: 5 }}
              className="overflow-hidden"
            />
          </Card>
        </Content>
      </AdminLayout>

  );
};

export default Reports;
