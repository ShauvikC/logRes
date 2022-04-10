import Mongoose from 'mongoose';

const connectDB = async(uri)=>{
    Mongoose.connect(uri,()=>{
        console.log(`Database is connected`);
    });
}

export default connectDB