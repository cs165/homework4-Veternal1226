// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(gifareaContainer,imgURL) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.gifareaContainer=gifareaContainer;
    console.log(gifareaContainer);
    this.gif=gifareaContainer.querySelector("gif");
    this.imgURL=imgURL;
    //this.load();
    gif.style.backgroundImage="url("+this.imgURL[0]+")";
  }
  // TODO(you): Add methods as necessary.
  /*load(){
    for(var i=0;i<this.imgURL.length;i++){
      const image=new Image();
      image.src=this.imgURL[i];
    }
  }*/
}
