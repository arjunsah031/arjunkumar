// app/api/posts/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {

  const { title, content, authoremail } = await req.json();
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authoremail,
      },
    });
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create post' }), { status: 500 });
  }
}
