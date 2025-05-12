import mongoose from "mongoose";
import colors from 'colors'
const connectDatabase = async() => {
    try {
        const tryConnectDB = await mongoose.connect(`${process.env.MONGODB_URL}`);
        if (tryConnectDB) {
            console.log("Database Connected Successfully".bgGreen);
        } else {
            console.log("Database Connection Failed !".bgRed);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;
