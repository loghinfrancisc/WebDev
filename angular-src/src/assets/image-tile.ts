export class ImageTiles{
    displayImg:string;
    id:number;
    mainImg:string;
    onHoverImg:string;
    entered:boolean;
    route:string;
    title:string;
    shorttext:string;
    longtext:string;
    constructor(disp:string, iden:number,main:string,onhover:string,ent:boolean,rou:string,tit:string,short:string,long:string){
this.displayImg=disp;
this.id=iden;
this.mainImg=main;
this.onHoverImg=onhover;
this.entered=ent;
this.route=rou;
this.title=tit;
this.shorttext=short;
this.longtext=long;
    }
  
  }