#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleMeetMcpServer } from '../src/index.js';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    const server = new GoogleMeetMcpServer();
    await server.run();
  } catch (error) {
    console.error('Error starting Google Meet MCP server:', error);
    process.exit(1);
  }
}

main();
