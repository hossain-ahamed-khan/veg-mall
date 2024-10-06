import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db;

    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                static: true,
                deprecationErrors: true,
            },
        });

        db = client.db('veg-mall')
        return db;

    }
    catch (error) {
        console.log(error);
    }
}