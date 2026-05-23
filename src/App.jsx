import React, { useState } from 'react';
import './App.css';

// Real Mt. Lebanon businesses
const BUSINESSES_DATA = [
  {
    id: 'il-pizzaiolo-001',
    name: 'Il Pizzaiolo',
    category: 'Italian Restaurant',
    address: '703 Washington Rd, Mt. Lebanon, PA 15228',
    phone: '(412) 344-0007',
    website: 'https://www.ilpizzaiolo.com',
    hours: 'Sun-Thu 12-9 PM, Fri-Sat 12-10 PM',
    description: 'Neapolitan-style pizza and pasta. Pennsylvania\'s first Neapolitan pizzeria (established 1996). Fresh mozzarella made daily, San Marzano tomatoes, wood-fired oven. Wine bar and courtyard patio.',
    tier: 'professional',
    views: 187,
    clicks: 35,
    topSearchTerm: 'Italian restaurant Mt. Lebanon',
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
  },
  {
    id: 'orbis-caffe-002',
    name: 'Orbis Caffe',
    category: 'Coffee Shop',
    address: 'Washington Rd, Mt. Lebanon, PA',
    phone: '(412) 344-1234',
    website: '#',
    hours: '6 AM - 7 PM',
    description: 'Warm and cozy café with vinyl records and unique details. Artisan coffee, friendly service, great atmosphere. Perfect for work or relaxation.',
    tier: 'premium',
    views: 243,
    clicks: 48,
    topSearchTerm: 'coffee near me',
    imageUrl: 'https://images.unsplash.com/photo-1495474472645-4c0eb6991000?w=400&h=300&fit=crop',
  },
  {
    id: 'uptown-coffee-003',
    name: 'Uptown Coffee',
    category: 'Coffee Shop',
    address: 'Washington Rd, Mt. Lebanon, PA',
    phone: '(412) 555-9876',
    website: '#',
    hours: '7 AM - 6 PM',
    description: 'Local coffee roastery serving freshly brewed, farm-sourced coffee. Specialty drinks and local pastries. Vegan and gluten-free options available.',
    tier: 'professional',
    views: 156,
    clicks: 28,
    topSearchTerm: 'specialty coffee',
    imageUrl: 'https://images.unsplash.com/photo-1544432203-c1f5241d8358?w=400&h=300&fit=crop',
  },
  {
    id: 'mediterra-cafe-004',
    name: 'Mediterra Cafe',
    category: 'Cafe & Bar',
    address: 'Washington Rd, Mt. Lebanon, PA',
    phone: '(412) 555-5555',
    website: '#',
    hours: '8 AM - 9 PM',
    description: 'Hip modern café serving breakfast, lunch, coffee, and alcoholic beverages. Charcuterie boards and beautiful plated dishes. Perfect for brunch or evening drinks.',
    tier: 'free',
    views: 89,
    clicks: 12,
    topSearchTerm: 'brunch Mt. Lebanon',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop',
  },
  {
    id: 'louis-anthony-005',
    name: 'Louis Anthony Jewelry',
    category: 'Jewelry & Luxury',
    address: 'Mt. Lebanon, PA',
    phone: '(412) 555-3333',
    website: '#',
    hours: '10 AM - 6 PM',
    description: 'Official Rolex and Tudor retailer serving Pittsburgh for 30+ years. Wide selection of luxury watches, jewelry, giftware. David Yurman boutique, full-service hospitality bar.',
    tier: 'professional',
    views: 134,
    clicks: 22,
    topSearchTerm: 'luxury jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
  },
  {
    id: 'potomac-bakery-006',
    name: 'Potomac Bakery',
    category: 'Bakery',
    address: 'Mt. Lebanon, PA',
    phone: '(412) 555-7777',
    website: '#',
    hours: '6 AM - 7 PM',
    description: 'Homemade donuts, breads, pies, cakes, muffins, and cheesecake. Local favorite for quality baked goods. Fresh daily.',
    tier: 'free',
    views: 112,
    clicks: 18,
    topSearchTerm: 'donuts near me',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  {
    id: 'bistro-19-007',
    name: 'Bistro 19',
    category: 'Restaurant & Bar',
    address: 'Washington Rd, Mt. Lebanon, PA',
    phone: '(412) 555-1919',
    website: '#',
    hours: '11 AM - 10 PM',
    description: 'Neighborhood bar and restaurant favorite. Quality meals at affordable prices. Great for lunch or dinner. Always a familiar face.',
    tier: 'free',
    views: 167,
    clicks: 31,
    topSearchTerm: 'restaurant Mt. Lebanon',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=400&h=300&fit=crop',
  },
  {
    id: 'the-coffee-tree-008',
    name: 'The Coffee Tree Roasters',
    category: 'Coffee Shop',
    address: 'Mt. Lebanon, PA',
    phone: '(412) 555-8888',
    website: '#',
    hours: '7 AM - 5 PM',
    description: 'Specialty coffee roasters. Locally roasted beans, espresso drinks, pour overs. Small batch, high quality.',
    tier: 'free',
    views: 98,
    clicks: 14,
    topSearchTerm: 'coffee roaster',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e79e26038?w=400&h=300&fit=crop',
  },
  {
    id: 'reginald-coffee-009',
    name: 'Reginald\'s Coffee',
    category: 'Coffee Shop',
    address: 'Mt. Lebanon, PA',
    phone: '(412) 555-2222',
    website: '#',
    hours: '6:30 AM - 5 PM',
    description: 'Cozy coffee spot with excellent espresso. Local pastries and light breakfast. Quiet workspace.',
    tier: 'free',
    views: 76,
    clicks: 11,
    topSearchTerm: 'quiet coffee shop',
    imageUrl: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
  },
  {
    id: 'the-saloon-010',
    name: 'The Saloon',
    category: 'Bar',
    address: 'Washington Rd, Mt. Lebanon, PA',
    phone: '(412) 555-4444',
    website: '#',
    hours: '11 AM - 2 AM',
    description: 'Popular neighborhood bar. Always a place to meet familiar faces. Good drinks and atmosphere.',
    tier: 'free',
    views: 145,
    clicks: 26,
    topSearchTerm: 'bar Mt. Lebanon',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&h=300&fit=crop',
  },
];

// Home Page
function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Coffee Shop', 'Restaurant & Bar', 'Bakery', 'Jewelry & Luxury', 'Cafe & Bar', 'Italian Restaurant', 'Bar'];
  
  const filtered = BUSINESSES_DATA.filter(b => {
    const matchSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       b.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || b.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const featured = filtered.filter(b => b.tier !== 'free');
  const free = filtered.filter(b => b.tier === 'free');

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>Mt. Lebanon Business Directory</h1>
          <p>Discover local businesses. Support your community.</p>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search coffee, restaurants, shops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>Search</button>
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="main-content">
        {featured.length > 0 && (
          <section className="featured-section">
            <h2>Featured businesses</h2>
            <div className="business-grid">
              {featured.map(biz => (
                <BusinessCard key={biz.id} business={biz} featured={true} />
              ))}
            </div>
          </section>
        )}

        <section className="all-section">
          <h2>All local businesses ({filtered.length} total)</h2>
          <div className="business-list">
            {free.map(biz => (
              <BusinessCard key={biz.id} business={biz} featured={false} />
            ))}
          </div>
          
          {free.length === 0 && filtered.length > featured.length && (
            <div className="empty-state">
              <p>No businesses match your search</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Business Card
function BusinessCard({ business, featured }) {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const tierBadge = {
    free: 'Free',
    professional: 'Professional',
    premium: 'Premium',
    sponsor: 'Sponsor'
  }[business.tier];

  const tierColor = {
    free: '#666',
    professional: '#0066cc',
    premium: '#cc0066',
    sponsor: '#ff9900'
  }[business.tier];

  if (expanded) {
    return (
      <div className="business-card expanded">
        <button className="back-btn" onClick={handleCardClick}>← Back</button>
        
        <div className="business-hero" style={{ backgroundImage: `url(${business.imageUrl})` }}></div>
        
        <div className="business-detail-content">
          <div className="detail-header">
            <div>
              <h1>{business.name}</h1>
              <p className="category">{business.category}</p>
            </div>
            <span className="tier-badge" style={{ backgroundColor: tierColor }}>
              {tierBadge}
            </span>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <span className="label">Phone</span>
              <a href={`tel:${business.phone}`}>{business.phone}</a>
            </div>
            <div className="info-item">
              <span className="label">Website</span>
              <a href={business.website} target="_blank" rel="noopener noreferrer">Visit →</a>
            </div>
            <div className="info-item">
              <span className="label">Hours</span>
              <span>{business.hours}</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span>{business.address}</span>
            </div>
          </div>

          <div className="description-section">
            <h3>About</h3>
            <p>{business.description}</p>
          </div>

          {(business.tier === 'professional' || business.tier === 'premium') && (
            <div className="analytics-box">
              <h3>Analytics this week</h3>
              <div className="analytics-grid">
                <div className="stat">
                  <span className="label">Views</span>
                  <span className="value">{business.views}</span>
                </div>
                <div className="stat">
                  <span className="label">Clicks</span>
                  <span className="value">{business.clicks}</span>
                </div>
                <div className="stat">
                  <span className="label">Rate</span>
                  <span className="value">{Math.round((business.clicks / business.views) * 100)}%</span>
                </div>
              </div>
            </div>
          )}

          <div className="action-buttons">
            <button className="call-btn" onClick={() => window.location.href = `tel:${business.phone}`}>
              Call now
            </button>
            {business.website !== '#' && (
              <button className="visit-btn" onClick={() => window.open(business.website, '_blank')}>
                Visit website
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (featured) {
    return (
      <div className="business-card featured" onClick={handleCardClick}>
        <div className="card-image" style={{ backgroundImage: `url(${business.imageUrl})` }}></div>
        <div className="card-content">
          <h3>{business.name}</h3>
          <p className="category">{business.category}</p>
          <span className="tier-badge" style={{ backgroundColor: tierColor }}>
            {tierBadge}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="business-card list-item" onClick={handleCardClick}>
      <div className="list-image" style={{ backgroundImage: `url(${business.imageUrl})` }}></div>
      <div className="list-content">
        <h3>{business.name}</h3>
        <p className="category">{business.category}</p>
        <p className="location">📍 {business.address.split(',')[0]} | {business.hours.split(',')[0]}</p>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">Mt. Lebanon</h1>
          <div className="nav-links">
            <button className="active">Directory</button>
            <button>For Businesses</button>
          </div>
        </div>
      </nav>

      <HomePage />
    </div>
  );
}
