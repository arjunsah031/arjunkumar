import { connectToDatabase } from "@/lib/db";


export  async function POST( req) {

    const data = await req.json();

    const { tittle, price ,des, duration} = data;

    if( !tittle || !price || !des || !duration) {

        return Response.json({ message : " body data in not wrong"})
    }

    const client = await connectToDatabase();
    const db = client.db();

    try{

        await db.collection('products').insertOne( {
            tittle : tittle,
            price : price,
            des : des,
            duration : duration

        })
       
    }catch(error) {
        return Response.json( { message : 'inserting data is being error'}, 
            { status : 400} )

    }

    return Response.json( { message : " inserted data"})

    
} 

export async function GET( req) {

    const client = await connectToDatabase()
    const db = client.db()

    try {

        const allproducts = await db.collection('products').find({}).toArray()
        return Response.json( allproducts, {
            status : 200
        })

    }catch {

        return Response.json( { message : "some tisngis worong"})

    }

}


