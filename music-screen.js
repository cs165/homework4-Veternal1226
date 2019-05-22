// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(musicContainer) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.musicContainer=musicContainer;
    //console.log(musicContainer);
    this.gifareaContainer=musicContainer.querySelector("#gifarea");
    this.playContainer=musicContainer.querySelector("#playbutton");
    this.gifarea=null;
    this.playButton=null;
    this.audioPlayer=null;
    this.isPlay=false;

    this._ChangeStatus=this._ChangeStatus.bind(this);

    document.addEventListener("ChangeStatus",this._ChangeStatus);

  }
  // TODO(you): Add methods as necessary.
  init(imgURL,musicURL){
    this.gifarea=new GifDisplay(this.gifareaContainer,imgURL);
    this.playButton=new PlayButton(this.playContainer);
    this.audioPlayer=new AudioPlayer();
    this.audioPlayer.setSong(musicURL);
    this.audioPlayer.setKickCallback(()=>{
      document.dispatchEvent(new CustomEvent("Kick"));
    });
    this.playButton.init();
  }

  _ChangeStatus(){
    if(this.isPlay){
      this.isPlay=false;
      this.audioPlayer.pause();
    }
    else{
      this.isPlay=true;
      this.audioPlayer.play();
    }
  }
}
