import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
	category: String,
	description: String,
	priceMin: Number,
	priceMax: Number,
	status: Boolean,
});
export const DataMessage = mongoose.model('DataMessage', dataSchema);

const expDataScheme = mongoose.Schema({
	year: Number,
	month: String,
	detail: String,
	amount: Number,
	mode: String,
});
export const ExpenseData = mongoose.model('ExpenseData', expDataScheme);

// export default DataMessage;
