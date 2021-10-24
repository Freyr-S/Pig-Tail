
import { _decorator,Script, Component,tween,Vec3, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Diamond2
 * DateTime = Thu Oct 21 2021 21:43:34 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = diamond2.ts
 * FileBasenameNoExtension = diamond2
 * URL = db://assets/Scripts/diamond2.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Diamond2')
export class Diamond2 extends Component {
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
      public bad2=null;

    playdiamond2(){
        if(this.bad2.p1.is_turn&&!(this.bad2.p2.is_turn)&&this.bad2.turn==1) return;//不是改玩家的回合，点击无效
        if(this.bad2.p2.diamondl>0){
            let self3=this.bad2.p2.diamondn.children[this.bad2.p2.diamondl];//self3为该花色最后放入的扑克牌
            this.bad2.p2.diamond[this.bad2.p2.diamondl]=null;//清除
            this.bad2.p2.diamondn.removeChild(self3);//移除该子节点即该扑克牌
            self3.removeFromParent();
            self3.parent=this.bg;//把该牌挂到背景上
            this.bg.addChild=self3;
            self3.active=true;//显示打出的牌
            tween(self3)
                .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                .repeat(1)
                .start()
            this.bad2.judge();//判断花色是否和顶部花色一样
            //暂停倒计时，重置倒计时
            this.bad2.t2.stopTimeCutdown();
            this.bad2.t2.reset1();
    
            //切换回合  
            this.bad2.turn=1
            this.bad2.p1.is_turn=true;
            this.bad2.p2.is_turn=false;
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
