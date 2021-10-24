System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Heart2;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f26c1EXadpPa4JfcrIaUYJp", "heart2", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Heart2
       * DateTime = Thu Oct 21 2021 21:43:11 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = heart2.ts
       * FileBasenameNoExtension = heart2
       * URL = db://assets/Scripts/heart2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Heart2", Heart2 = (_dec = ccclass('Heart2'), _dec(_class = class Heart2 extends Component {
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
          public bah2=null;
        playheart2(){
            if(this.bah2.p1.is_turn&&!(this.bah2.p2.is_turn)&&this.bah2.turn==1) return;//不是改玩家的回合，点击无效
            if(this.bah2.p2.heartl>0){
                let self3=this.bah2.p2.heartn.children[this.bah2.p2.heartl];//self3为该花色最后放入的扑克牌
                this.bah2.p2.heart[this.bah2.p2.heartl]=null;//清除
                this.bah2.p2.heartn.removeChild(self3);//移除该子节点即该扑克牌
                self3.removeFromParent();
                self3.parent=this.bg;//把该牌挂到背景上
                this.bg.addChild=self3;
                self3.active=true;//显示打出的牌
                tween(self3)
                    .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                    .repeat(1)
                    .start()
                this.bah2.judge();//判断花色是否和顶部花色一样
                //暂停倒计时，重置倒计时
                this.bah2.t2.stopTimeCutdown();
                this.bah2.t2.reset1();
        
                //切换回合  
                this.bah2.turn=1
                this.bah2.p1.is_turn=true;
                this.bah2.p2.is_turn=false;
            }
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
//# sourceMappingURL=heart2.js.map