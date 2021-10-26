import { _decorator,Label,Component,director, Prefab,Animation,Vec3,tween,instantiate,Node, SliderComponent, TERRAIN_NORTH_INDEX } from 'cc';

const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = Battle1
 * DateTime = Wed Oct 20 2021 16:37:48 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = battle1.ts
 * FileBasenameNoExtension = battle1
 * URL = db://assets/Scripts/battle1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Battle1')

export class Battle1 extends Component {
    // [1]
    // dummy = '';

    // [2]
    // serializableDummy = 0;
   public player1=class{
     //spade:Node[]//=[];//黑桃组
  spadel:number;//=-1?;//黑桃组顶部指针,一开始指向-1
  spadelen:number;//=0;黑桃组长度
  spaden:Node;//=null;//黑桃节点
  //heart:Node[]//=[];//红心组
  heartl:number;//=0;//红心组顶部指针,一开始指向为-1
  heartlen:number;//=0 红心组长度
  heartn:Node;//=null;//红心节点
  //club:Node[]=[];//梅花组
  clubl:number;//=0;//梅花组顶部指针,一开始指向为-1
  clublen:number;//=0 梅花组长度
  clubn:Node;//=null;//梅花节点
  //diamond:Node[]=[];//方块组
  diamondl:number;//=0;//方块组顶部指针,一开始指向为-1
  diamondlen:number;//=0方块组长度
  diamondn:Node;//=null;;//方块节点
  //handcards:Node[]=[];//卡牌组
  handcardsl:number;//=0;//手牌顶部指针,一开始指向为-1
  handcardslen:number;//=0 手牌组长度
  handcardsn:Node;//卡牌节点
  is_turn:boolean;//=true;//玩家1的回合、玩家1首发
   };
   public player2=class{
     //spade:Node[]//=[];//黑桃组
  spadel:number;//=0;//黑桃组顶部指针,一开始指向-1
  spadelen:number;//=0;黑桃组长度
  spaden:Node;//=null;//黑桃节点
  //heart:Node[]//=[];//红心组
  heartl:number;//=0;//红心组顶部指针,一开始指向为-1
  heartlen:number;//=0 红心组长度
  heartn:Node;//=null;//红心节点
  //club:Node[]=[];//梅花组
  clubl:number;//=0;//梅花组顶部指针,一开始指向为-1
  clublen:number;//=0 梅花组长度
  clubn:Node;//=null;//梅花节点
  //diamond:Node[]=[];//方块组
  diamondl:number;//=0;//方块组顶部指针,一开始指向为-1
  diamondlen:number;//=0方块组长度
  diamondn:Node;//=null;;//方块节点
  //handcards:Node[]=[];//卡牌组
  handcardsl:number;//=0;//手牌顶部指针,一开始指向为-1
  handcardslen:number;//=0 手牌组长度
  handcardsn:Node;//卡牌节点
  is_turn:boolean;//=false;//玩家2的回合
   }
   //实例化玩家
   public p1=new this.player1();
   public p2=new this.player2();
   public temp:number=-1;//放置区顶部索引,即顶部指针
   public taillen:number=0;//放置区扑克牌数量
   public turn:number=1;//记录是哪个玩家的回合，1：玩家1，2：玩家2
   //public p1=new player1();
   //public p2=new player2();
   public count:number=52;//用来记录卡组剩余扑克牌数量
   public count1:number=89;
  public count2:number=89;
   //实例化倒计时
   //public t1=new Time1();
   //public t2=new Time2();
   @property({type:Label})
     public s1:Label
     @property({type:Label})
     public h1:Label
     @property({type:Label})
     public c1:Label
     @property({type:Label})
     public d1:Label
     @property({type:Label})
     public s2:Label
     @property({type:Label})
     public h2:Label
     @property({type:Label})
     public c2:Label
     @property({type:Label})
     public d2:Label
   @property({type:Node})
    public red1:Node
    @property({type:Node})
    public red2:Node
    @property({type:Node})
    public green1:Node
    @property({type:Node})
    public green2:Node
    @property({type:Label})
      public time1:Label;
    @property({type:Node})
      public t1:Node;
    @property({type:Label})
      public time2:Label;
    @property({type:Node})
      public t2:Node=null;
    //@property({type:Script})
      //public ba1=null;
    @property({type:Node})
      public hand1:Node=null;
    @property({type:Node})
      public hand2:Node=null;
    @property({type:Node})
      public spade1:Node=null;
    @property({type:Node})
      public spade2:Node=null;
    @property({type:Node})
      public heart1:Node=null;
    @property({type:Node})
      public heart2:Node=null;
    @property({type:Node})
      public club1:Node=null;
    @property({type:Node})
      public club2:Node=null;
    @property({type:Node})
      public diamond1:Node=null;
    @property({type:Node})
      public diamond2:Node=null;
    @property({type:Node})
      public bg_wnode:Node = null;
    @property({type:Node})
      public shipnode:Node = null;
    // serializableDummy = 0;
    @property({type:Node})
      private Bg:Node=null;
    @property({type:Node})
      private tail:Node=null;
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
    //@property({type:Prefab})
    //  private back=null;
    //随机打乱数组
    getRandomArr():number[]{
      var array:number[]=new Array;
      let i:number;
      for(i=1;i<=52;i++){
        array[i-1]=i;
      }
      array.sort(function(){return 0.5-Math.random();});
      return array;
    }
    callback1(){
      if(this.count1>=1){
        if(this.count1!=0){
            this.time1.string=String(this.count1);
            this.count1=this.count1-1;
        }
        //倒计时结束还没出牌，游戏定胜负
        if(this.count1==0){
            this.time1.string="0";
            if(this.p1.is_turn)
            {
              director.loadScene("result1");
            }
            if(this.p2.is_turn){
              director.loadScene("result2");
            }
        }
    }
    }
    callback2(){
      if(this.count2>=1){
        if(this.count2!=0){
            this.time2.string=String(this.count2);
            this.count2=this.count2-1;
        }
        //倒计时结束还没出牌，游戏定胜负
        if(this.count2==0){
            this.time2.string="0";
            this.time1.string="0";
            if(this.p1.is_turn)
            {
              director.loadScene("result1");
            }
            if(this.p2.is_turn){
              director.loadScene("result2");
            }
        }
    }
    }
    //判断出的牌是否和放置组顶部花色相同
    stopTimeCutdown1(){
      this.unschedule(this.callback1);
    }
    stopTimeCutdown2(){
      this.unschedule(this.callback2);
    }
    
    reset1(){
      this.time1.string="90";//重置倒计时
      this.count1=89;
    }
    reset2(){
      this.time2.string="90";//重置倒计时
      this.count2=89;
    }
    
    startTime1(){
      this.t1.active=true;//激活该计时节点
      this.time1.string="90";
      this.schedule(this.callback1,1,90,1);
  }
  startTime2(){
    //this.t2.active=true;//激活该计时节点
    //var t=new Battle1();
    //this.time2.string="90";
    //var count1=89;
    this.t2.active=true;//激活该计时节点
      //var t=new Battle1();
    this.time2.string="90";
    this.schedule(this.callback2,1,90,1);
}
    judge(){
      if(this.taillen>1){//如果放置区有牌,大于1表示除了新放进去的牌以外本来就有旧牌，才有可能吃牌
        var q=this.taillen-1;//存放多重复次数,总共存放this.taillen次
        //var p=this.temp;
        //var plem=this.taillen;
        var selfpre:Node=this.tail.children[this.temp-1];//取原来顶部的牌
        var selfnow:Node=this.tail.children[this.temp];//取最新的牌，即新放进去的牌
        //如果花色和顶部牌相同
        if(selfnow.name==selfpre.name){
          //如果是玩家1的操作
          //取反
          if(this.turn==2){
            //清除放置区
            this.schedule(function(){
              //this.Tails[this.temp]=null;
              var self2:Node=this.tail.children[this.temp];//self2为顶部扑克牌
              this.temp--;
              this.taillen--;
              this.tail.removeChild(self2);
              self2.removeFromParent();
              this.Bg.addChild(self2);
              self2.parent=this.Bg;
              tween(self2)
                    .to(0.5,{position: new Vec3(-302,-35,0)})
                    .repeat(1)
                    .start()
              setTimeout(()=>{
                switch(self2.name){
                  case("spade"):
                  //setTimeout(function(){
                      self2.removeFromParent();
                      this.Bg.removeChild(self2);
                      this.p1.spaden.addChild(self2);
                      self2.parent=this.p1.spaden;
                      this.p1.spadel++;
                      this.p1.spadelen++;
                      self2.active=false;//隐藏该扑克牌
                    //},1000)
                      break;
                  case("heart"):
                //setTimeout(function(){
                    self2.removeFromParent();
                    this.Bg.removeChild(self2);
                    this.p1.heartn.addChild(self2);
                    self2.parent=this.p1.heartn;
                    this.p1.heartl++;
                    this.p1.heartlen++;
                    self2.active=false;//隐藏该扑克牌
                //},1000)
                    break;
                  case("club"):
                //setTimeout(function(){
                    self2.removeFromParent();
                    this.Bg.removeChild(self2);
                    this.p1.clubn.addChild(self2);
                    self2.parent=this.p1.clubn;
                    this.p1.clubl++;
                    this.p1.clublen++;
                    self2.active=false;//隐藏该扑克牌
                //},1000)
                    break;
                case("diamond"):
                //setTimeout(function(){
                  self2.removeFromParent();
                  this.Bg.removeChild(self2);
                  this.p1.diamondn.addChild(self2);
                  self2.parent=this.p1.diamondn;
                  this.p1.diamondl++;
                  this.p1.diamondlen++;
                  self2.active=false;//隐藏该扑克牌
                //},1000)
                  break;
              }
              },500)      
              this.p1.handcardsl++;
              this.p1.handcardslen++;
            }.bind(this),0.1,q,0);
            
          }
          if(this.turn==1){
            //清除放置区
            this.schedule(function(){
              //this.Tails[this.temp]=null;
              var self2:Node=this.tail.children[this.temp];//self2为顶部扑克牌
              this.temp--;
              this.taillen--;
              this.p2.handcardsl++;
              this.p2.handcardslen++;
              this.tail.removeChild(self2);
              self2.removeFromParent();
              this.Bg.addChild(self2);
              self2.parent=this.Bg;
              tween(self2)
                    .to(0.5,{position: new Vec3(302,-35,0)})
                    .repeat(1)
                    .start()
              setTimeout(()=>{
                switch(self2.name){
                  case("spade"):
                  //setTimeout(function(){
                      self2.removeFromParent();
                      this.Bg.removeChild(self2);
                      this.p2.spaden.addChild(self2);
                      self2.parent=this.p2.spaden;
                      this.p2.spadel++;
                      this.p2.spadelen++;
                      self2.active=false;//隐藏该扑克牌
                    //},1000)
                      break;
                  case("heart"):
                //setTimeout(function(){
                    self2.removeFromParent();
                    this.Bg.removeChild(self2);
                    this.p2.heartn.addChild(self2);
                    self2.parent=this.p2.heartn;
                    this.p2.heartl++;
                    this.p2.hratelen++;
                  self2.active=false;//隐藏该扑克牌
                //},1000)
                    break;
                  case("club"):
                //setTimeout(function(){
                    self2.removeFromParent();
                    this.Bg.removeChild(self2);
                    this.p2.clubn.addChild(self2);
                    self2.parent=this.p2.clubn;
                    this.p2.clubl++;
                    this.p2.clublen++;
                  self2.active=false;//隐藏该扑克牌
                //},1000)
                    break;
                case("diamond"):
                //setTimeout(function(){
                  self2.removeFromParent();
                  this.Bg.removeChild(self2);
                  this.p2.diamondn.addChild(self2);
                  self2.parent=this.p2.diamondn;
                  this.p2.diamondl++;
                  this.p2.diamondlen++;
                  self2.active=false;//隐藏该扑克牌
                //},1000)
                  break;
              }
              },500)      
              
            }.bind(this),0.1,q,0);
            
          }
        }
      }
    }
    
    playspade1(){
      //var scris1=this.bas1.getComponent("battle1");
      if(!(this.p1.is_turn)&&this.p2.is_turn&&this.turn==2) return;//不是该玩家的回合，点击无效
      if(this.p1.spadelen>0){//如果该花色牌数量大于0
         //暂停倒计时，重置倒计时
         this.stopTimeCutdown1();
         this.reset1();
         //切换回合  
         this.red1.active=true;
        this.green1.active=false;
        this.red2.active=false;
        this.green2.active=true;
         this.turn=2;
         this.p1.is_turn=false;
         this.p2.is_turn=true;
          var self3=this.p1.spaden.children[this.p1.spadel];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p1.spadel--;//
          this.p1.spadelen--;
          this.p1.handcardsl--;
          this.p1.handcardslen--;
          this.p1.spaden.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime2();
          },500)
      }
  }
  
  playspade2(){
    if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1) return;//不是该玩家的回合，点击无效
      if(this.p2.spadelen>0){//如果该花色牌数量大于0
          this.stopTimeCutdown2();
          this.reset2();
            //切换回合  
            this.red1.active=false;
        this.green1.active=true;
        this.red2.active=true;
        this.green2.active=false;
          this.turn=1;
          this.p1.is_turn=true;
          this.p2.is_turn=false;
          var self3=this.p2.spaden.children[this.p2.spadel];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p2.spadel--;//
          this.p2.spadelen--;
          this.p2.handcardsl--;
          this.p2.handcardslen--;
          this.p2.spaden.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            //暂停倒计时，重置倒计时
            this.startTime1();
          },500)
      }
  }
  playheart1(){
    if(!(this.p1.is_turn)&&this.p2.is_turn&&this.turn==2) return;//不是该玩家的回合，点击无效
    if(this.p1.heartlen>0){//如果该花色牌数量大于0
        //暂停倒计时，重置倒计时
        this.stopTimeCutdown1();
        this.reset1();
        //切换回合  
        this.red1.active=true;
        this.green1.active=false;
        this.red2.active=false;
        this.green2.active=true;
        this.turn=2;
        this.p1.is_turn=false;
        this.p2.is_turn=true;
        var self3=this.p1.heartn.children[this.p1.heartl];//self3为该花色最后放入的扑克牌
        //this.p1.spade[this.p1.spadel]=null;//清除
        this.p1.heartl--;//
        this.p1.heartlen--;
        this.p1.handcardsl--;
        this.p1.handcardslen--;
        this.p1.heartn.removeChild(self3);//移除该子节点即该扑克牌
        self3.removeFromParent();
        self3.active=true;
        self3.parent=this.Bg;
        this.Bg.addChild(self3);
        tween(self3)
            .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
            .repeat(1)
            .start()
        setTimeout(()=>{
          self3.removeFromParent();
          this.Bg.removeChild(self3);
          self3.parent=this.tail;//把该牌挂到放置区上
          this.tail.addChild(self3);
          this.taillen++;
          this.temp++;
          this.judge();//判断花色是否和顶部花色一样
          //暂停倒计时，重置倒计时
          this.startTime2();
        },500)
    }
}
playheart2(){
  if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1) return;//不是该玩家的回合，点击无效
      if(this.p2.heartlen>0){//如果该花色牌数量大于0
          //暂停倒计时，重置倒计时
          this.stopTimeCutdown2();
          this.reset2();
          //切换回合  
          this.red1.active=false;
        this.green1.active=true;
        this.red2.active=true;
        this.green2.active=false;
          this.turn=1;
          this.p1.is_turn=true;
          this.p2.is_turn=false;
          var self3=this.p2.heartn.children[this.p2.heartl];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p2.heartl--;//
          this.p2.heartlen--;
          this.p2.handcardsl--;
          this.p2.handcardslen--;
          this.p2.heartn.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime1();
          },500)
      }
}
playclub1(){
  if(!(this.p1.is_turn)&&this.p2.is_turn&&this.turn==2) return;//不是该玩家的回合，点击无效
      if(this.p1.clublen>0){//如果该花色牌数量大于0
          //暂停倒计时，重置倒计时
          this.stopTimeCutdown1();
          this.reset1();
          //切换回合  
          this.red1.active=true;
        this.green1.active=false;
        this.red2.active=false;
        this.green2.active=true;
          this.turn=2;
          this.p1.is_turn=false;
          this.p2.is_turn=true;
          var self3=this.p1.clubn.children[this.p1.clubl];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p1.clubl--;//
          this.p1.clublen--;
          this.p1.handcardsl--;
          this.p1.handcardslen--;
          this.p1.clubn.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime2();
          },500)
      }
}
playclub2(){
  if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1) return;//不是该玩家的回合，点击无效
      if(this.p2.clublen>0){//如果该花色牌数量大于0
          //暂停倒计时，重置倒计时
          this.stopTimeCutdown2();
          this.reset2();
          //切换回合  
          this.red1.active=false;
        this.green1.active=true;
        this.red2.active=true;
        this.green2.active=false;
          this.turn=1;
          this.p1.is_turn=true;
          this.p2.is_turn=false;
          var self3=this.p2.clubn.children[this.p2.clubl];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p2.clubl--;//
          this.p2.clublen--;
          this.p2.handcardsl--;
          this.p2.handcardslen--;
          this.p2.clubn.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime1();
          },500)
      }
}
playdiamond1(){
  if(!(this.p1.is_turn)&&this.p2.is_turn&&this.turn==2) return;//不是该玩家的回合，点击无效
      if(this.p1.diamondlen>0){//如果该花色牌数量大于0
          //暂停倒计时，重置倒计时
          this.stopTimeCutdown1();
          this.reset1();
          //切换回合  
          this.red1.active=true;
        this.green1.active=false;
        this.red2.active=false;
        this.green2.active=true;
          this.turn=2;
          this.p1.is_turn=false;
          this.p2.is_turn=true;
          var self3=this.p1.diamondn.children[this.p1.diamondl];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p1.diamondl--;//
          this.p1.diamondlen--;
          this.p1.handcardsl--;
          this.p1.handcardslen--;
          this.p1.diamondn.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime2();
          },500)
      }
}
playdiamond2(){
  if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1) return;//不是该玩家的回合，点击无效
      if(this.p2.diamondlen>0){//如果该花色牌数量大于0
          //暂停倒计时，重置倒计时
          this.stopTimeCutdown2();
          this.reset2();
          //切换回合  
          this.red1.active=false;
        this.green1.active=true;
        this.red2.active=true;
        this.green2.active=false;
          this.turn=1;
          this.p1.is_turn=true;
          this.p2.is_turn=false;
          var self3=this.p2.diamondn.children[this.p2.diamondl];//self3为该花色最后放入的扑克牌
          //this.p1.spade[this.p1.spadel]=null;//清除
          this.p2.diamondl--;//
          this.p2.diamondlen--;
          this.p2.handcardsl--;
          this.p2.handcardslen--;
          this.p2.diamondn.removeChild(self3);//移除该子节点即该扑克牌
          self3.removeFromParent();
          self3.active=true;
          self3.parent=this.Bg;
          this.Bg.addChild(self3);
          tween(self3)
              .to(0.5,{position: new Vec3(0,0,0)})//将牌移动到中心
              .repeat(1)
              .start()
          setTimeout(()=>{
            self3.removeFromParent();
            this.Bg.removeChild(self3);
            self3.parent=this.tail;//把该牌挂到放置区上
            this.tail.addChild(self3);
            this.taillen++;
            this.temp++;
            this.judge();//判断花色是否和顶部花色一样
            this.startTime1();
          },500)
      }
}

    //游戏结束
    gameover(){
      //玩家1获胜，玩家2失败
      let len1=this.p1.handcardslen;
      let len2=this.p2.handcardslen;
      if(len1<len2)
      {
        director.loadScene("result2");
      }
      //玩家1失败，玩家2获胜
      if(len1>len2){
        director.loadScene("result1");
      }
      //玩家1玩家2平手
      if(len1==len2){
        director.loadScene("result3");
      }
    }
    
    //初始化卡牌组
    initCard(){
      var i=0;
      //var j=1;
      var namep=0;
      var cot=this.count;
      var array:number[]=new Array;
      array=this.getRandomArr();//生成随机标签1-52
      this.schedule(function() {
          //var card:Node=instantiate(this.back);
      //实例化扑克牌
        var tag:number=array[i];
        //var name:String;
        //黑桃
        if(tag>=1&&tag<=13){
          namep=0;
        }
        //红心
        if(tag>=14&&tag<=26){
          namep=1;
        }
        //梅花
        if(tag>=27&&tag<=39){
          namep=2;
        }
        //方块
        if(tag>=40&&tag<=52){
          namep=3;
        }
        //根据标签实例化预制体
        switch(tag){
            case 1:
                var card:Node=instantiate(this.poker1);
                break;
            case 2:
                var card:Node=instantiate(this.poker2);
                break;
            case 3:
                var card:Node=instantiate(this.poker3);
                break;
            case 4:
                var card:Node=instantiate(this.poker4);
                break;
            case 5:
                var card:Node=instantiate(this.poker5);
                break;
            case 6:
                var card:Node=instantiate(this.poker6);
                break;
            case 7:
                var card:Node=instantiate(this.poker7);
                break;
            case 8:
                var card:Node=instantiate(this.poker8);
                break;
            case 9:
                var card:Node=instantiate(this.poker9);
                break;
            case 10:
                var card:Node=instantiate(this.poker10);
                break;
            case 11:
                var card:Node=instantiate(this.poker11);
                break;
            case 12:
                var card:Node=instantiate(this.poker12);
                break;
            case 13:
                var card:Node=instantiate(this.poker13);
                break;
            case 14:
                var card:Node=instantiate(this.poker14);
                break;
            case 15:
                var card:Node=instantiate(this.poker15);
                break;
            case 16:
                var card:Node=instantiate(this.poker16);
                break;
            case 17:
                var card:Node=instantiate(this.poker17);
                break;
            case 18:
                var card:Node=instantiate(this.poker18);
                break;
            case 19:
                var card:Node=instantiate(this.poker19);
                break;
            case 20:
                var card:Node=instantiate(this.poker20);
                break;
            case 21:
                var card:Node=instantiate(this.poker21);
                break;
            case 22:
                var card:Node=instantiate(this.poker22);
                break;
            case 23:
                var card:Node=instantiate(this.poker23);
                break;
            case 24:
                var card:Node=instantiate(this.poker24);
                break;
            case 25:
                var card:Node=instantiate(this.poker25);
                break;
            case 26:
                var card:Node=instantiate(this.poker26);
                break;
            case 27:
                var card:Node=instantiate(this.poker27);
                break;
            case 28:
                var card:Node=instantiate(this.poker28);
                break;
            case 29:
                var card:Node=instantiate(this.poker29);
                break;
            case 30:
                var card:Node=instantiate(this.poker30);
                break;
            case 31:
                var card:Node=instantiate(this.poker31);
                break;
            case 32:
                var card:Node=instantiate(this.poker32);
                break;
            case 33:
                var card:Node=instantiate(this.poker33);
                break;
            case 34:
                var card:Node=instantiate(this.poker34);
                break;
            case 35:
                var card:Node=instantiate(this.poker35);
                break;
            case 36:
                var card:Node=instantiate(this.poker36);
                break;
            case 37:
                var card:Node=instantiate(this.poker37);
                break;
            case 38:
                var card:Node=instantiate(this.poker38);
                break;
            case 39:
                var card:Node=instantiate(this.poker39);
                break;
            case 40:
                var card:Node=instantiate(this.poker40);
                break;
            case 41:
                var card:Node=instantiate(this.poker41);
                break;
            case 42:
                var card:Node=instantiate(this.poker42);
                break;
            case 43:
                var card:Node=instantiate(this.poker43);
                break;
            case 44:
                var card:Node=instantiate(this.poker44);
                break;
            case 45:
                var card:Node=instantiate(this.poker45);
                break;
            case 46:
                var card:Node=instantiate(this.poker46);
                break;
            case 47:
                var card:Node=instantiate(this.poker47);
                break;
            case 48:
                var card:Node=instantiate(this.poker48);
                break;
            case 49:
                var card:Node=instantiate(this.poker49);
                break;
            case 50:
                var card:Node=instantiate(this.poker50);
                break;
            case 51:
                var card:Node=instantiate(this.poker51);
                break;
            case 52:
                var card:Node=instantiate(this.poker52);
                break;
            
        }
      //给节点标注花色
      switch(namep){
        case 0:
            card.name="spade";
            break;
        case 1:
            card.name="heart";
            break;
        case 2:
            card.name="club";
            break;
        case 3:
            card.name="diamond";
            break;
  }
      //将牌添加到背景上
      this.Bg.addChild(card);
      card.parent=this.Bg;
      //设置每张牌的初始位置、大小、旋转角度
      card.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*i),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*i));
      card.setScale(0.4,0.4);
      card.setRotationFromEuler(0,0,6.923*i);
      //this.Cards[i]=card;//同时将牌记录到卡组
      //注册扑克牌点击事件
      card.on(Node.EventType.TOUCH_END,(event)=>{
        //将被点击的牌添加到放置区
        //console.log(this.count);
        card.removeFromParent();
        this.tail.addChild(card);
        card.parent=this.tail;
        //this.Tails[this.temp]=card;
        this.temp++;//指向tail节点的子节点的顶部
        this.taillen++;//放置区数量加1
        //console.log(this.taillen);
        switch(this.p1.is_turn){
          case true:
            this.red1.active=true;
            this.green1.active=false;
            this.red2.active=false;
            this.green2.active=true;
            this.stopTimeCutdown1();
            this.reset1();
            this.startTime2();
            this.turn=2;
            this.p1.is_turn=false;
            this.p2.is_turn=true;
            break;
          case false:
            this.red1.active=false;
            this.green1.active=true;
            this.red2.active=true;
            this.green2.active=false;
            this.stopTimeCutdown2();
            this.reset2();
            this.startTime1();
            this.turn=1;
            this.p1.is_turn=true;
            this.p2.is_turn=false;
        }

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
      
      setTimeout(()=>{
          this.judge();
          //this.ok=1;
          //重置倒计时并切换回合
        
      //关闭点击事件，即每张牌只能点击一次
        card.pauseSystemEvents(true);
        
        //判断花色是否相同
        },1100);
        setTimeout(()=>{
          this.count--;//卡组数量减1
          if(this.count==0){
            this.gameover();
          }
        },2100)
      },card); 
        i=i+1;
        }, 0.03, 51, 5.5);
        //this.level=this.level+1;
     //}
    }
    
    //onLoad(){}

    start () {
        // [3]
        //var level=0;
        //初始化
        this.update(1);
        this.red1.active=false;
        this.green1.active=true;
        this.red2.active=true;
        this.green2.active=false;
        this.p1.handcardsn=this.hand1;
        this.p1.handcardsl=-1;
        this.p1.handcardslen=0;
        this.p2.handcardsn=this.hand2;
        this.p2.handcardsl=-1;
        this.p2.handcardslen=0;
        //给玩家的花色即相关信息初始化
        this.p1.spaden=this.spade1;
        this.p1.heartn=this.heart1;
        this.p1.clubn=this.club1;
        this.p1.diamondn=this.diamond1;
        this.p1.spadel=-1;
        this.p1.spadelen=0;
        this.p1.heartl=-1;
        this.p1.heartlen=0;
        this.p1.clubl=-1;
        this.p1.clublen=0;
        this.p1.diamondl=-1;
        this.p1.diamondlen=0;
        this.p2.spaden=this.spade2;
        this.p2.heartn=this.heart2;
        this.p2.clubn=this.club2;
        this.p2.diamondn=this.diamond2;
        this.p2.spadel=-1;
        this.p2.spadelen=0;
        this.p2.heartl=-1;
        this.p2.spadelen=0;
        this.p2.heartl=-1;
        this.p2.heartlen=0;
        this.p2.clubl=-1;
        this.p2.clublen=0;
        this.p2.diamondl=-1;
        this.p2.diamondlen=0;
        this.p1.is_turn=true;
        this.p2.is_turn=false;
        this.turn=1;
        setTimeout(()=>{this.bg_wnode.active=false;
            this.shipnode.active=false;},4500);
        this.initCard();
        //while(this.level==0){};
        //给玩家的手牌即相关信息初始化
        
        //7065ms后开始回合
        
        //setTimeout(()=>{
          //this.startTime1();
         
          /*
          for(let i=0;i<51;i++)
          {
            var card:Node=this.Bg.children[i];//按顺序获取初始化出来的扑克牌
            //注册扑克牌点击事件,所有的牌都显示出来后再注册
            card.on(Node.EventType.TOUCH_END,(event)=>{
              //将被点击的牌添加到放置区
              card.pauseSystemEvents(true);
              this.count=this.count-1;//卡组数量减1
              card.removeFromParent();
              this.tail.addChild(card);
              card.parent=this.tail;
              //this.Tails[this.temp]=card;
              this.temp=this.temp+1;//指向tail节点的子节点的顶部
              this.taillen=this.taillen+1;//放置区数量加1
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
              
              /*
              this.judge();
              if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){
                this.stopTimeCutdown1();
                this.reset1();
              }
              if(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){
                this.stopTimeCutdown2();
                this.reset2();
              }
              */
          //  },card); 
         // }
        
       
         /*
          while(1){
            //如果卡组没牌了，游戏结束
          if(this.count==0)
          {
           this.gameover();//判断结果
          }
          //玩家1的回合
          if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){
            this.startTime1();//开始倒计时
            while(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){}//卡住
            //this.t1.stopTimeCutdown();
           // this.t1.reset1();
          }
          //在每个玩家操作前都先判断是否游戏结束
          if(this.count==0)
          {
           this.gameover();//判断结果
          }
          //玩家2的回合
          if(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){
            this.startTime2();//开始倒计时
            while(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){}//卡住
            //this.t2.stopTimeCutdown();
            //this.t2.reset2();
          }
        }
        */
        //},7065);
        
    }

     update (deltaTime: number) {
         this.s1.string=String(this.p1.spadelen);
         this.h1.string=String(this.p1.heartlen);
         this.c1.string=String(this.p1.clublen);
         this.d1.string=String(this.p1.diamondlen);
         this.s2.string=String(this.p2.spadelen);
         this.h2.string=String(this.p2.heartlen);
         this.c2.string=String(this.p2.clublen);
         this.d2.string=String(this.p2.diamondlen);
     }
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