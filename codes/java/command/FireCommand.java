public class FireCommand extends Command{
	public FireCommand(){
		super();
		System.out.println("FireCommand");
	}
	public void execute(){
		super.execute();
		System.out.println("FireCommand,execute");
	}
	public void undo(){
		super.undo();
		System.out.println("FireCommand,undo");
	}
}
