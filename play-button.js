// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(playContainer) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.playContainer=playContainer;

    this.changeStatus=this.changeStatus.bind(this);

    playContainer.addEventListener("click",changeStatus)
  }
  // TODO(you): Add methods as necessary.
  init(){
    this.playContainer.classList.remove("pause");
  }

  changeStatus(){
    this.playContainer.classList.toggle("pause");
    document.dispatchEvent(new CustomEvent("ChangeStatus"));
  }
}
