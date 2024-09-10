// pages/api/user/change-password.js
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export default async function handler(req, res) {

  const session = await getServerSession(req, res, authOptions);

  if (req.method === 'PATCH') {

    if (!session) {
      res.status(401).json({ message: 'Not authenticated!' });
      return;
    }
  
    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
  
    const client = await connectToDatabase();
  
    const usersCollection = client.db().collection('users');
  
    const user = await usersCollection.findOne({ email: userEmail });
  
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      client.close();
      return;
    }
  
    const currentPassword = user.password;
  
    const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);
  
    if (!passwordsAreEqual) {
      res.status(403).json({ message: 'Invalid password.' });
      client.close();
      return;
    }
  
    const hashedPassword = await hashPassword(newPassword);
  
    const result = await usersCollection.updateOne(
      { email: userEmail },
      { $set: { password: hashedPassword } }
    );
  
    client.close();
    res.status(200).json({ message: 'Password updated!' });
  }

}