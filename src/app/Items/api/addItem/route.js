import { connectDB } from "@/lib/connectDB"

export const POST = async (request) => {
    const item = await request.json()
    const db = await connectDB();
    const itemCollection = db.collection('items')

    try {
        const resp = await itemCollection.insertOne(item);
        return Response.json({ message: "item added successfully" })
    }
    catch (error) {
        console.log(error);
    }
}