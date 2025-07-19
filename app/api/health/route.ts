import { NextResponse } from 'next/server'

// Simple health check endpoint for monitoring
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'MoonPlay IPTV',
  })
}
