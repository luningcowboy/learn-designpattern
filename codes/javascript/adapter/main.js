class MediaPlayer{
    play(audiotype, filename){}
}
class AdvanceMedaiPlayer{
    playVlc(filename){}
    playMp4(filename){}
}
class VlcPlayer extends AdvanceMedaiPlayer{
    playVlc(filename){
        super.playVlc(filename);
        console.log("VlcPlayer", "playVlc", filename);
    }
}
class Mp4Player extends AdvanceMedaiPlayer{
    playMp4(filename){
        super.playMp4(filename);
        console.log("Mp4Player", "playMp4", filename);
    }
}

class MediaAdapter extends MediaPlayer{
    constructor(audiotype){
        super();
        if(audiotype == 'vlc'){
            this._advanceMusicPlayer = new VlcPlayer();
        }
        else if(audiotype == 'mp4'){
            this._advanceMusicPlayer = new Mp4Player();
        }
    }
    play(audiotype, filename){
        if(audiotype === 'vlc'){
            this._advanceMusicPlayer.playVlc(filename);
        }
        else if(audiotype === 'mp4'){
            this._advanceMusicPlayer.playMp4(filename);
        }
    }

}
class AudioPlayer extends MediaPlayer{
    constructor(){
        super();
        this._mediaAdapter = null;
    }
    play(audiotype, filename){
        super.play(audiotype, filename);
        if(audiotype === 'mp3'){
            console.log('play', 'mp3', filename);
        }
        else if(audiotype === 'vlc' || audiotype === 'mp4'){
            this._mediaAdapter = new MediaAdapter(audiotype);
            this._mediaAdapter.play(audiotype, filename);
        }
        else{
            console.log('Invalid media.' + audiotype + " format not supported");
        }
    }
}
function main(){
    let audioPlayer = new AudioPlayer();
    audioPlayer.play("mp3", "aaa.mp3");
    audioPlayer.play("mp4", "aaa.mp4");
    audioPlayer.play("vlc", "aaa.vlc");
    audioPlayer.play("avi", "aaa.avi");
}
main();
