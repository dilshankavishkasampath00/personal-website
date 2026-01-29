#!/bin/bash
# Version sync script - Ensures client and server versions match

VERSION=$(cat package.json | grep '"version"' | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d ' ')

echo "Syncing version: $VERSION"

# Update vercel.json with current version
sed -i "s/\"NEXT_PUBLIC_VERSION\": \"@venus_project\/[^\"]*\"/\"NEXT_PUBLIC_VERSION\": \"@venus_project\/$VERSION\"/" vercel.json

# Update VERSION.md
sed -i "s/- \*\*App Version\*\*: [0-9.]*$/- **App Version**: $VERSION/" VERSION.md

echo "✅ Version sync complete: $VERSION"
echo "Updated files:"
echo "  - vercel.json"
echo "  - VERSION.md"
