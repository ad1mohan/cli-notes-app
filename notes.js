const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
	return "your notes";
};

const addNotes = function (title, body) {
	const notes = loadNotes();
	//console.log(notes);
	const duplicateValue = notes.filter(function (note) {
		return notes.title == title;
	});
	if (duplicateValue == 0) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.green("Note added"));
	} else {
		console.log(chalk.red("Notes doesn't save"));
	}
};

const saveNotes = function (notes) {
	fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const removeNotes = function (title) {
	const notes = loadNotes();
	const notesTaken = notes.filter(function (note) {
		return note.title !== title;
	});
	if (notes.length > notesTaken.length) {
		console.log(chalk.green.inverse("Notes removed"));
		saveNotes(notesTaken);
	} else {
		console.log(chalk.red.inverse("No Note found!"));
	}
	//console.log(title);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const data = dataBuffer.toString();
		//console.log(JSON.parse(data));
		return JSON.parse(data);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNotes: addNotes,
	removeNotes: removeNotes,
};
