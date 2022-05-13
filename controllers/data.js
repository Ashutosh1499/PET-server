import { DataMessage, ExpenseData } from '../Models/dataMessage.js';

export const getData = async (req, res) => {
	try {
		const dataMessages = await DataMessage.find();
		res.status(200).json(dataMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createData = async (req, res) => {
	const body = req.body;

	const newData = new DataMessage(body);

	try {
		await newData.save();

		res.status(201).json(newData);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const getExpenseData = async (req, res) => {
	try {
		const expData = await ExpenseData.find();
		res.status(200).json(expData);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createExpData = async (req, res) => {
	const body = req.body;

	const newData = new ExpenseData(body);

	try {
		await newData.save();

		res.status(201).json(newData);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
