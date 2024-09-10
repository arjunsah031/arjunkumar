// import { MongoClient } from 'mongodb';

// export async function connectToDatabase() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://maximilian:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority'
//   );

//   return client;
// }

const url = process.env.MONGODB_URL

import  {MongoClient} from 'mongodb';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Enable TLS/SSL
  };

export async  function connectToDatabase() {
    
    const clint = await MongoClient.connect(url,options);

    return clint;
}