
import { _decorator,Canvas, Component,Script, Node, tween, Vec3 } from 'cc';
//import{Battle1}from './battle1';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Spade1
 * DateTime = Thu Oct 21 2021 21:37:37 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = spade1.ts
 * FileBasenameNoExtension = spade1
 * URL = db://assets/Scripts/spade1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Spade1')
export class Spade1 extends Component {
    // [1]
    // dummy = '';

    // [2]
    //@property({type:Script})
    //  private test=null; 
    
    // serializableDummy = 0;
    //实例化玩家
    //public p1=new player1();
    //public p2=new player2();
    //public s=new Battle1();    
    //@property({type:Canvas})
    //  public bas1=null;
    /*
    //引入background
    @property({type:Node})
      public bg=null;
    //引入主要脚本
    @property({type:Script})
      public bas1=null;
    playspade1(){
        //var scris1=this.bas1.getComponent("battle1");
        if(!(this.bas1.p1.is_turn)&&this.bas1.p2.is_turn&&this.bas1.turn==2) return;//不是改玩家的回合，点击无效
        if(this.bas1.p1.spadel>0){
            let self3=this.bas1.p1.spaden.children[this.bas1.p1.spadel];//self3为该花色最后放入的扑克牌
            this.bas1.p1.spade[this.bas1.p1.spadel]=null;//清除
            this.bas1.p1.spadel--;
            this.bas1.p1.spaden.removeChild(self3);//移除该子节点即该扑克牌
            self3.removeFromParent();
            self3.parent=this.bg;//把该牌挂到背景上
            this.bg.addChild=self3;
            self3.active=true;//显示打出的牌
            tween(self3)
                .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                .repeat(1)
                .start()
            this.bas1.judge();//判断花色是否和顶部花色一样
            //暂停倒计时，重置倒计时
            this.bas1.t1.stopTimeCutdown();
            this.bas1.ti.reset1();

            //切换回合  
            this.bas1.turn=2;
            this.bas1.p1.is_turn=false;
            this.bas1.p2.is_turn=true;
        }
        
    }
    */
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
