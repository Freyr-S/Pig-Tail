System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Club2;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2306P7ugxNYKs+QB2yaho8", "club2", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Club2
       * DateTime = Thu Oct 21 2021 21:43:21 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = club2.ts
       * FileBasenameNoExtension = club2
       * URL = db://assets/Scripts/club2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Club2", Club2 = (_dec = ccclass('Club2'), _dec(_class = class Club2 extends Component {
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
              public bac2=null;
            playclub2(){
                if(this.bac2.p1.is_turn&&!(this.bac2.p2.is_turn)&&this.bac2.turn==1) return;//不是改玩家的回合，点击无效
                if(this.bac2.p2.spadel>0){
                    let self3=this.bac2.p2.clubn.children[this.bac2.p2.clubl];//self3为该花色最后放入的扑克牌
                    this.bac2.p2.club[this.bac2.p2.clubl]=null;//清除
                    this.bac2.p2.clubn.removeChild(self3);//移除该子节点即该扑克牌
                    self3.removeFromParent();
                    self3.parent=this.bg;//把该牌挂到背景上
                    this.bg.addChild=self3;
                    self3.active=true;//显示打出的牌
                    tween(self3)
                        .to(1,{position: new Vec3(0,0,0)})//将牌移动到中心
                        .repeat(1)
                        .start()
                    this.bac2.judge();//判断花色是否和顶部花色一样
                    //暂停倒计时，重置倒计时
                    this.bac2.t2.stopTimeCutdown();
                    this.bac2.t2.reset1();
                    //切换回合  
                    this.bac2.turn=1
                    this.bac2.p1.is_turn=true;
                    this.bac2.p2.is_turn=false;
                }
            }
            // serializableDummy = 0;
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
//# sourceMappingURL=club2.js.map