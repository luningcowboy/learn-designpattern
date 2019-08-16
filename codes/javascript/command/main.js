let CMDS = require('./command.js')
console.log(CMDS);
let jumpCmd = new CMDS.JumpCommand();
let fireCmd = new CMDS.FireCommand();

jumpCmd.execute();
fireCmd.execute();

jumpCmd.undo();
fireCmd.undo();
