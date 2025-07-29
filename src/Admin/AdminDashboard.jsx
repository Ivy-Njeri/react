import React, { useState } from 'react';
import {
  Input,
  Table,
  Tag,
  Button,
  Tooltip,
  message,
  Card,
  Typography,
} from 'antd';
import {
  DeleteOutlined,
  StopOutlined,
  CheckCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import AdminLayout from './AdminLayout';

const { Search } = Input;
const { Title, Text } = Typography;

const dummyUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', status: 'active' },
  { id: 2, name: 'John Smith', email: 'john@example.com', status: 'banned' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'active' },
  { id: 4, name: 'Bob Lee', email: 'bob@example.com', status: 'banned' },
];

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [users, setUsers] = useState(dummyUsers);

  const handleBanToggle = (id) => {
    setUsers(users.map(u =>
      u.id === id ? { ...u, status: u.status === 'active' ? 'banned' : 'active' } : u
    ));
    message.success('User status updated');
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
      message.success('User deleted');
    }
  };

  const filteredUsers = users.filter(u => {
    const byName = u.name.toLowerCase().includes(searchQuery.toLowerCase());
    const byStatus = filterStatus === 'all' || u.status === filterStatus;
    return byName && byStatus;
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: text => (
        <Title level={5} className="mb-0 text-gray-800">
          {text}
        </Title>
      ),
    },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Banned', value: 'banned' },
      ],
      filteredValue: filterStatus === 'all' ? null : [filterStatus],
      onFilter: (val, rec) => rec.status === val,
      render: status => (
        <Tag
          className="uppercase font-semibold"
          color={status === 'active' ? 'green' : 'red'}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, rec) => (
        <div className="flex space-x-2">
          <Tooltip title={rec.status === 'active' ? 'Ban' : 'Unban'}>
            <Button
              icon={rec.status === 'active' ? <StopOutlined /> : <CheckCircleOutlined />}
              type={rec.status === 'active' ? 'primary' : 'default'}
              danger={rec.status === 'active'}
              onClick={() => handleBanToggle(rec.id)}
              className="px-3"
            >
              {rec.status === 'active' ? 'Ban' : 'Unban'}
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => handleDeleteUser(rec.id)}
              className="px-3"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      {/* Header inside content area */}
      <div className="bg-white border-b border-gray-200 p-6 rounded-t-lg">
        <Title level={4} className="text-purple-700 m-0">
          Admin User Management
        </Title>
        <Text type="secondary">Manage your Serendate community</Text>
      </div>

      {/* Controls and Table */}
      <div className="m-6 flex flex-col gap-6 bg-white rounded-b-lg shadow p-6">
        <div className="flex flex-wrap items-center gap-4">
          <Search
            placeholder="Search by name…"
            allowClear
            enterButton={<SearchOutlined />}
            size="middle"
            onChange={e => setSearchQuery(e.target.value)}
            className="max-w-xs"
          />
          <div className="flex space-x-2">
            {['all', 'active', 'banned'].map(status => (
              <Button
                key={status}
                type={filterStatus === status ? 'primary' : 'default'}
                onClick={() => setFilterStatus(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        <Card bordered={false} bodyStyle={{ padding: 0 }} className="overflow-hidden">
          <Table
            columns={columns}
            dataSource={filteredUsers}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
