
import { _decorator,Script,Canvas, Component,Label, Node, find } from 'cc';
//import { Battle1 } from './battle1';
//import{} from './battle1';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Time1
 * DateTime = Wed Oct 20 2021 22:20:34 GMT+0800 (中国标准时间)
 * Author = Freyr_S
 * FileBasename = time1.ts
 * FileBasenameNoExtension = time1
 * URL = db://assets/Scripts/time1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Time1')
export class Time1 extends Component {
    // [1]
    // dummy = '';

    // [2]
    //public tt=find('Scenes/battle1/Canvas').getComponent("Battle1").p1;
    //public tt=Battle1.temp
    /*
    @property({type:Label})
      public time1=null;
    @property({type:Script})
      public ba1=null;
    // serializableDummy = 0;
    stopTimeCutdown(){
        this.node.active=false;//关闭该计时节点
    }
    reset1(){
        this.node.active=true;//再开启该节点
        this.time1.string="90";//重置倒计时
    }
    startTime1(){
        this.node.active=true;//激活该计时节点
        this.time1.string=90;
        var count1=89;
        this.schedule(function(){
            if(count1>=1){
                if(count1!=0){
                    this.time1.string=count1;
                    count1=count1-1;
                }
                //倒计时结束还没出牌，游戏定胜负
                if(count1==0){
                    this.time1.string="0";
                    //var scri1=this.ba1.getComponent("battle1");
                    this.ba1.gameover();
                }
            }
        },1,89,1);
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
