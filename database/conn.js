import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);

        if(connection.readyState == 1){
            console.log('SUCCESSFULL DB CONNECTION')
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log('DB CONNECTION UNSUCCESSFULL')
        return Promise.reject(error)
        
    }
}

export default connectMongo;