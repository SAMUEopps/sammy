

import HeroCarousel from '@/components/HeroCarousel';
import ActivitiesList from '@/components/ActivitiesList';
import EventsList from '@/components/EventsList';
import 'swiper/css';
import 'swiper/css/pagination';
import FeaturedShops from '@/components/FeaturedShops';
import ExploreShelves from '@/components/ExploreShelves';
import LatestSkillPosts from '@/components/LatestSkillPosts';
import FinancialSummary from '@/components/FinancialSummary';

// Dummy data for FeaturedShops
const featuredShops = [
  {
    id: 1,
    name: "Tech Haven",
    items: ["Wireless Earbuds Pro", "Smart Home Kit", "4K Webcam"],
    icon: "💻"
  },
  {
    id: 2,
    name: "Urban Threads",
    items: ["Designer Backpacks", "Limited Edition Sneakers", "Organic Cotton Tees"],
    icon: "👕"
  },
  {
    id: 3,
    name: "Green Living",
    items: ["Smart Planters", "Solar Chargers", "Eco Yoga Mats"],
    icon: "🌿"
  }
];

// Dummy data for ExploreShelves
const shelves = [
  { 
    category: 'Tech Innovation', 
    members: 45,
    icon: '🚀',
    description: 'Building the future of technology'
  },
  { 
    category: 'Fashion Collabs', 
    members: 32,
    icon: '👗',
    description: 'Redefining modern fashion trends'
  },
  { 
    category: 'Community Investments', 
    members: 28,
    icon: '🤝',
    description: 'Local community development projects'
  }
];

// Dummy data for LatestSkillPosts
const skills = [
  'Full Stack Development',
  'UI/UX Design',
  'Digital Marketing Strategy',
  '3D Product Modeling',
  'Blockchain Development',
  'AI/ML Engineering'
];

// Dummy data for Financial Summary (static values)
const financialData = {
  walletBalance: 8430.50,
  activeInvestments: 25500.00,
  recentEarnings: 2340.75,
  recentTransactions: [
    { date: '2024-03-15', description: 'Shop Earnings', amount: 1200.00 },
    { date: '2024-03-14', description: 'Shelf Investment', amount: -500.00 },
    { date: '2024-03-13', description: 'Withdrawal', amount: -200.00 }
  ]
};

// Existing activities data
const activities = [
  'Emma launched "Green Living" shop',
  'New investment in Tech Innovation shelf',
  'Alex posted Blockchain Development skill'
];

// Existing events data
const events = [
  'Investor Networking Night',
  'E-commerce Workshop',
  'Sustainability Summit'
];

// Updated dummy data
const categories = [
  { name: 'Electronics', icon: '📱' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Home & Living', icon: '🏠' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Books', icon: '📚' },
];

const products = {
  new: [...Array(5)].map((_, i) => ({
    id: i,
    name: `New Product ${i+1}`,
    price: `Ksh${(99.99 - i*10).toFixed(2)}`,
    shop: `Shop ${i+1}`,
    image: `https://placehold.co/300x200?text=Product+${i+1}`
  })),
  trending: [...Array(5)].map((_, i) => ({
    id: i,
    name: `Trending Item ${i+1}`,
    price: `Ksh${(79.99 - i*8).toFixed(2)}`,
    shop: `Store ${i+1}`,
    image: `https://placehold.co/300x200?text=Trending+${i+1}`
  })),
  discounted: [...Array(5)].map((_, i) => ({
    id: i,
    name: `Sale Item ${i+1}`,
    originalPrice: `$${129.99}`,
    price: `Ksh${(89.99 - i*10).toFixed(2)}`,
    shop: `Outlet ${i+1}`,
    image: `https://placehold.co/300x200?text=Sale+${i+1}`
  }))
};

const brands = [...Array(8)].map((_, i) => ({
  id: i,
  name: `Brand ${i+1}`,
  logo: `https://placehold.co/100x50?text=Brand+${i+1}`
}));

const ads = [
  { id: 1, title: "Summer Sale!", subtitle: "Up to 50% off", image: "https://placehold.co/1200x400?text=Summer+Sale" },
  { id: 2, title: "New Arrivals", subtitle: "Discover latest trends", image: "https://placehold.co/1200x400?text=New+Arrivals" },
  { id: 3, title: "Premium Partners", subtitle: "Shop trusted brands", image: "https://placehold.co/1200x400?text=Premium+Brands" }
];


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Search Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          {/* ... search input remains same ... */}
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search products, shops, categories..."
              className="w-full py-3 pl-12 pr-6 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bf2c7e] focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-4 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Carousel - Add container */}
      <div className="container max-w-7xl mx-auto">
        <HeroCarousel />
      </div>

      
      {/* Categories Scroll */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="flex overflow-x-auto pb-4 gap-8 scrollbar-hide">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="flex flex-col items-center flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2">
                  {category.icon}
                </div>
                <span className="text-gray-700 font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Product Sections */}
    {Object.entries(products).map(([section, items]) => (
        <section key={section} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 capitalize">{section} Products</h2>
            <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
              {items.map((product) => (
                <div 
                  key={product.id}
                  className="w-64 flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-[#bf2c7e] font-bold">{product.price}</span>
                      {section === 'discounted' && (
                        <span className="text-sm text-gray-500 line-through">{product.price}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{product.shop}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

     {/* Brands Section */}
     <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Brands</h2>
          <div className="flex overflow-x-auto pb-4 gap-8 scrollbar-hide">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Components - Add container */}
      <div className="container max-w-7xl mx-auto">
        <FeaturedShops shops={featuredShops} />
        <ExploreShelves shelves={shelves} />
        <LatestSkillPosts skills={skills} />
        <FinancialSummary />
      </div>


      {/* Advertising Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0f1c47] to-[#2d3566] rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Advertise With Us</h2>
            <p className="text-xl mb-6">Reach millions of potential customers</p>
            <button className="bg-[#bf2c7e] hover:bg-[#a8246d] text-white px-8 py-3 rounded-lg">
              Start Advertising
            </button>
          </div>
        </div>
      </section>
 <ActivitiesList />
<EventsList />

      {/* Footer - Add container */}
      <footer className="bg-[#0f1c47] text-white py-16 mt-24">
        {/* ... existing footer content ... */}
              {/* Modern Footer */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Collaborative Commerce</h3>
              <p className="text-gray-300 max-w-md">
                Empowering innovators and creators through community-driven commerce.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#bf2c7e] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            © 2024 Collaborative Commerce. All rights reserved.
          </div>
        </div>
  
      </footer>
    </div>
  );
};

export default HomePage;




{/*"use client"
import { useState } from 'react';

// Dummy data interfaces
interface Product {
  id: number;
  name: string;
  vendor: string;
  price: number;
}

interface Shelf {
  id: number;
  name: string;
  category: string;
  members: number;
}

interface Skill {
  id: number;
  title: string;
  user: string;
  experience: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
}

// Dummy data
// Dummy data
const featuredProducts: Product[] = [
  { id: 1, name: 'Wireless Noise-Canceling Headphones', vendor: 'TechHub Collective', price: 299.99 },
  { id: 2, name: 'Handmade Leather Journal', vendor: 'ArtisanWorks', price: 89.50 },
  { id: 3, name: 'Smart Plant Pot', vendor: 'GreenThumb Tech', price: 149.95 },
  { id: 4, name: 'Vintage Camera Lens', vendor: 'RetroShooters', price: 199.00 },
  { id: 5, name: '3D Printed Lamp', vendor: 'DesignMakers Co-op', price: 129.99 },
  { id: 6, name: 'Organic Cotton Tote', vendor: 'EcoCollaborators', price: 39.99 },
];

const shelves: Shelf[] = [
  { id: 1, name: 'AI Wearables', category: 'Tech Innovation', members: 245 },
  { id: 2, name: 'Sustainable Fashion', category: 'Fashion Collabs', members: 178 },
  { id: 3, name: 'Urban Farming', category: 'Community Investments', members: 432 },
  { id: 4, name: 'AR Gaming', category: 'Tech Innovation', members: 89 },
  { id: 5, name: 'Ethical Jewelry', category: 'Fashion Collabs', members: 156 },
  { id: 6, name: 'Co-Working Spaces', category: 'Community Investments', members: 321 },
];

const skills: Skill[] = [
  { id: 1, title: 'Web Development', user: 'Sarah Johnson', experience: '5+ years' },
  { id: 2, title: '3D Modeling', user: 'Mike Chen', experience: 'Expert' },
  { id: 3, title: 'Digital Marketing', user: 'Aisha Patel', experience: '8+ years' },
  { id: 4, title: 'Product Photography', user: 'David Müller', experience: 'Professional' },
  { id: 5, title: 'Content Writing', user: 'Emma Wilson', experience: 'Native English' },
  { id: 6, title: 'UI/UX Design', user: 'Lucas Silva', experience: 'Figma Specialist' },
];

const events: Event[] = [
  { id: 1, title: 'Startup Funding Workshop', date: '2024-03-15', type: 'Online Event' },
  { id: 2, title: 'Fashion Tech Meetup', date: '2024-03-18', type: 'In-Person' },
  { id: 3, title: 'Sustainable Business Forum', date: '2024-03-20', type: 'Conference' },
  { id: 4, title: 'AI Product Demo Day', date: '2024-03-22', type: 'Online Event' },
  { id: 5, title: 'Artisan Market', date: '2024-03-25', type: 'Pop-Up' },
  { id: 6, title: 'Investor Networking Night', date: '2024-03-28', type: 'Exclusive' },
];

const activities: string[] = [
  'Jessica Lee joined "Sustainable Fashion" shelf',
  'New product "Solar Charger" added by EcoTech Collective',
  'Skill "Blockchain Development" trending in Hub',
  'Marcus Tan invested $1,500 in Urban Farming',
  '"AI Wearables" shelf reached 75% funding goal',
  'New event "Design Thinking Workshop" added',
  'Sophie Martinez shared "Video Editing" skill',
  'ArtisanWorks store reached 1,000 sales',
];

export default function HomePage() {
  const [balance] = useState(4520.75);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section *
      <section className="bg-gradient-to-r from-[#bf2c7e4d] to-[#0f1c471a] py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0f1c47] mb-6">
            Collaborate, Create, Succeed
          </h1>
          <p className="text-xl text-[#0f1c47] mb-8 opacity-80">
            Your community-powered innovation platform
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#bf2c7e] text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
              Start a Shop
            </button>
            <button className="border-2 border-[#0f1c47] text-[#0f1c47] px-8 py-3 rounded-full hover:bg-[#0f1c47] hover:text-white transition-colors">
              Explore Hub
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products *
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#0f1c47] mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-[#0f1c47]">{product.name}</h3>
              <p className="text-[#bf2c7e]">{product.vendor}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Shelves *
      <section className="bg-[#0f1c47] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Shelves</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {shelves.map((shelf) => (
              <div key={shelf.id} className="bg-white rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold text-[#0f1c47]">{shelf.name}</h3>
                <p className="text-[#bf2c7e] text-sm">{shelf.category}</p>
                <p className="text-gray-600 mt-2">{shelf.members} members</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Summary *
      <section className="container mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-[#bf2c7e] to-[#0f1c47] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Financial Summary</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
              <p>Available Balance</p>
            </div>
            <button className="bg-white text-[#bf2c7e] px-6 py-2 rounded-full hover:bg-opacity-90 transition-opacity">
              My Money
            </button>
          </div>
        </div>
      </section>

      {/* Footer *
      <footer className="bg-[#0f1c47] text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-[#bf2c7e] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[#bf2c7e] transition-colors">Support</a>
            <a href="#" className="hover:text-[#bf2c7e] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#bf2c7e] transition-colors">Contact</a>
          </div>
          <p>© 2024 CollabPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}*/}



{/*import { FC } from 'react';

// Dummy data generators
const featuredShops = [...Array(3)].map((_, i) => ({
  id: i,
  name: `Shop ${i + 1}`,
  items: [`Product ${i + 1}A`, `Product ${i + 1}B`],
}));

const shelves = [
  { category: 'Tech Innovation', members: 45 },
  { category: 'Fashion Collabs', members: 32 },
  { category: 'Community Investments', members: 28 },
];

const skills = ['Web Development', 'Graphic Design', 'Digital Marketing'];
const events = ['Investment Workshop', 'Tech Summit', 'Fashion Expo'];
const activities = [
  'John joined Tech Innovation shelf',
  'New product added to Shop 2',
  'Sarah posted Web Development skill',
];

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section *
      <header className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0f1c47]">
            Welcome to Collaborative Commerce
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Innovate, Collaborate, Succeed
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#bf2c7e] text-white px-8 py-3 rounded-lg hover:bg-opacity-90">
              Start a Shop
            </button>
            <button className="border-2 border-[#0f1c47] text-[#0f1c47] px-8 py-3 rounded-lg hover:bg-gray-100">
              Explore Hub
            </button>
          </div>
        </div>
      </header>

      {/* Featured Shops *
      <section className="py-12 bg-gray-50 bg-opacity-60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#0f1c47]">Featured Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredShops.map((shop) => (
              <div key={shop.id} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{shop.name}</h3>
                <ul className="space-y-2">
                  {shop.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
                <button className="mt-4 text-[#bf2c7e] hover:underline">
                  View Shop
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Shelves *
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#0f1c47]">Explore Shelves</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shelves.map((shelf) => (
              <div key={shelf.category} className="p-6 border-2 border-[#0f1c47] rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{shelf.category}</h3>
                <p className="text-gray-600 mb-4">{shelf.members} members</p>
                <button className="bg-[#bf2c7e] text-white px-4 py-2 rounded-md">
                  Join Shelf
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Section *
      <section className="py-12 bg-gray-50 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f1c47]">Hub Skills</h2>
            <button className="bg-[#0f1c47] text-white px-6 py-2 rounded-lg">
              Post Skill
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer *
      <footer className="bg-[#0f1c47] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#bf2c7e]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#bf2c7e]">Support</a></li>
                <li><a href="#" className="hover:text-[#bf2c7e]">Contact</a></li>
              </ul>
            </div>
            {/* Add more footer columns as needed *
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;*/}