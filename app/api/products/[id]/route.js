import { PrismaClient } from '@prisma/client';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

export async function GET(request, { params }) {

  const { id } = params;
  
  try {

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const singleProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (singleProduct) {
      return new Response(JSON.stringify(singleProduct), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } 

    
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch data",  }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


export async function PUT(req, { params }) {

  const { id } = params;
  console.log(id)

  const data = await req.json();

    const { tittle, price ,des, duration} = data;

    if( !tittle || !price || !des || !duration) {

        return Response.json({ message : " body data in not wrong"})
    }
  
  try {
    // Ensure the ID is a valid ObjectId

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid product ID" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
          tittle:tittle,
          price: parseFloat(price),
          des:des,
          duration:duration
      },
    });

    return new Response(JSON.stringify(updatedProduct), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error updating product:", error);

    return new Response(JSON.stringify({ message: "Failed to update product", error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


export async function DELETE(request, { params }) {
  const { id } = params;
  
  try {
    // Ensure the ID is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid product ID" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });

    return new Response(JSON.stringify(deletedProduct), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error deleting product:", error);

    return new Response(JSON.stringify({ message: "Failed to delete product", error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


