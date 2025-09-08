@echo off
REM Tech Hub Learning Platform - Deployment Script for Windows
REM This script automates the build and deployment process

echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% lss 18 (
    echo ❌ Node.js version 18+ is required. Current version: 
    node --version
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully
) else (
    echo ✅ Dependencies already installed
)

REM Run tests (if available)
if exist "package.json" (
    findstr /c:"\"test\"" package.json >nul
    if %errorlevel% equ 0 (
        echo 🧪 Running tests...
        npm test
        if %errorlevel% neq 0 (
            echo ❌ Tests failed. Please fix the issues before deploying.
            pause
            exit /b 1
        )
        echo ✅ Tests passed
    )
)

REM Build the application
echo 🔨 Building application...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build completed successfully

REM Check if dist folder exists
if not exist "dist" (
    echo ❌ Build output folder 'dist' not found
    pause
    exit /b 1
)

echo 📁 Build output:
dir dist

echo.
echo 🎉 Deployment preparation completed successfully!
echo.
echo 📋 Next steps:
echo 1. Upload the contents of the 'dist' folder to your web server
echo 2. Configure your web server for SPA routing (all routes should serve index.html)
echo 3. Set up proper caching headers for static assets
echo.
echo 🌐 Deployment options:
echo • Vercel: Connect your GitHub repo to Vercel for automatic deployment
echo • Netlify: Drag and drop the 'dist' folder to Netlify
echo • GitHub Pages: Push the 'dist' folder to gh-pages branch
echo • Traditional hosting: Upload 'dist' contents to your web server
echo.
echo 🔧 For SPA routing, ensure your server serves index.html for all routes
echo    This is required for React Router to work properly
echo.
echo ✅ Your application is ready for deployment!
pause
