import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export  async function POST (req) {

    const data = await req.json();

    const { tittle, price ,des, duration} = data;

    if( !tittle || !price || !des || !duration) {

        return Response.json({ message : " body data in not wrong"})
    }

    try { 


      const product = await prisma.product.create({
        data: {
          tittle:tittle,
          price: parseFloat(price),
          des:des,
          duration:duration
        },
      });

    } catch (error) {

       return Response.json({ message: 'Internal Server Error', error });
    }

    return Response.json({ message: 'insterda data ' });
}


export async function GET (req) {

    try {
        const allproducts = await prisma.product.findMany();

        return Response.json( allproducts, {
            status : 200
        })

    }catch {

        return Response.json( { message : "some tisngis worong"})

    }

}

