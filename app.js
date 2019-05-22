// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const menuContainer=document.querySelector("#menu");
    this.menuScreen=new MenuScreen(menuContainer);
    const musicContainer=document.querySelector("#music");
    this.musicScreen=new MusicScreen(musicContainer);

    this.ToMusic=this.ToMusic.bind(this);
    this.ToMenu=this.ToMenu.bind(this);

    document.addEventListener("ToMusic",this.ToMusic);
    document.addEventListener("ToMusic",this.ToMenu);
  }

  // TODO(you): Add methods as necessary.
  ToMusic(){
    /*this.menuContainer.classList.add("inactive");
    this.musicContainer.classList.remove("inactive");*/
  }

  ToMenu(){
    /*this.menuContainer.classList.remove("inactive");
    this.musicContainer.classList.add("inactive");*/
  }
}
