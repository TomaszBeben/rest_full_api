import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/RestApi';

if (!MONGO_DB_URL) {
  throw new Error();
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    connect: null,
    promise: null,
  };
}

async function dbConnect() {
  if (cached.connect) {
    return cached.connect
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_DB_URL, opts).then((mongoose) => {
      return mongoose
    })
  }

  cached.connect = await cached.promise
  return cached.connect
}

export default dbConnect