
import { _decorator,Tween,ColorKey, Animation,Color,Component,director,Canvas,instantiate,Prefab, Node, BatchedSkinningModelComponent, tween, Vec3, repeat, Sprite, CachedArray, math, pingPong } from 'cc';
import { Start } from './start';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Test
 * DateTime = Mon Oct 18 2021 20:53:17 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = test.ts
 * FileBasenameNoExtension = test
 * URL = db://assets/Scripts/test.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

//玩家1(1p)
var level=0;
var i=0//初始化索引
var temp=0;//放置区顶部索引
var Cards:Node[]=[];//卡组
var Tails:Node[]=[];//放置区
var turn:string=null;//记录是哪个玩家的回合
class player1{
  spade:Node[]=[];//黑桃组
  spadel:number=0;//黑桃组索引
  spaden:Node;//黑桃节点
  heart:Node[]=[];//红心组
  heartl:number=0;//红心组索引
  heartn:Node;//红心节点
  club:Node[]=[];//梅花组
  clubl:number=0;//梅花组索引
  clubn:Node;//梅花节点
  diamond:Node[]=[];//方块组
  diamondl:number=0;//方块组索引
  diamondn:Node;//方块节点
  handcards:Node[]=[];//卡牌组
  handcardsl:number=0;//手牌索引
  handcardsn:Node;//卡牌节点
  is_turn=true;//玩家1的回合、玩家1首发
}
//玩家2(2p)
class player2{
  spade:Node[]=[];//黑桃组
  spadel:number=0;//黑桃组索引
  spaden:Node;//黑桃节点
  heart:Node[]=[];//红心组
  heartl:number=0;//红心组索引
  heartn:Node;//红心节点
  club:Node[]=[];//梅花组
  clubl:number=0;//梅花组索引
  clubn:Node;//梅花节点
  diamond:Node[]=[];//方块组
  diamondl:number=0;//方块组索引
  diamondn:Node;//方块节点
  handcards:Node[]=[];//卡牌组
  handcardsl:number=0;//手牌索引
  handcardsn:Node;//卡牌节点
  is_turn=false;//玩家2的回合
}
//实例化玩家
var p1=new player1;
var p2=new player2;

@ccclass('Test')
export class Test extends Component {
    // [1]
    // dummy = '';

    // [2]
    //@property({type:Node})
    //  public bg_wnode = null;
    //@property({type:Node})
    //  public shipnode = null;
    // serializableDummy = 0;
    
    @property({type:Node})
      private Bg=null;
    @property({type:Node})
      private tail=null;
    @property({type:Prefab})
      private Back=null;
    @property({type:Node})
      private timenode1=null;
    @property({type:Node})
      private timenode2=null;
      /*
    @property({type:Prefab})
      private poker1 = null;
    @property({type:Prefab})
      private poker2 = null; 
    @property({type:Prefab})
      private poker3 = null; 
    @property({type:Prefab})
      private poker4 = null; 
    @property({type:Prefab})
      private poker5 = null; 
    @property({type:Prefab})
      private poker6 = null; 
    @property({type:Prefab})
      private poker7 = null; 
    @property({type:Prefab})
      private poker8 = null; 
    @property({type:Prefab})
      private poker9 = null; 
    @property({type:Prefab})
      private poker10 = null; 
    @property({type:Prefab})
      private poker11 = null; 
    @property({type:Prefab})
      private poker12 = null; 
    @property({type:Prefab})
      private poker13 = null; 
    @property({type:Prefab})
      private poker14 = null; 
    @property({type:Prefab})
      private poker15 = null; 
    @property({type:Prefab})
      private poker16 = null; 
    @property({type:Prefab})
      private poker17 = null; 
    @property({type:Prefab})
      private poker18 = null; 
    @property({type:Prefab})
      private poker19 = null; 
    @property({type:Prefab})
      private poker20 = null; 
    @property({type:Prefab})
      private poker21 = null; 
    @property({type:Prefab})
      private poker22 = null; 
    @property({type:Prefab})
      private poker23 = null; 
    @property({type:Prefab})
      private poker24 = null; 
    @property({type:Prefab})
      private poker25 = null; 
    @property({type:Prefab})
      private poker26 = null; 
    @property({type:Prefab})
      private poker27 = null; 
    @property({type:Prefab})
      private poker28 = null; 
    @property({type:Prefab})
      private poker29 = null; 
    @property({type:Prefab})
      private poker30 = null; 
    @property({type:Prefab})
      private poker31 = null; 
    @property({type:Prefab})
      private poker32 = null; 
    @property({type:Prefab})
      private poker33 = null; 
    @property({type:Prefab})
      private poker34 = null; 
    @property({type:Prefab})
      private poker35 = null; 
    @property({type:Prefab})
      private poker36 = null; 
    @property({type:Prefab})
      private poker37 = null; 
    @property({type:Prefab})
      private poker38 = null; 
    @property({type:Prefab})
      private poker39 = null; 
    @property({type:Prefab})
      private poker40 = null; 
    @property({type:Prefab})
      private poker41 = null;   
    @property({type:Prefab})
      private poker42 = null; 
    @property({type:Prefab})
      private poker43 = null; 
    @property({type:Prefab})
      private poker44 = null; 
    @property({type:Prefab})
      private poker45 = null; 
    @property({type:Prefab})
      private poker46 = null; 
    @property({type:Prefab})
      private poker47 = null; 
    @property({type:Prefab})
      private poker48 = null; 
    @property({type:Prefab})
      private poker49 = null; 
    @property({type:Prefab})
      private poker50 = null; 
    @property({type:Prefab})
      private poker51 = null; 
    @property({type:Prefab})
      private poker52 = null; 
      */
    
    judge(){
      if(temp>0){
        //如果花色和顶部牌相同
        if(Tails[temp-1].name==Tails[temp].name){
          //如果是玩家1的操作
          if(turn=="1p"){
            //清除放置区
            this.schedule(function(){
              Tails[temp]=null;
              let self2=this.tail.chidren[temp];
              this.tail.removeChild(self2);
              self2.removeFromParent();
              switch(self2.name){
                case("spade"):{
                  p1.spaden.addChild=self2;
                  p1.spadel++;
                  p1.spade[p1.spadel]=self2;
                }
                case("heart"):{
                  p1.heartn.addChild=self2;
                  p1.heartl++;
                  p1.heart[p1.heartl]=self2;
                }
                case("club"):{
                  p1.clubn.addChild=self2;
                  p1.clubl++;
                  p1.club[p1.clubl]=self2;
                }
                case("diamond"):{
                  p1.diamondn.addChild=self2;
                  p1.diamondl++;
                  p1.diamond[p1.diamondl]=self2;
                }
              }
              p1.handcardsn.addChild=self2;
              p1.handcardsl++;
              p1.handcards[p1.handcardsl]=self2;
              tween(self2)
                .to(1,{position: new Vec3(693,85,0)})
                .repeat(1)
                .start()
                setTimeout(function(){
                  self2.active=false;//隐藏该扑克牌
                },1000)
            },0.1,temp+1,1200);
            
          }
          //如果是玩家2的操作
          if(turn=="2p"){
             //清除放置区
             this.schedule(function(){
              Tails[temp]=null;
              let self2=this.tail.chidren[temp];
              this.tail.removeChild(self2);
              self2.removeFromParent();
              switch(self2.name){
                case("spade"):{
                  p2.spaden.addChild=self2;
                  p2.spadel++;
                  p2.spade[p2.spadel]=self2;
                }
                case("heart"):{
                  p2.heartn.addChild=self2;
                  p2.heartl++;
                  p2.heart[p2.heartl]=self2;
                }
                case("club"):{
                  p2.clubn.addChild=self2;
                  p2.clubl++;
                  p2.club[p2.clubl]=self2;
                }
                case("diamond"):{
                  p2.diamondn.addChild=self2;
                  p2.diamondl++;
                  p2.diamond[p2.diamondl]=self2;
                }
              }
              p1.handcardsn.addChild=self2;
              p1.handcardsl++;
              p1.handcards[p2.handcardsl]=self2;
              tween(self2)
                .to(1,{position: new Vec3(90,85,0)})
                .repeat(1)
                .start()
              setTimeout(function(){
                self2.active=false;//隐藏该扑克牌
              },1000)
            },0.1,temp+1,1200);
          }
        }
      }
    }

    //随机打乱数组
    
    getRandomArr():number[]{
      var array:number[]=new Array;
      let i:number;
      for(i=1;i<=52;i++){
        array[i]=i;
      }
      array.sort(function(){return 0.5-Math.random();});
      return array;
    }
    
    //暂停运行代码
    //sleep(d:number){
    //    var t=Date.now();
    //    while(Date.now()-t<=d);
    //}
    //初始化卡牌组
    
    initCard(){
      //let j:number;
      //var array:number[]=new Array;
      /*
      array=this.getRandomArr();
      for(j=1;j<=52;j++){
        //var node:Node=instantiate(this.poker);
        //node.getComponent("Prefab").SpritFrame=new SpriteFrame()
        //var pfront:Node = node.getComponent('front').SpriteFrame;
        //pfront.cc.Sprite
        var i=array[j];
        var name:String;
        //黑桃
        if(i>=1&&i<=13){
          //let node:Node=instantiate(this.poker_spade);
          name="spade";
        }
        //红心
        if(i>=14&&i<=26){
          //let node:Node=instantiate(this.poker_heart);
          name="heart";
        }
        //梅花
        if(i>=27&&i<=39){
          //var node:Node=instantiate(this.poker_club);
          name="club";
        }
        //方块
        if(i>=40&&i<=52){
          //var node:Node=instantiate(this.poker_diamond);
          name="diamond";
        }
        //实例化预制体
        switch(name){
          case "spade":{
            var node:Node;
            node.name="spade";
            switch(i){
              case 1:{
                node=instantiate(this.poker1);
              }
              case 2:{
                node=instantiate(this.poker2);
              }
              case 3:{
                node=instantiate(this.poker3);
              }
              case 4:{
                node=instantiate(this.poker4);
              }
              case 5:{
                node=instantiate(this.poker5);
              }
              case 6:{
                node=instantiate(this.poker6);
              }
              case 7:{
                node=instantiate(this.poker7);
              }
              case 8:{
                node=instantiate(this.poker8);
              }
              case 9:{
                node=instantiate(this.poker9);
              }
              case 10:{
                node=instantiate(this.poker10);
              }
              case 11:{
                node=instantiate(this.poker11);
              }
              case 12:{
                node=instantiate(this.poker12);
              }
              case 13:{
                node=instantiate(this.poker13);
              }
            break;
            }
          }
          case "heart":{
            var node:Node;
            node.name="heart";
            switch(i){
              case 14:{
                node=instantiate(this.poker14);
              }
              case 15:{
                node=instantiate(this.poker15);
              }
              case 16:{
                node=instantiate(this.poker16);
              }
              case 17:{
                node=instantiate(this.poker17);
              }
              case 18:{
                node=instantiate(this.poker18);
              }
              case 19:{
                node=instantiate(this.poker19);
              }
              case 20:{
                node=instantiate(this.poker20);
              }
              case 21:{
                node=instantiate(this.poker21);
              }
              case 22:{
                node=instantiate(this.poker22);
              }
              case 23:{
                node=instantiate(this.poker23);
              }
              case 24:{
                node=instantiate(this.poker24);
              }
              case 25:{
                node=instantiate(this.poker25);
              }
              case 26:{
                node=instantiate(this.poker26);
              }
            break;
            }
          }
          case "club":{
            var node:Node;
            node.name="club";
            switch(i){
              case 27:{
                node=instantiate(this.poker27);
              }
              case 28:{
                node=instantiate(this.poker28);
              }
              case 29:{
                node=instantiate(this.poker29);
              }
              case 30:{
                node=instantiate(this.poker30);
              }
              case 31:{
                node=instantiate(this.poker31);
              }
              case 32:{
                node=instantiate(this.poker32);
              }
              case 33:{
                node=instantiate(this.poker33);
              }
              case 34:{
                node=instantiate(this.poker34);
              }
              case 35:{
                node=instantiate(this.poker35);
              }
              case 36:{
                node=instantiate(this.poker36);
              }
              case 37:{
                node=instantiate(this.poker37);
              }
              case 38:{
                node=instantiate(this.poker38);
              }
              case 39:{
                node=instantiate(this.poker39);
              }
            break;
            }
          }
          case "diamond":{
            var node:Node;
            node.name="diamond";
            switch(i){
              case 40:{
                node=instantiate(this.poker40);
              }
              case 41:{
                node=instantiate(this.poker41);
              }
              case 42:{
                node=instantiate(this.poker42);
              }
              case 43:{
                node=instantiate(this.poker43);
              }
              case 44:{
                node=instantiate(this.poker44);
              }
              case 45:{
                node=instantiate(this.poker45);
              }
              case 46:{
                node=instantiate(this.poker46);
              }
              case 47:{
                node=instantiate(this.poker47);
              }
              case 48:{
                node=instantiate(this.poker48);
              }
              case 49:{
                node=instantiate(this.poker49);
              }
              case 50:{
                node=instantiate(this.poker50);
              }
              case 51:{
                node=instantiate(this.poker51);
              }
              case 52:{
                node=instantiate(this.poker52);
              }
            break;
            }
          }
        }
        this.Bg.addChild(node);
        node.parent=this.Bg;
        node.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*j),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*j));
        node.setScale(0.3,0.3);
        node.setRotationFromEuler(0,0,6.923*j);
        node.active=true;
        Cards[j]=node;
      }
      */
     //for(var i=0;i<52;i++)
    // {
      /*
      this.schedule(function() {
      let card:Node = instantiate(this.Back);
      //将牌添加到背景上
      this.Bg.addChild(card);
      card.parent=this.Bg;
      //设置每张牌的初始位置、大小、旋转角度
      card.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*i),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*i));
      card.setScale(0.37,0.37);
      card.setRotationFromEuler(0,0,6.923*i);
      Cards[i]=card;//同时将牌记录到卡组
      //注册扑克牌点击事件
      card.on(Node.EventType.TOUCH_END,(event)=>{
          //将被点击的牌添加到放置区
          card.removeFromParent();
          this.tail.addChild=card;
          card.parent=this.tail;
          Tails[temp]=card;
          //实现翻牌、牌的移动
          let anim=card.getComponent(Animation);
          anim.play('turn_over1');
          setTimeout(()=>{
            let self1=card.children[0];
            self1.active=true;
            anim.play('turn_over2');
            tween(card)
              .to(1,{position:new Vec3(0,0,0)})
              .repeat(1)
              .start()
        },100);
        //关闭点击事件，即每张牌只能点击一次
          card.pauseSystemEvents(true);
          this.judge();//判断花色是否和顶部牌花色相同
          temp++;
      },card); 
      i=i+1;
        }, 0.03, 52, 0);
     //}
     level=level+1;
    }
    //游戏结束
    gameover(len1:number,len2:number){
      //玩家1获胜，玩家2失败
      if(len1<len2)
      {
        director.loadScene("result1");
      }
      //玩家1失败，玩家2获胜
      if(len1>len2){
        director.loadScene("result2");
      }
    }
    
*/
  }
    start () {
      
        // [3]
        //var level=0;
        //初始化
        //setTimeout(()=>{this.bg_wnode.active=false;
        //    this.shipnode.active=false;},4500);
        //while(level==0){};
        
        //setTimeout(()=>{
        //  this.initCard();
        //},5500);
        
       /*
       this.initCard();
       while(level==0){};
       //游戏开始
       while(1){
         if(Cards.length==0)
         {
          this.gameover(p1.handcards.length,p2.handcards.length);
         }
         //玩家1的回合
         if(p1.is_turn&&!(p2.is_turn)){
           this.timenode1.startTime1();//开始倒计时
           while(p1.is_turn&&!(p2.is_turn)){}
          continue;
         }
         //玩家2的回合
         if(p2.is_turn&&!(p1.is_turn)){
           this.timenode2.startTime2();//开始倒计时
           while(p2.is_turn&&!(p1.is_turn)){}
         }
       }
       */
    }
    

    // update (deltaTime: number) {
    //     // [4]
    // }
  }


/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
