
import { _decorator, Enum,Component, Prefab,Animation,Vec3,tween,instantiate,Node, SliderComponent  } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Ttt
 * DateTime = Sun Oct 24 2021 00:58:57 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = ttt.ts
 * FileBasenameNoExtension = ttt
 * URL = db://assets/Scripts/ttt.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Ttt')
export class Ttt extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    public temp=0;//放置区顶部索引,即顶部指针
    public array:number[]=new Array;
    public Cards:Node[]=[];//卡组
    public Tails:Node[]=[];//放置区
    public turn:number=1;//记录是哪个玩家的回合，1：玩家1，2：玩家2
    @property({type:Node})
      public bg_wnode = null;
    @property({type:Node})
      public shipnode = null;
    // serializableDummy = 0;
    @property({type:Node})
      private Bg=null;
    @property({type:Node})
      private tail=null;
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
    @property({type:Prefab})
      private back=null;


    //随机打乱数组
    getRandomArr():number[]{
      var array:number[]=new Array;
      let i:number;
      for(i=1;i<=52;i++){
        array[i-1]=i;
      }
      //array.sort(function(){return 0.5-Math.random();});
      return array;
    }
    //初始化卡牌组
    initCard(){
      var i=0;
      //var j=1;
      var array:number[]=new Array;
      var Cards:Node[]=[];//卡组
      var Tails:Node[]=[];//放置区
      var namep=0;
      array=this.getRandomArr();
      this.schedule(function() {
          //var card:Node=instantiate(this.back);
      //实例化扑克牌
        var tag=array[i];
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
        
      //将牌添加到背景上
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
      this.Bg.addChild(card);
      card.parent=this.Bg;
      //设置每张牌的初始位置、大小、旋转角度
      card.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*i),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*i));
      card.setScale(0.4,0.4);
      card.setRotationFromEuler(0,0,6.923*i);
      Cards[i]=card;//同时将牌记录到卡组
      //注册扑克牌点击事件
      card.on(Node.EventType.TOUCH_END,(event)=>{
          //将被点击的牌添加到放置区
          card.removeFromParent();
          this.tail.addChild=card;
          card.parent=this.tail;
          Tails[i]=card;
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
        },card); 
        i=i+1;
        //j=j+1;
        }, 0.03, 51, 5.5);
     //}
    }

    start () {
        // [3]
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
