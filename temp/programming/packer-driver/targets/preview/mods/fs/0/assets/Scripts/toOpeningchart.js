System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, property, ToOpeningchart;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51814JdwRxKAqPhVnhRYgYP", "toOpeningchart", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = ToOpeningchart
       * DateTime = Sun Oct 10 2021 18:19:47 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = toOpeningchart.ts
       * FileBasenameNoExtension = toOpeningchart
       * URL = db://assets/Scripts/toOpeningchart.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("ToOpeningchart", ToOpeningchart = (_dec = ccclass('ToOpeningchart'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToOpeningchart, _Component);

        function ToOpeningchart() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ToOpeningchart.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          setTimeout(function () {
            director.loadScene("openingchart1");
          }, 1000);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ToOpeningchart;
      }(Component)) || _class));
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
//# sourceMappingURL=toOpeningchart.js.map