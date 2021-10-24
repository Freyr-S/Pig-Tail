System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Heart1;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68b3eTrNxVEVaycupLesR1C", "heart1", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Heart1
       * DateTime = Thu Oct 21 2021 21:37:43 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = heart1.ts
       * FileBasenameNoExtension = heart1
       * URL = db://assets/Scripts/heart1.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Heart1", Heart1 = (_dec = ccclass('Heart1'), _dec(_class = class Heart1 extends Component {
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
          public bah1=null;
        playheart1(){
            if(!(this.bah1.p1.is_turn)&&this.bah1.p2.is_turn&&this.bah1.turn==2) return;//不是改玩家的回合，点击无效
            if(this.bah1.p1.heartl>0){
                let self3=this.bah1.p1.heartn.children[this.bah1.p1.heartl];//self3为该花色最后放入的扑克牌
                this.bah1.p1.heart[this.bah1.p1.heartl]=null;//清除
                this.bah1.p1.heartn.removeChild(self3);//移除该子节点即该扑克牌
                self3.removeFromParent();
                self3.parent=this.bg;//把该牌挂到背景上
                this.bg.addChild=self3;
                self3.active=true;//显示打出的牌
                tween(self3)
                    .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                    .repeat(1)
                    .start()
                this.bah1.judge();//判断花色是否和顶部花色一样
                //暂停倒计时，重置倒计时
                this.bah1.t1.stopTimeCutdown();
                this.bah1.ti.reset1();
                //切换回合  
                this.bah1.turn=2;
                this.bah1.p1.is_turn=false;
                this.bah1.p2.is_turn=true;
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
//# sourceMappingURL=heart1.js.map