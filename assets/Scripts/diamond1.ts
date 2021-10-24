
import { _decorator,Script, Component,tween,Vec3, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Diamond1
 * DateTime = Thu Oct 21 2021 21:37:57 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = diamond1.ts
 * FileBasenameNoExtension = diamond1
 * URL = db://assets/Scripts/diamond1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Diamond1')
export class Diamond1 extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    /*
    //引入background
    @property({type:Node})
      public bg=null;
    //引入主要脚本
    @property({type:Script})
      public bad1=null;

    playdiamond1(){
        if(!(this.bad1.p1.is_turn)&&this.bad1.p2.is_turn&&this.bad1.turn==2) return;//不是改玩家的回合，点击无效
        if(this.bad1.p1.diamondl>0){
            let self3=this.bad1.p1.diamondn.children[this.bad1.p1.diamondl];//self3为该花色最后放入的扑克牌
            this.bad1.p1.diamond[this.bad1.p1.diamondl]=null;//清除
            this.bad1.p1.diamondn.removeChild(self3);//移除该子节点即该扑克牌
            self3.removeFromParent();
            self3.parent=this.bg;//把该牌挂到背景上
            this.bg.addChild=self3;
            self3.active=true;//显示打出的牌
            tween(self3)
                .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                .repeat(1)
                .start()
            this.bad1.judge();//判断花色是否和顶部花色一样
            //暂停倒计时，重置倒计时
            this.bad1.t1.stopTimeCutdown();
            this.bad1.ti.reset1();

            //切换回合  
            this.bad1.turn=2;
            this.bad1.p1.is_turn=false;
            this.bad1.p2.is_turn=true;
        }
    }
    // serializableDummy = 0;
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
