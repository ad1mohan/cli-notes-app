const fs = require("fs");

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
		console.log("Note saved");
	} else {
		console.log("Notes doesn't save");
	}
};

const saveNotes = function (notes) {
	fs.writeFileSync("notes.json", JSON.stringify(notes));
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
	// getNotes: getNotes,
	addNotes: addNotes,
};
