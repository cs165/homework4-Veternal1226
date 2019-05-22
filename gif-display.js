// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(gifareaContainer,imgURL) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.gifareaContainer=gifareaContainer;
    //console.log(gifareaContainer);
    this.foreGif=gifareaContainer.querySelector(".gif#fore");
    this.backGif=gifareaContainer.querySelector(".gif#back");
    this.imgURL=imgURL;
    this.foreActive=true;
    this.nowIndex=-1;

    this._Kick=this._Kick.bind(this);

    document.addEventListener("Kick",this._Kick);

    this.ChangeGif(this.foreGif);
    this.ChangeGif(this.backGif);
    //this.load();
    //this.gif.style.backgroundImage="url("+this.imgURL[0]+")";
  }
  // TODO(you): Add methods as necessary.

  ChangeGif(gifContainer){
    var index;
    do{
      index=Math.floor(Math.random()*this.imgURL.length);
    }while(this.nowIndex===index);
    gifContainer.style.backgroundImage="url("+this.imgURL[index]+")";
    this.nowIndex=index;
  }

  _Kick(){
    if(this.foreActive){
      this.foreActive=false;
      this.ChangeGif(this.backGif);
    }
    else{
      this.foreActive=true;
      this.ChangeGif(this.foreGif);
    }
    this.foreGif.classList.toogle("active");
    this.backGif.classList.toogle("active");
  }

  /*load(){
    for(var i=0;i<this.imgURL.length;i++){
      const image=new Image();
      image.src=this.imgURL[i];
    }
  }*/
}
