const os = require("os");
const cli = require("@angular/cli").default;

const HOST = `${os.hostname().toLowerCase()}.senior.com.br`;
// const HOST = `0.0.0.0`; //Possibilita o acesso de outras maquinas da rede
cli({
	// prettier-ignore
	cliArgs: [
		"serve",
		"--host",
		HOST,
		"--port",
		"49153",
		"-o",
		...process.argv.slice(2)
	]
});
