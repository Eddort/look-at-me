import * as program from "commander";

program
	.command("rm <dir>")
	.option("-r, --recursive", "Remove recursively")
	.action((dir: string, cmd: any) => {
		console.log("resmove " + dir + (cmd.recursive ? " recursively" : ""));
	});

program.parse(process.argv);
