import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  const response = await fetch('https://api.amboss.space/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body)
  })

  const data = await response.json()
  return NextResponse.json(data)
} 