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
    console.log(musicContainer);
    this.gifareaContainer=musicContainer.querySelector("gifarea");
    this.gifarea=null;

  }
  // TODO(you): Add methods as necessary.
  init(imgURL,musicURL){
    this.gifarea=new GifDisplay(this.gifareaContainer,imgURL);

  }
}
