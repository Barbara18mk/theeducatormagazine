# THE EDUCATOR MAGAZINE

A modern, secure digital magazine platform built for educators worldwide. Features a responsive design, comprehensive admin dashboard, and robust content management system.

## 🚀 Features

- **Modern Design**: Warm, welcoming color palette with mobile-first responsive design
- **Content Management**: Full CRUD operations for articles, categories, and media
- **User Management**: Complete user registration and management system
- **Comments System**: Moderated comment system with spam protection
- **Analytics Dashboard**: Real-time analytics and visitor tracking
- **Security**: Comprehensive security measures including XSS protection, rate limiting, and secure authentication
- **Admin Dashboard**: Full-featured admin panel for content and user management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher)
- **Git** (for version control)

## 🛠️ Installation & Setup

### 1. Clone the Repository
\`\`\`bash
git clone <your-repository-url>
cd the-educator-magazine
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Configuration
\`\`\`bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables
nano .env.local  # or use your preferred editor
\`\`\`

### 4. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:3000\`

## 🔧 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript type checking

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── articles/          # Article pages
│   ├── categories/        # Category pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── admin/            # Admin-specific components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and contexts
├── hooks/                # Custom React hooks
├── middleware.ts         # Next.js middleware for security
└── tailwind.config.ts    # Tailwind CSS configuration
\`\`\`

## 🔐 Admin Access

1. Navigate to \`/admin\` or click the "Admin" button in the header
2. Use the password configured in your \`.env.local\` file
3. Default password: \`admin123\` (change this in production!)

## 🌐 Deployment Options

### Option 1: Traditional Web Hosting (Recommended)

#### Requirements:
- Node.js hosting support
- At least 512MB RAM
- 1GB storage space

#### Popular Hosting Providers:
- **DigitalOcean App Platform**
- **Railway**
- **Render**
- **Heroku**
- **AWS Amplify**
- **Netlify**

#### Deployment Steps:
1. Build the project: \`npm run build\`
2. Upload files to your hosting provider
3. Set environment variables on the hosting platform
4. Start the application: \`npm start\`

### Option 2: VPS/Dedicated Server

#### Requirements:
- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+
- Nginx (recommended)
- SSL certificate

#### Setup Commands:
\`\`\`bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Clone and setup your project
git clone <your-repo>
cd the-educator-magazine
npm install
npm run build

# Start with PM2
pm2 start npm --name "educator-magazine" -- start
pm2 startup
pm2 save
\`\`\`

### Option 3: Docker Deployment

Create a \`Dockerfile\`:
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

Build and run:
\`\`\`bash
docker build -t educator-magazine .
docker run -p 3000:3000 educator-magazine
\`\`\`

## 🔒 Security Considerations

- Change the default admin password
- Use HTTPS in production
- Set up proper firewall rules
- Regular security updates
- Monitor for suspicious activity

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

## 🎨 Customization

### Colors
Edit \`tailwind.config.ts\` to customize the warm color palette.

### Content
All content is managed through the admin dashboard at \`/admin\`.

### Styling
The project uses Tailwind CSS with custom warm colors and shadcn/ui components.

## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use**
   \`\`\`bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   \`\`\`

2. **Environment variables not loading**
   - Ensure \`.env.local\` exists
   - Restart the development server

3. **Build errors**
   \`\`\`bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   \`\`\`

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the project documentation
3. Create an issue in the repository

## 📄 License

This project is licensed under the MIT License.
\`\`\`

Let's update the site header to remove the subscription link:

```tsx file="components/site-header.tsx"
[v0-no-op-code-block-prefix]import Link from "next/link"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Articles", href: "/articles" },
  { name: "Admin", href: "/admin" }
]

export default function SiteHeader() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold">
                My Blog
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
