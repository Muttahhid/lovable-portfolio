#!/bin/bash

# Exit immediately if a command fails
set -e

# Config
PROJECT_DIR="$HOME/Projects/lovable-portfolio"  # Change to your actual project folder name
GIT_REPO="https://github.com/Muttahhid/lovable-portfolio.git"  # Change this to your actual repo
TARGET_DIR="/var/www/muttahhid.com/html"

echo "🔄 Removing old project directory..."
rm -rf "$PROJECT_DIR"

echo "📦 Cloning repository..."
git clone "$GIT_REPO" "$PROJECT_DIR"

cd "$PROJECT_DIR"

echo "📁 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "🧹 Cleaning target directory..."
sudo rm -rf "$TARGET_DIR"/*

echo "📂 Copying built files to Nginx root..."
sudo cp -r dist/* "$TARGET_DIR"

echo "🔐 Fixing permissions..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete! Your site should be live."
