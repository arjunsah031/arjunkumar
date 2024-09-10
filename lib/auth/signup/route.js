import { hashPassword } from "@/lib/auth/";
import { connectToDatabase } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req, res) {

  const data = await req.json();


  const { name, email, password } = data; 
  
if(
  !name || !email || !email.includes('@') || !password || password.trim().length < 3
) {

 return NextResponse.json({ message : "enter valid name email and password"},
  {status: 400}
  )
}

const clint = await connectToDatabase();
const db =  clint.db();

const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    return NextResponse.json({ message: "email is already in use"},{
      status :500
    })
  }

const newpassword = await hashPassword(password)  

const result = await db.collection('users').insertOne( {

  name : name,
  email: email,
  password : newpassword

} );

return NextResponse.json({ message : 'accout is created sucessfully'},{
  status:200
})
  clint.close();
}  
