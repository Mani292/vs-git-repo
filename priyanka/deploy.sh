#!/bin/bash

# Tech Hub Learning Platform - Deployment Script
# This script automates the build and deployment process

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
else
    echo "✅ Dependencies already installed"
fi

# Run tests (if available)
if [ -f "package.json" ] && grep -q "\"test\"" package.json; then
    echo "🧪 Running tests..."
    npm test
    if [ $? -ne 0 ]; then
        echo "❌ Tests failed. Please fix the issues before deploying."
        exit 1
    fi
    echo "✅ Tests passed"
fi

# Build the application
echo "🔨 Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build completed successfully"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Build output folder 'dist' not found"
    exit 1
fi

echo "📁 Build output:"
ls -la dist/

echo ""
echo "🎉 Deployment preparation completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Upload the contents of the 'dist' folder to your web server"
echo "2. Configure your web server for SPA routing (all routes should serve index.html)"
echo "3. Set up proper caching headers for static assets"
echo ""
echo "🌐 Deployment options:"
echo "• Vercel: Connect your GitHub repo to Vercel for automatic deployment"
echo "• Netlify: Drag and drop the 'dist' folder to Netlify"
echo "• GitHub Pages: Push the 'dist' folder to gh-pages branch"
echo "• Traditional hosting: Upload 'dist' contents to your web server"
echo ""
echo "🔧 For SPA routing, ensure your server serves index.html for all routes"
echo "   This is required for React Router to work properly"
echo ""
echo "✅ Your application is ready for deployment!"
