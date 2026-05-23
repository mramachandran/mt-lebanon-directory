# Mt. Lebanon Business Directory

A real-time local business directory for Mt. Lebanon, PA residents to discover and support local businesses.

## Features

- 🏢 Browse 10+ local Mt. Lebanon businesses
- 🔍 Search by name or category
- 📊 Real-time analytics for featured businesses
- 📱 Mobile-responsive design
- 🎯 Featured and free listing tiers

## Live Demo

**Coming soon!** Once connected to Netlify, your live site will be here.

## Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3
- **Hosting:** Netlify
- **Version Control:** GitHub

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/mramachandran/mt-lebanon-directory.git
cd mt-lebanon-directory

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Deployment to Netlify

### Option 1: GitHub Integration (Recommended)

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub account
4. Select this repository
5. Click "Deploy site"

Netlify will automatically build and deploy on every push to `main`.

### Option 2: CLI Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the app
npm run build

# Deploy
netlify deploy --prod --dir=build
```

## Project Structure

```
mt-lebanon-directory/
├── src/
│   ├── App.jsx           # Main app component
│   ├── App.css           # Styling
│   ├── index.js          # Entry point
│   └── reportWebVitals.js
├── public/
│   └── index.html
├── package.json
├── README.md
└── .gitignore
```

## Businesses Included

- Il Pizzaiolo (Italian Restaurant)
- Orbis Caffe (Coffee Shop)
- Uptown Coffee (Coffee Shop)
- Mediterra Cafe (Cafe & Bar)
- Louis Anthony Jewelry (Jewelry)
- Potomac Bakery (Bakery)
- Bistro 19 (Restaurant & Bar)
- The Coffee Tree Roasters (Coffee)
- Reginald's Coffee (Coffee)
- The Saloon (Bar)

## Features Coming Soon

- 🔐 Business owner login
- 📈 Real-time analytics dashboard
- 📸 Photo galleries
- 💬 Customer reviews
- 🛒 Payment processing for listings

## Contributing

This is a production project. For major changes, please contact the owner.

## License

Proprietary - All rights reserved

## Contact

**Manoj Ramachandran**
- Email: [your-email]
- GitHub: @mramachandran

---

**Last Updated:** May 23, 2026
