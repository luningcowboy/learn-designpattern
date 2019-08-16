public class JumpCommand extends Command{
	public JumpCommand(){
		super();
		System.out.println("JumpCommand");
	}
	public void execute(){
		super.execute();
		System.out.println("JumpCommand,execute");
	}
	public void undo(){
		super.undo();
		System.out.println("JumpCommand,undo");
	}
}
