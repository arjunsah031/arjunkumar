import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {

  const  {id}  = params;
  console.log(typeof(id))

  try {
    const user = await prisma.testuser.findUnique({
      where: { id },
      include: { profile: true },
    });

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user and profile' }, { status: 500 });
  }
}
