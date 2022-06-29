const chalk = require("chalk");
//const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");
/*const name = require("./log.js");

require("./log.js");
console.log("This is app js");
console.log(name.lname);
*/

/*const valid = require("validator");

console.log(valid.isEmail("adgdfs@afdf.com"));
*/

//const Chal = require("chalk");
//console.log(chalk.green.bold("Success!"));
//console.log(process.argv[2]);

//console.log(yargs.argv);

yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note Body part",
			demandOption: "true",
			type: "string",
		},
	},
	handler: function (argv) {
		const abc = notes.addNotes(argv.title, argv.body);
		//console.log(notes);
	},
});

yargs.command({
	command: "remove",
	describe: "This will remove the Note",
	builder: {
		title: {
			describe: "Remove title",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		//console.log("This will remove Note");
		notes.removeNotes(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "This will describe the Note",
	handler: function () {
		console.log("This will describe Note");
	},
});

yargs.command({
	command: "read",
	describe: "To read the Notes",
	handler: function () {
		console.log("Reading note");
	},
});

yargs.parse();
