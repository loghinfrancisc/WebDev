import { Component, OnInit, Renderer } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import {imageTiles} from '../../../assets/image-tiles.json';
import {ImageTiles} from '../../../assets/image-tile'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
jsonArray=imageTiles;
imgArray:ImageTiles[]=[];

// imageSource:String;
// entered:boolean=false;
constructor() {
  console.log('hohla');
 }
mouseEnter(i:number){
 this.imgArray[i].displayImg=this.imgArray[i].onHoverImg;
this.imgArray[i].entered=true;
}
mouseLeave(i:number){
 this.imgArray[i].displayImg=this.imgArray[i].mainImg;
 this.imgArray[i].entered=false;
}

  ngOnInit() {
  this.jsonArray.forEach(obj => {
   var temp:ImageTiles=new ImageTiles(obj.mainImg,obj.id,obj.mainImg,obj.onHoverImg,obj.entered,obj.route,obj.title,obj.shorttext,obj.longtext);
  this.imgArray.push(temp);
});
 console.log(this.imgArray);
  
  }


 //console.log("Object.keys(ImageJson).length");


}


