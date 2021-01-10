import mongoose, { Schema, model } from 'mongoose'

export interface Book extends mongoose.Document {
	title: string
	author: string
	ibn: string
}

const BoockSchema = new Schema({
	title: String,
	author: String,
	isbn: String,
})

export default model<Book>('book', BoockSchema)
