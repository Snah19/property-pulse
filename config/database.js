import mongoose from "mongoose";

let connected = false;

const connectToMongoDB = async () => {
    mongoose.set("strictQuery", true);
    if (!connected) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            connected = true;
            console.log("Successfully connected to MongoDB");
        }
        catch (e) {
            console.error(e.message);
        }
    }
};

export default connectToMongoDB;