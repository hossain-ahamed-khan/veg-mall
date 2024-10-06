import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB();
    const itemCollection = db.collection('items')

    try {
        const items = await itemCollection.find().toArray();
        return Response.json({ items })
    }
    catch (error) {
        console.log(error);
    }
}