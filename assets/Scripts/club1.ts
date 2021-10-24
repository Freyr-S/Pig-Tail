
import { _decorator,Script, Component,tween,Vec3, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Club1
 * DateTime = Thu Oct 21 2021 21:37:50 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = club1.ts
 * FileBasenameNoExtension = club1
 * URL = db://assets/Scripts/club1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Club1')
export class Club1 extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
/*
    //引入background
    @property({type:Node})
      public bg=null;
    //引入主要脚本
    @property({type:Script})
      public bac1=null;
    //@property({type:Script})
    //  public cutdown=null;
    playclub1(){
        if(!(this.bac1.p1.is_turn)&&this.bac1.p2.is_turn&&this.bac1.turn==2) return;//不是改玩家的回合，点击无效
        if(this.bac1.p1.clubl>0){
            let self3=this.bac1.p1.clubn.children[this.bac1.p1.clubl];//self3为该花色最后放入的扑克牌
            this.bac1.p1.club[this.bac1.p1.clubl]=null;//清除
            this.bac1.p1.clubn.removeChild(self3);//移除该子节点即该扑克牌
            self3.removeFromParent();
            self3.parent=this.bg;//把该牌挂到背景上
            this.bg.addChild=self3;
            self3.active=true;//显示打出的牌
            tween(self3)
                .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                .repeat(1)
                .start()
            this.bac1.judge();//判断花色是否和顶部花色一样
            //暂停倒计时，重置倒计时
            this.bac1.t1.stopTimeCutdown();
            this.bac1.ti.reset1();
            //切换回合  
            this.bac1.turn=2;
            this.bac1.p1.is_turn=false;
            this.bac1.p2.is_turn=true;
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