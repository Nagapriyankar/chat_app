import mongoose from 'mongoose'

const connectToMongo = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_DB_URI)
            .then(() => {
                console.log('connected to MongoDB')
            })
    } catch {
        console.log("Error Connecting to MongoDB", error.message)
    }
}

export default connectToMongo