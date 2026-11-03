import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    server: {
      name: 'BLACK Dedicated (Brasil)',
      host: '189.126.105.191',
      domain: 'black-mp.vps-kinghost.net',
      port: 1508,
      protocol: 'udp',
      gameMode: 'Team Deathmatch',
      activeMap: 'Veblensk City',
      location: 'São Paulo, BR',
      maxPlayers: 7,
      tickRate: 60,
      authType: 'Authoritative Linux Dedicated'
    },
    client: {
      recommendedVersion: 'v0.4-alpha',
      requiresIso: 'Black.iso (Xbox Original)',
      renderer: 'Vulkan 1.2+'
    },
    updatedAt: new Date().toISOString()
  });
}
