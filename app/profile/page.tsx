"use client"
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'vendor' | 'admin';
  location: string;
  phone: string;
  avatar: string;
}

interface Order {
  id: number;
  product: string;
  status: string;
  amount: number;
  date: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface PlatformUser {
  id: number;
  name: string;
  role: 'user' | 'vendor' | 'admin';
  status: 'active' | 'pending' | 'banned';
}

const dummyUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  location: 'Nairobi',
  phone: '+254712345678',
  avatar: 'https://via.placeholder.com/150'
};

const dummyOrders: Order[] = [
  {
    id: 1,
    product: "Wireless Headphones Pro",
    status: "delivered",
    amount: 299.99,
    date: "2024-03-10"
  },
  {
    id: 2,
    product: "Leather Laptop Bag",
    status: "pending",
    amount: 149.50,
    date: "2024-03-12"
  },
  {
    id: 3,
    product: "Smart Watch Series 5",
    status: "cancelled",
    amount: 199.99,
    date: "2024-03-15"
  },
  {
    id: 4,
    product: "Noise Cancelling Earbuds",
    status: "shipped",
    amount: 179.95,
    date: "2024-03-18"
  }
];

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Premium Bluetooth Speaker",
    price: 129.99,
    stock: 25
  },
  {
    id: 2,
    name: "Wireless Charging Pad",
    price: 49.99,
    stock: 50
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 299.95,
    stock: 10
  },
  {
    id: 4,
    name: "4K Webcam with Mic",
    price: 89.99,
    stock: 35
  }
];

const dummyUsers: PlatformUser[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "user",
    status: "active"
  },
  {
    id: 2,
    name: "TechGadgets Ltd",
    role: "vendor",
    status: "pending"
  },
  {
    id: 3,
    name: "Admin User",
    role: "admin",
    status: "active"
  },
  {
    id: 4,
    name: "DesignHub Collective",
    role: "vendor",
    status: "banned"
  },
  {
    id: 5,
    name: "Mike Chen",
    role: "user",
    status: "active"
  },
  {
    id: 6,
    name: "Fake Store",
    role: "vendor",
    status: "pending"
  }
];

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState<User>(dummyUser);
  const [activeTab, setActiveTab] = useState('overview');
  const [showEditModal, setShowEditModal] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const renderRoleContent = () => {
    switch(currentUser.role) {
      case 'user':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0f1c47] mb-4">My Orders</h3>
              {dummyOrders.map(order => (
                <div key={order.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-[#0f1c47] font-medium">{order.product}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-[#bf2c7e]/10 text-[#bf2c7e]'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0f1c47] mb-4">Investment Portfolio</h3>
              {/* Investment content */}
            </div>
          </div>
        );
        
      case 'vendor':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
              <h3 className="text-xl font-semibold text-[#0f1c47] mb-4">Product Management</h3>
              <div className="space-y-4">
                {dummyProducts.map(product => (
                  <div key={product.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-[#0f1c47] font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                    </div>
                    <p className="text-[#bf2c7e] font-semibold">Ksh {product.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0f1c47] mb-4">Sales Dashboard</h3>
              {/* Sales metrics */}
            </div>
          </div>
        );

      case 'admin':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#0f1c47] mb-4">User Management</h3>
            <div className="space-y-4">
              {dummyUsers.map(user => (
                <div key={user.id} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-[#0f1c47] font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 
                    user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-[#0f1c47] py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img 
              src={currentUser.avatar} 
              className="w-24 h-24 rounded-full border-4 border-[#bf2c7e]" 
              alt="Profile" 
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">{currentUser.name}</h1>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#bf2c7e] text-white text-sm">
                  {currentUser.role}
                </span>
                <button 
                  onClick={() => setShowEditModal(true)}
                  className="text-white hover:text-[#bf2c7e] transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-8 border-b border-gray-200">
          {['overview', 'financial', 'activity', 'security'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === tab 
                  ? 'border-b-2 border-[#bf2c7e] text-[#bf2c7e]' 
                  : 'text-[#0f1c47] hover:text-[#bf2c7e]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Role-Specific Content */}
        {renderRoleContent()}

        {/* Security Settings */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-[#0f1c47] mb-6">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="text-[#0f1c47] font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <button 
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`w-12 h-6 rounded-full p-1 ${twoFactorEnabled ? 'bg-[#bf2c7e]' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                  twoFactorEnabled ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="container mx-auto p-4 h-full flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#0f1c47]">Edit Profile</h2>
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-500 hover:text-[#bf2c7e]"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0f1c47] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    defaultValue={currentUser.name}
                  />
                </div>
                <button className="w-full bg-[#bf2c7e] text-white py-3 rounded-lg hover:bg-opacity-90">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}