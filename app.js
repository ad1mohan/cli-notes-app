const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
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
			// type: "string",
		},
	},
	handler: function (argv) {
		console.log("Adding a new notes", argv);
	},
});

// yargs.command({
// 	command: "remove",
// 	describe: "This will remove",
// 	helper: function () {
// 		console.log("this will remove file");
// 	},
// });

// yargs.command({
// 	command: "list",
// 	describe: "This will describe the Note",
// 	handler: function () {
// 		console.log("This will describe Note");
// 	},
// });

// yargs.command({
// 	command: "read",
// 	describe: "To read the Notes",
// 	handler: function () {
// 		console.log("Reading note");
// 	},
// });
yargs.parse();
