import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    
  const { name, email, projectIds } = await req.json();

  console.log(name,email,projectIds)

  try {
    const user = await prisma.manytomanyuser.create({
      data: {
        name,
        email,
        projectIds:projectIds.map(id => id.toString()),
      },
    });

    return  Response.json( user)

  } catch (error) {

    return  Response.json( {message : error.message}, {status: 400})
  }
}

export async function GET() {
  try {
    const users = await prisma.manytomanyuser.findMany({
      include: { projects: true },
    });
    return  Response.json((users), { status: 200 });
  } catch (error) {
    return  Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
