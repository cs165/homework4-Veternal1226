// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const menuContainer=document.querySelector("#menu");
    this.menuContainer=menuContainer;
    this.menuScreen=new MenuScreen(menuContainer);
    const musicContainer=document.querySelector("#music");
    this.musicContainer=musicContainer;
    this.musicScreen=new MusicScreen(musicContainer);

    this.ToMusic=this.ToMusic.bind(this);
    this.ToMenu=this.ToMenu.bind(this);

    document.addEventListener("ToMusic",this.ToMusic);
    document.addEventListener("ToMenu",this.ToMenu);
  }

  // TODO(you): Add methods as necessary.
  ToMusic(event){
    console.log(event.detail);
    this.menuContainer.classList.add("inactive");
    this.musicContainer.classList.remove("inactive");

    const URL = "https://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(event.detail.gifValue) + "&api_key=FjJaTP04iY5rAwcEASKET51wyx9VZ2V8&limit=25&rating=g";
    const onJsonReady = (json) => {
      let imgURL = [];
      if(json.data.length > 2) {
        for(let index in json.data) {
          const imgurl = json.data[index].images.downsized.url;           
          imgURL.push(imgurl);
        console.log(imgURL);
        this.musicScreen.init(imgURL, event.detail.songValue);
        //this.menuScreen.hideErrMsg();
        //this.menuScreen.hide();
        //this.musicScreen.preload(imgURL, event.detail.songValue);
      }else {
        //this.menuScreen.showErrMsg();
      }
    };

    fetch(URL)
      .then(response => response.json())
      .then(onJsonReady);

  }

  ToMenu(event){
    console.log('2');
    this.menuContainer.classList.remove("inactive");
    this.musicContainer.classList.add("inactive");
  }
}
