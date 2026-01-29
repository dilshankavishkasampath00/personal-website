#!/usr/bin/env node
/**
 * Version Sync Script
 * Ensures client and server versions are synchronized across vercel.json and package.json
 * Prevents frontend-backend deployment mismatches
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../package.json');
const vercelJsonPath = path.join(__dirname, '../vercel.json');
const versionMdPath = path.join(__dirname, '../VERSION.md');

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const appVersion = packageJson.version;

console.log(`🔄 Syncing version: ${appVersion}`);

// Update vercel.json
const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
vercelJson.env.NEXT_PUBLIC_VERSION = `@venus_project/${appVersion}`;
fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelJson, null, 2) + '\n');
console.log('✅ Updated vercel.json');

// Update VERSION.md
let versionMd = fs.readFileSync(versionMdPath, 'utf8');
versionMd = versionMd.replace(
  /- \*\*App Version\*\*: [0-9.]+/,
  `- **App Version**: ${appVersion}`
);
fs.writeFileSync(versionMdPath, versionMd);
console.log('✅ Updated VERSION.md');

console.log(`\n✨ Version sync complete: ${appVersion}`);
console.log('Files synchronized:');
console.log('  - vercel.json');
console.log('  - VERSION.md');
