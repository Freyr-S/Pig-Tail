System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, Animation, Vec3, tween, instantiate, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _temp, _crd, ccclass, property, BattlePp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70b94lyz61PJqjH+oepQ516", "battle-pp", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = BattlePp
       * DateTime = Sat Oct 23 2021 01:14:15 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = battle-pp.ts
       * FileBasenameNoExtension = battle-pp
       * URL = db://assets/Scripts/battle-pp.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("BattlePp",
      /*
      export class player1{
          spade:Node[]=[];//黑桃组
          spadel:number=0;//黑桃组索引
          spaden:Node;//黑桃节点
          heart:Node[]=[];//红心组
          heartl:number=0;//红心组索引
          heartn:Node;//红心节点
          club:Node[]=[];//梅花组
          clubl:number=0;//梅花组索引
          clubn:Node;//梅花节点
          diamond:Node[]=[];//方块组
          diamondl:number=0;//方块组索引
          diamondn:Node;//方块节点
          handcards:Node[]=[];//卡牌组
          handcardsl:number=0;//手牌索引
          handcardsn:Node;//卡牌节点
          is_turn=true;//玩家1的回合、玩家1首发
          }
        export class player2{
            spade:Node[]=[];//黑桃组
            spadel:number=0;//黑桃组索引
            spaden:Node;//黑桃节点
            heart:Node[]=[];//红心组
            heartl:number=0;//红心组索引
            heartn:Node;//红心节点
            club:Node[]=[];//梅花组
            clubl:number=0;//梅花组索引
            clubn:Node;//梅花节点
            diamond:Node[]=[];//方块组
            diamondl:number=0;//方块组索引
            diamondn:Node;//方块节点
            handcards:Node[]=[];//卡牌组
            handcardsl:number=0;//手牌索引
            handcardsn:Node;//卡牌节点
            is_turn=false;//玩家2的回合,玩家2不是首发
          }
          */
      BattlePp = (_dec = ccclass('BattlePp'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Prefab
      }), _dec12 = property({
        type: Prefab
      }), _dec13 = property({
        type: Prefab
      }), _dec14 = property({
        type: Prefab
      }), _dec15 = property({
        type: Prefab
      }), _dec16 = property({
        type: Prefab
      }), _dec17 = property({
        type: Prefab
      }), _dec18 = property({
        type: Prefab
      }), _dec19 = property({
        type: Prefab
      }), _dec20 = property({
        type: Prefab
      }), _dec21 = property({
        type: Prefab
      }), _dec22 = property({
        type: Prefab
      }), _dec23 = property({
        type: Prefab
      }), _dec24 = property({
        type: Prefab
      }), _dec25 = property({
        type: Prefab
      }), _dec26 = property({
        type: Prefab
      }), _dec27 = property({
        type: Prefab
      }), _dec28 = property({
        type: Prefab
      }), _dec29 = property({
        type: Prefab
      }), _dec30 = property({
        type: Prefab
      }), _dec31 = property({
        type: Prefab
      }), _dec32 = property({
        type: Prefab
      }), _dec33 = property({
        type: Prefab
      }), _dec34 = property({
        type: Prefab
      }), _dec35 = property({
        type: Prefab
      }), _dec36 = property({
        type: Prefab
      }), _dec37 = property({
        type: Prefab
      }), _dec38 = property({
        type: Prefab
      }), _dec39 = property({
        type: Prefab
      }), _dec40 = property({
        type: Prefab
      }), _dec41 = property({
        type: Prefab
      }), _dec42 = property({
        type: Prefab
      }), _dec43 = property({
        type: Prefab
      }), _dec44 = property({
        type: Prefab
      }), _dec45 = property({
        type: Prefab
      }), _dec46 = property({
        type: Prefab
      }), _dec47 = property({
        type: Prefab
      }), _dec48 = property({
        type: Prefab
      }), _dec49 = property({
        type: Prefab
      }), _dec50 = property({
        type: Prefab
      }), _dec51 = property({
        type: Prefab
      }), _dec52 = property({
        type: Prefab
      }), _dec53 = property({
        type: Prefab
      }), _dec54 = property({
        type: Prefab
      }), _dec55 = property({
        type: Prefab
      }), _dec56 = property({
        type: Prefab
      }), _dec57 = property({
        type: Prefab
      }), _dec58 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BattlePp, _Component);

        function BattlePp() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "temp", 0);

          _defineProperty(_assertThisInitialized(_this), "array", new Array());

          _defineProperty(_assertThisInitialized(_this), "Cards", []);

          _defineProperty(_assertThisInitialized(_this), "Tails", []);

          _defineProperty(_assertThisInitialized(_this), "turn", 1);

          _initializerDefineProperty(_assertThisInitialized(_this), "bg_wnode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "shipnode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Bg", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tail", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker1", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker2", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker3", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker4", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker5", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker6", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker7", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker8", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker9", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker10", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker11", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker12", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker13", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker14", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker15", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker16", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker17", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker18", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker19", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker20", _descriptor24, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker21", _descriptor25, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker22", _descriptor26, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker23", _descriptor27, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker24", _descriptor28, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker25", _descriptor29, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker26", _descriptor30, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker27", _descriptor31, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker28", _descriptor32, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker29", _descriptor33, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker30", _descriptor34, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker31", _descriptor35, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker32", _descriptor36, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker33", _descriptor37, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker34", _descriptor38, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker35", _descriptor39, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker36", _descriptor40, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker37", _descriptor41, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker38", _descriptor42, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker39", _descriptor43, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker40", _descriptor44, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker41", _descriptor45, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker42", _descriptor46, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker43", _descriptor47, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker44", _descriptor48, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker45", _descriptor49, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker46", _descriptor50, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker47", _descriptor51, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker48", _descriptor52, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker49", _descriptor53, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker50", _descriptor54, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker51", _descriptor55, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "poker52", _descriptor56, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "back", _descriptor57, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BattlePp.prototype;

        //随机打乱数组
        _proto.getRandomArr = function getRandomArr() {
          var array = new Array();
          var i;

          for (i = 1; i <= 52; i++) {
            array[i - 1] = i;
          } //array.sort(function(){return 0.5-Math.random();});


          return array;
        } //初始化卡牌组
        ;

        _proto.initCard = function initCard() {
          var i = 0; //var j=1;

          var namep = 0;
          this.array = this.getRandomArr(); //生成随机标签1-52

          this.schedule(function () {
            var _this2 = this;

            //var card:Node=instantiate(this.back);
            //实例化扑克牌
            var tag = this.array[i]; //var name:String;
            //黑桃

            if (tag >= 1 && tag <= 13) {
              namep = 0;
            } //红心


            if (tag >= 14 && tag <= 26) {
              namep = 1;
            } //梅花


            if (tag >= 27 && tag <= 39) {
              namep = 2;
            } //方块


            if (tag >= 40 && tag <= 52) {
              namep = 3;
            } //根据标签实例化预制体


            switch (tag) {
              case 1:
                var card = instantiate(this.poker1);
                break;

              case 2:
                var card = instantiate(this.poker2);
                break;

              case 3:
                var card = instantiate(this.poker3);
                break;

              case 4:
                var card = instantiate(this.poker4);
                break;

              case 5:
                var card = instantiate(this.poker5);
                break;

              case 6:
                var card = instantiate(this.poker6);
                break;

              case 7:
                var card = instantiate(this.poker7);
                break;

              case 8:
                var card = instantiate(this.poker8);
                break;

              case 9:
                var card = instantiate(this.poker9);
                break;

              case 10:
                var card = instantiate(this.poker10);
                break;

              case 11:
                var card = instantiate(this.poker11);
                break;

              case 12:
                var card = instantiate(this.poker12);
                break;

              case 13:
                var card = instantiate(this.poker31);
                break;

              case 14:
                var card = instantiate(this.poker14);
                break;

              case 15:
                var card = instantiate(this.poker15);
                break;

              case 16:
                var card = instantiate(this.poker16);
                break;

              case 17:
                var card = instantiate(this.poker17);
                break;

              case 18:
                var card = instantiate(this.poker18);
                break;

              case 19:
                var card = instantiate(this.poker19);
                break;

              case 20:
                var card = instantiate(this.poker20);
                break;

              case 21:
                var card = instantiate(this.poker21);
                break;

              case 22:
                var card = instantiate(this.poker22);
                break;

              case 23:
                var card = instantiate(this.poker23);
                break;

              case 24:
                var card = instantiate(this.poker24);
                break;

              case 25:
                var card = instantiate(this.poker25);
                break;

              case 26:
                var card = instantiate(this.poker26);
                break;

              case 27:
                var card = instantiate(this.poker27);
                break;

              case 28:
                var card = instantiate(this.poker28);
                break;

              case 29:
                var card = instantiate(this.poker29);
                break;

              case 30:
                var card = instantiate(this.poker31);
                break;

              case 31:
                var card = instantiate(this.poker31);
                break;

              case 32:
                var card = instantiate(this.poker32);
                break;

              case 33:
                var card = instantiate(this.poker33);
                break;

              case 34:
                var card = instantiate(this.poker34);
                break;

              case 35:
                var card = instantiate(this.poker35);
                break;

              case 36:
                var card = instantiate(this.poker36);
                break;

              case 37:
                var card = instantiate(this.poker37);
                break;

              case 38:
                var card = instantiate(this.poker38);
                break;

              case 39:
                var card = instantiate(this.poker39);
                break;

              case 40:
                var card = instantiate(this.poker40);
                break;

              case 41:
                var card = instantiate(this.poker41);
                break;

              case 42:
                var card = instantiate(this.poker42);
                break;

              case 43:
                var card = instantiate(this.poker43);
                break;

              case 44:
                var card = instantiate(this.poker44);
                break;

              case 45:
                var card = instantiate(this.poker45);
                break;

              case 46:
                var card = instantiate(this.poker46);
                break;

              case 47:
                var card = instantiate(this.poker47);
                break;

              case 48:
                var card = instantiate(this.poker48);
                break;

              case 49:
                var card = instantiate(this.poker49);
                break;

              case 50:
                var card = instantiate(this.poker50);
                break;

              case 51:
                var card = instantiate(this.poker51);
                break;

              case 52:
                var card = instantiate(this.poker52);
                break;
            } //给节点标注花色


            switch (namep) {
              case 0:
                card.name = "spade";
                break;

              case 1:
                card.name = "heart";
                break;

              case 2:
                card.name = "club";
                break;

              case 3:
                card.name = "diamond";
                break;
            } //将牌添加到背景上


            this.Bg.addChild(card);
            card.parent = this.Bg; //设置每张牌的初始位置、大小、旋转角度

            card.setPosition(0 + 114.4 * Math.cos(Math.PI / 2 + Math.PI * 0.03846 * i), 9.244 + 114.4 * Math.sin(Math.PI / 2 + Math.PI * 0.03846 * i));
            card.setScale(0.37, 0.37);
            card.setRotationFromEuler(0, 0, 6.923 * i);
            this.Cards[i] = card; //同时将牌记录到卡组
            //注册扑克牌点击事件

            card.on(Node.EventType.TOUCH_END, function (event) {
              //将被点击的牌添加到放置区
              card.removeFromParent();
              _this2.tail.addChild = card;
              card.parent = _this2.tail;
              _this2.Tails[_this2.temp] = card; //实现翻牌、牌的移动

              var anim = card.getComponent(Animation);
              anim.play('turn_over1');
              setTimeout(function () {
                var self1 = card.children[0];
                self1.active = true;
                anim.play('turn_over2');
                tween(card).to(1, {
                  position: new Vec3(0, 0, 0)
                }).repeat(1).start();
              }, 100); //关闭点击事件，即每张牌只能点击一次

              card.pauseSystemEvents(true);
            }, card);
            i = i + 1;
          }, 0.03, 51, 5.5); //}
        };

        _proto.start = function start() {
          var _this3 = this;

          // [3]
          //初始化
          setTimeout(function () {
            _this3.bg_wnode.active = false;
            _this3.shipnode.active = false;
          }, 4500);
          this.initCard();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return BattlePp;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg_wnode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shipnode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tail", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "poker1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "poker2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "poker3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "poker4", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "poker5", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "poker6", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "poker7", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "poker8", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "poker9", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "poker10", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "poker11", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "poker12", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "poker13", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "poker14", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "poker15", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "poker16", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "poker17", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "poker18", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "poker19", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "poker20", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "poker21", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "poker22", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "poker23", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "poker24", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "poker25", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "poker26", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "poker27", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "poker28", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "poker29", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "poker30", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "poker31", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "poker32", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "poker33", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "poker34", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "poker35", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "poker36", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "poker37", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "poker38", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "poker39", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "poker40", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "poker41", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "poker42", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "poker43", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "poker44", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "poker45", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "poker46", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "poker47", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "poker48", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "poker49", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "poker50", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "poker51", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "poker52", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "back", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=battle-pp.js.map