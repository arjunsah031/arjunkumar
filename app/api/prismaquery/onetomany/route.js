// app/api/users/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { fname, lname, email } = await req.json();
  try {
    const newUser = await prisma.onetomanyser.create({
      data: {
        fname,
        lname,
        email,
      },
    });
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.onetomanyser.findMany({
      include: { posts: true },
    });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
  }
}
