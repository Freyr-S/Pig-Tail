System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, director, Component, _dec, _class, _crd, ccclass, property, ToBattle2;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0faeaqkMndC9YP9yJdfekTA", "toBattle2", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ToBattle2
       * DateTime = Wed Oct 20 2021 15:39:47 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = toBattle2.ts
       * FileBasenameNoExtension = toBattle2
       * URL = db://assets/Scripts/toBattle2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("ToBattle2", ToBattle2 = (_dec = ccclass('ToBattle2'), _dec(_class = class ToBattle2 extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        toBattle2() {
          director.loadScene("battle2");
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
//# sourceMappingURL=toBattle2.js.map