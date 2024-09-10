import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export  async function POST(req, res) {
  
    const { email, name, bio } = await req.json();

    if( !email || !name || !bio) {

        return Response.json( {message : "invalid data"})
    }

    try {

      const user = await prisma.testuser.create({
        data: {
          email,
          name,
          profile: {
            create: {
              bio,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      return Response.json(user);
    } catch (error) {
      Response.json({ error: 'Failed to create user and profile' });
    }
  
    
  
}

export async function GET(req) {

  try {
    const user = await prisma.testuser.findMany({
      include: { profile: false },
    });

    if (user) {
      return Response.json(user);
    } else {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return Response.json({ error: 'Failed to fetch user and profile' }, { status: 500 });
  }
}

