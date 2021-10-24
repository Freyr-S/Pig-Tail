System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, director, Component, _dec, _class, _crd, ccclass, property, Return;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5460d2xZvtC/oArmgnjVkg0", "return", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Return
       * DateTime = Sun Oct 24 2021 22:07:54 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = return.ts
       * FileBasenameNoExtension = return
       * URL = db://assets/Scripts/return.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Return", Return = (_dec = ccclass('Return'), _dec(_class = class Return extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        toCover() {
          director.loadScene("Cover");
        }

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
//# sourceMappingURL=return.js.map