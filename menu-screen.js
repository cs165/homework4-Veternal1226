// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(menuContainer) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menuContainer=menuContainer;
    this.selectContainer=menuContainer.querySelector("#song-selector");
    this.inputContainer=menuContainer.querySelector("#query-input");
    this.formContainer=menuContainer.querySelector("form");
    this.songList={};
    this.themeList=['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

    this.formContainer.addEventListener("submit",this._Submit);

    this._loadSongs(this.selectContainer);
    this.inputContainer.value=this.themeList[
      Math.floor(Math.random()*this.themeList.length)
    ];
  }
  // TODO(you): Add methods as necessary.
  _loadSongs(selectContainer) {
    const PATH='https://fullstackccu.github.io/homeworks/hw4/songs.json';
    const onJsonReady=(json)=>{
      this.songList=json;
      this._createSongs(selectContainer);
    };

    fetch(PATH)
      .then(response => response.json())
      .then(onJsonReady);
  }

  _createSongs(selectContainer) {
    const _songList = Object.values(this.songList);
    for(let i=0; i<_songList.length; i++) {
      const title = _songList[i].artist + ': ' + _songList[i].title;
      selectContainer.options.add(new Option(title, _songList[i].songUrl));
    }
  }

  _Submit(){
    document.dispatchEvent(new CustomEvent('toMusic'));
  }
}
