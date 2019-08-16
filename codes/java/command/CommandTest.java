public class CommandTest{
	public static void main(String[] args){
		JumpCommand jumpCmd = new JumpCommand();
		FireCommand fireCmd = new FireCommand();
		jumpCmd.execute();
		fireCmd.execute();

		jumpCmd.undo();
		fireCmd.undo();
	}
}
