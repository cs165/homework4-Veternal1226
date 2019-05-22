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
    const errorContainer=document.querySelector("#error");
    this.errorContainer=errorContainer;

    this.ToMusic=this.ToMusic.bind(this);
    /*this.ToMenu=this.ToMenu.bind(this);*/

    document.addEventListener("ToMusic",this.ToMusic);
    /*document.addEventListener("ToMenu",this.ToMenu);*/
  }

  // TODO(you): Add methods as necessary.
  ToMusic(event){
    //console.log(event.detail);
    this.menuContainer.classList.add("inactive");
    this.musicContainer.classList.remove("inactive");

    const URL="https://api.giphy.com/v1/gifs/search?q="+encodeURIComponent(event.detail.gifTag)+"&limit=25&rating=g&api_key=uB40y44EIrfKI9v4rqFflBb5b63dG4Nq";
    //teacher's key:dc6zaTOxFJmzC
    //my key:uB40y44EIrfKI9v4rqFflBb5b63dG4Nq
    const onJsonReady=(json)=>{
      let imgURLlist=[];
      if(json.data.length>2){
        for(let index in json.data) {
          const dumpImg=new Image();//preload,but useless!?
          const tempImg=json.data[index].images.downsized.url;
          dumpImg.src=tempImg;
          imgURLlist.push(tempImg);
        }
        this.musicScreen.init(imgURLlist, event.detail.songValue);
        //this.musicScreen.preload(imgURLlist, event.detail.songValue);
        this.errorContainer.classList.add("inactive");//remove error
      }
      else{
        this.errorContainer.classList.remove("inactive");//show error
      }
    };

    fetch(URL)
      .then(response => response.json())
      .then(onJsonReady);

  }

  /*ToMenu(event){
    this.menuContainer.classList.remove("inactive");
    this.musicContainer.classList.add("inactive");
  }*/
}
