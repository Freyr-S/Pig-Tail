System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Time2;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "468ca2eAPRGWq2khZz49DZM", "time2", undefined);

      //import{Battle1}from'./battle1';
      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Time2
       * DateTime = Wed Oct 20 2021 22:20:42 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = time2.ts
       * FileBasenameNoExtension = time2
       * URL = db://assets/Scripts/time2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Time2", Time2 = (_dec = ccclass('Time2'), _dec(_class = class Time2 extends Component {
        // [1]
        // dummy = '';
        // [2]

        /*
        @property({type:Label})
          time2=null;
        @property({type:Script})
          public ba2=null;
        // serializableDummy = 0;
        stopTimeCutdown(){
            this.node.active=false;//关闭该计时节点
        }
        reset2(){
            this.node.active=true;//再开启该节点
            this.time2.string="90";//重置倒计时
        }
        startTime2(){
            this.node.active=true;//激活该计时节点
            //var t=new Battle1();
            this.time2.string=90;
            var count1=89;
            this.schedule(function(){
                if(count1>=1){
                    if(count1!=0){
                        this.time2.string=count1;
                        count1=count1-1;
                    }
                    //倒计时结束还没出牌，游戏定胜负
                    if(count1==0){
                        this.time2.string="0";
                        //var scri2=this.ba2.getComponent("battle1");
                        this.ba2.gameover();
                    }
                }
            },1,89,1);
        }
        */
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=time2.js.map