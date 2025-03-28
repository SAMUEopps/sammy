"use client"
import TopNavModified from '@/components/TopNavModified';
import { FC, useState } from 'react';

// Dummy data generators
const categories = ['Fashion', 'Electronics', 'Food', 'Home Goods', 'Art'];
const shops = [...Array(9)].map((_, i) => ({
  id: i,
  name: `Shop ${i + 1}`,
  category: categories[i % 5],
  rating: (4 + Math.random()).toFixed(1),
  products: Math.floor(Math.random() * 100),
  description: `Specializing in ${categories[i % 5]} products and services`,
  owner: `Owner ${i + 1}`,
  social: ['twitter', 'instagram'],
  isFeatured: i < 2,
}));

const ShopsPage: FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFollowing, setIsFollowing] = useState<{[key: number]: boolean}>({});

  return (
    <div className="min-h-screen bg-white">
       <TopNavModified menuItems={["Create Shop"]} />
      {/* Search & Filter Section */}
      <section className="bg-gray-50 bg-opacity-60 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Search shops..." 
              className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bf2c7e]"
            />
            <div className="flex gap-2">
              <button className="bg-[#bf2c7e] text-white px-4 py-2 rounded-lg">Filter</button>
              <button 
                onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
                className="bg-[#0f1c47] text-white px-4 py-2 rounded-lg"
              >
                {viewMode === 'grid' ? 'List View' : 'Grid View'}
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button 
                key={category}
                className="px-4 py-2 bg-white border border-[#0f1c47] rounded-full hover:bg-[#bf2c7e] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0f1c47]">Featured Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shops.filter(s => s.isFeatured).map(shop => (
              <div key={shop.id} className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#bf2c7e]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-[#0f1c47] font-bold">{shop.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f1c47]">{shop.name}</h3>
                    <p className="text-gray-600">{shop.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{shop.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[#bf2c7e]">★ {shop.rating}</span>
                    <span className="ml-4 text-gray-600">{shop.products} products</span>
                  </div>
                  <button className="bg-[#0f1c47] text-white px-4 py-2 rounded-lg">
                    Visit Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="py-12 px-4 bg-gray-50 bg-opacity-60">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0f1c47]">All Shops</h2>
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {shops.map(shop => (
              <div key={shop.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f1c47]">{shop.name}</h3>
                    <p className="text-gray-600">{shop.category}</p>
                  </div>
                  <span className="text-[#bf2c7e] bg-[#bf2c7e]/10 px-2 py-1 rounded">Sponsored</span>
                </div>
                
                <p className="text-gray-600 mb-4">{shop.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[#bf2c7e]">★ {shop.rating}</span>
                    <span className="ml-4 text-gray-600">{shop.products} products</span>
                  </div>
                  <button 
                    onClick={() => setIsFollowing(prev => ({...prev, [shop.id]: !prev[shop.id]}))}
                    className={`px-4 py-2 rounded-lg ${
                      isFollowing[shop.id] 
                        ? 'bg-[#0f1c47] text-white' 
                        : 'bg-[#bf2c7e] text-white'
                    }`}
                  >
                    {isFollowing[shop.id] ? 'Following' : 'Follow'}
                  </button>
                </div>

                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-2">Owner: {shop.owner}</p>
                  <div className="flex gap-2">
                    {shop.social.map(platform => (
                      <button key={platform} className="text-[#0f1c47] hover:text-[#bf2c7e]">
                        {platform === 'twitter' ? '𝕏' : '📸'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0f1c47]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Selling?</h2>
          <p className="text-gray-200 mb-8">Join our community of successful vendors</p>
          <button className="bg-[#bf2c7e] text-white px-8 py-4 rounded-lg text-lg hover:bg-opacity-90">
            Start Your Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopsPage;