class Command{
	constructor(){
		console.log('Command');
	}
	execute(){
		console.log('Command', 'execute');
	}
	undo(){
		console.log('Command', 'undo');
	}
}
class JumpCommand extends Command{
	constructor(){
		super();
		console.log('JumpCommand');
	}
	execute(){
		super.execute()
		console.log('JumpCommand', 'execute');
	}
	undo(){
		super.undo()
		console.log('JumpCommand', 'undo');
	}
}
class FireCommand extends Command{
	constructor(){
		super();
		console.log('FireCommand');
	}
	execute(){
		super.execute();
		console.log('FireCommand', 'execute');
	}
	undo(){
		super.undo();
		console.log('FireCommand', 'undo');
	}
}
module.exports = {Command, JumpCommand, FireCommand};
