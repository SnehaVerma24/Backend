import mongoose from 'mongoose'

const mongodb = async () => {
    mongoose.connect("mongodb+srv://sneha123:sneha123@cluster0.hv2amxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = mongoose.connection
    db.on("connected", () => {
        console.log("database connected")
    })
    db.on("error", () => {
        console.log("database not connected")
    })
    db.on('disconnected', () => {
        console.log("database disconnected")
    })
}

export default mongodb
