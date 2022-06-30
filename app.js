const fs = require("fs");
const chalk = require("chalk");
const Notes = require("./notes");
const yargs = require("yargs");
const { argv } = require("process");

yargs.command({
	command: "add",
	describe: "Add note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		Notes.addNotes(argv.title, argv.body);
		console.log("Add notes");
	},
});

yargs.command({
	command: "remove",
	describe: "Remove note",
	builder: {
		title: {
			describe: "Note title to remove",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		Notes.removeNote(argv.title);
		//console.log(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "List all items",
	handler() {
		Notes.listNotes();
	},
});

yargs.command({
	command: "read",
	describe: "Read notes",
	builder: {
		title: {
			describe: "Read title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		Notes.readNotes(argv.title);
		//console.log("Reading all the item");
	},
});

//console.log(Notes.getNotes());

yargs.parse();
