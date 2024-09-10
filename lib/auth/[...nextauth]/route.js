import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import CredentialsProvider from "next-auth/providers/credentials"

import { verifyPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';


const handler = NextAuth( {

  session: {
    strategy: 'jwt',
  },

  
    providers: [

            CredentialsProvider({
                
              async authorize(credentials) {

                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({
                  email: credentials.email,
                });

                if (!user) {
                  client.close();
                  throw new Error('No user found plz createe and login');
                }

                const isValid = await verifyPassword(
                  credentials.password,
                  user.password
                );

                if (!isValid) {
                  client.close();
                  throw new Error('Could not log you in! password is wrong');
                }

                client.close();
                return { email:user.email };
                
              },
            })
    ],

    secret: process.env.NEXTAUTH_SECRET,

})

export {handler as GET , handler as POST}



