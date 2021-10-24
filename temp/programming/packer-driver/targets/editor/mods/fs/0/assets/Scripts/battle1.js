System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Label, Component, director, Prefab, Animation, Vec3, tween, instantiate, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _descriptor80, _descriptor81, _descriptor82, _temp, _crd, ccclass, property, Battle1;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Component = _cc.Component;
      director = _cc.director;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed063AG9uNOkYkdII0SlLIb", "battle1", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Battle1
       * DateTime = Wed Oct 20 2021 16:37:48 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = battle1.ts
       * FileBasenameNoExtension = battle1
       * URL = db://assets/Scripts/battle1.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Battle1", Battle1 = (_dec = ccclass('Battle1'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Label
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Label
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Label
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: Node
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: Node
      }), _dec31 = property({
        type: Node
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
      }), _dec59 = property({
        type: Prefab
      }), _dec60 = property({
        type: Prefab
      }), _dec61 = property({
        type: Prefab
      }), _dec62 = property({
        type: Prefab
      }), _dec63 = property({
        type: Prefab
      }), _dec64 = property({
        type: Prefab
      }), _dec65 = property({
        type: Prefab
      }), _dec66 = property({
        type: Prefab
      }), _dec67 = property({
        type: Prefab
      }), _dec68 = property({
        type: Prefab
      }), _dec69 = property({
        type: Prefab
      }), _dec70 = property({
        type: Prefab
      }), _dec71 = property({
        type: Prefab
      }), _dec72 = property({
        type: Prefab
      }), _dec73 = property({
        type: Prefab
      }), _dec74 = property({
        type: Prefab
      }), _dec75 = property({
        type: Prefab
      }), _dec76 = property({
        type: Prefab
      }), _dec77 = property({
        type: Prefab
      }), _dec78 = property({
        type: Prefab
      }), _dec79 = property({
        type: Prefab
      }), _dec80 = property({
        type: Prefab
      }), _dec81 = property({
        type: Prefab
      }), _dec82 = property({
        type: Prefab
      }), _dec83 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class Battle1 extends Component {
        constructor(...args) {
          var _temp2, _temp3;

          super(...args);

          _defineProperty(this, "player1", (_temp2 = class {
            constructor() {
              _defineProperty(this, "spadel", void 0);

              _defineProperty(this, "spadelen", void 0);

              _defineProperty(this, "spaden", void 0);

              _defineProperty(this, "heartl", void 0);

              _defineProperty(this, "heartlen", void 0);

              _defineProperty(this, "heartn", void 0);

              _defineProperty(this, "clubl", void 0);

              _defineProperty(this, "clublen", void 0);

              _defineProperty(this, "clubn", void 0);

              _defineProperty(this, "diamondl", void 0);

              _defineProperty(this, "diamondlen", void 0);

              _defineProperty(this, "diamondn", void 0);

              _defineProperty(this, "handcardsl", void 0);

              _defineProperty(this, "handcardslen", void 0);

              _defineProperty(this, "handcardsn", void 0);

              _defineProperty(this, "is_turn", void 0);
            } //=true;//玩家1的回合、玩家1首发


          }, _temp2));

          _defineProperty(this, "player2", (_temp3 = class {
            constructor() {
              _defineProperty(this, "spadel", void 0);

              _defineProperty(this, "spadelen", void 0);

              _defineProperty(this, "spaden", void 0);

              _defineProperty(this, "heartl", void 0);

              _defineProperty(this, "heartlen", void 0);

              _defineProperty(this, "heartn", void 0);

              _defineProperty(this, "clubl", void 0);

              _defineProperty(this, "clublen", void 0);

              _defineProperty(this, "clubn", void 0);

              _defineProperty(this, "diamondl", void 0);

              _defineProperty(this, "diamondlen", void 0);

              _defineProperty(this, "diamondn", void 0);

              _defineProperty(this, "handcardsl", void 0);

              _defineProperty(this, "handcardslen", void 0);

              _defineProperty(this, "handcardsn", void 0);

              _defineProperty(this, "is_turn", void 0);
            } //=false;//玩家2的回合


          }, _temp3));

          _defineProperty(this, "p1", new this.player1());

          _defineProperty(this, "p2", new this.player2());

          _defineProperty(this, "temp", -1);

          _defineProperty(this, "taillen", 0);

          _defineProperty(this, "turn", 1);

          _defineProperty(this, "count", 52);

          _defineProperty(this, "count1", 89);

          _defineProperty(this, "count2", 89);

          _initializerDefineProperty(this, "s1", _descriptor, this);

          _initializerDefineProperty(this, "h1", _descriptor2, this);

          _initializerDefineProperty(this, "c1", _descriptor3, this);

          _initializerDefineProperty(this, "d1", _descriptor4, this);

          _initializerDefineProperty(this, "s2", _descriptor5, this);

          _initializerDefineProperty(this, "h2", _descriptor6, this);

          _initializerDefineProperty(this, "c2", _descriptor7, this);

          _initializerDefineProperty(this, "d2", _descriptor8, this);

          _initializerDefineProperty(this, "red1", _descriptor9, this);

          _initializerDefineProperty(this, "red2", _descriptor10, this);

          _initializerDefineProperty(this, "green1", _descriptor11, this);

          _initializerDefineProperty(this, "green2", _descriptor12, this);

          _initializerDefineProperty(this, "time1", _descriptor13, this);

          _initializerDefineProperty(this, "t1", _descriptor14, this);

          _initializerDefineProperty(this, "time2", _descriptor15, this);

          _initializerDefineProperty(this, "t2", _descriptor16, this);

          _initializerDefineProperty(this, "hand1", _descriptor17, this);

          _initializerDefineProperty(this, "hand2", _descriptor18, this);

          _initializerDefineProperty(this, "spade1", _descriptor19, this);

          _initializerDefineProperty(this, "spade2", _descriptor20, this);

          _initializerDefineProperty(this, "heart1", _descriptor21, this);

          _initializerDefineProperty(this, "heart2", _descriptor22, this);

          _initializerDefineProperty(this, "club1", _descriptor23, this);

          _initializerDefineProperty(this, "club2", _descriptor24, this);

          _initializerDefineProperty(this, "diamond1", _descriptor25, this);

          _initializerDefineProperty(this, "diamond2", _descriptor26, this);

          _initializerDefineProperty(this, "bg_wnode", _descriptor27, this);

          _initializerDefineProperty(this, "shipnode", _descriptor28, this);

          _initializerDefineProperty(this, "Bg", _descriptor29, this);

          _initializerDefineProperty(this, "tail", _descriptor30, this);

          _initializerDefineProperty(this, "poker1", _descriptor31, this);

          _initializerDefineProperty(this, "poker2", _descriptor32, this);

          _initializerDefineProperty(this, "poker3", _descriptor33, this);

          _initializerDefineProperty(this, "poker4", _descriptor34, this);

          _initializerDefineProperty(this, "poker5", _descriptor35, this);

          _initializerDefineProperty(this, "poker6", _descriptor36, this);

          _initializerDefineProperty(this, "poker7", _descriptor37, this);

          _initializerDefineProperty(this, "poker8", _descriptor38, this);

          _initializerDefineProperty(this, "poker9", _descriptor39, this);

          _initializerDefineProperty(this, "poker10", _descriptor40, this);

          _initializerDefineProperty(this, "poker11", _descriptor41, this);

          _initializerDefineProperty(this, "poker12", _descriptor42, this);

          _initializerDefineProperty(this, "poker13", _descriptor43, this);

          _initializerDefineProperty(this, "poker14", _descriptor44, this);

          _initializerDefineProperty(this, "poker15", _descriptor45, this);

          _initializerDefineProperty(this, "poker16", _descriptor46, this);

          _initializerDefineProperty(this, "poker17", _descriptor47, this);

          _initializerDefineProperty(this, "poker18", _descriptor48, this);

          _initializerDefineProperty(this, "poker19", _descriptor49, this);

          _initializerDefineProperty(this, "poker20", _descriptor50, this);

          _initializerDefineProperty(this, "poker21", _descriptor51, this);

          _initializerDefineProperty(this, "poker22", _descriptor52, this);

          _initializerDefineProperty(this, "poker23", _descriptor53, this);

          _initializerDefineProperty(this, "poker24", _descriptor54, this);

          _initializerDefineProperty(this, "poker25", _descriptor55, this);

          _initializerDefineProperty(this, "poker26", _descriptor56, this);

          _initializerDefineProperty(this, "poker27", _descriptor57, this);

          _initializerDefineProperty(this, "poker28", _descriptor58, this);

          _initializerDefineProperty(this, "poker29", _descriptor59, this);

          _initializerDefineProperty(this, "poker30", _descriptor60, this);

          _initializerDefineProperty(this, "poker31", _descriptor61, this);

          _initializerDefineProperty(this, "poker32", _descriptor62, this);

          _initializerDefineProperty(this, "poker33", _descriptor63, this);

          _initializerDefineProperty(this, "poker34", _descriptor64, this);

          _initializerDefineProperty(this, "poker35", _descriptor65, this);

          _initializerDefineProperty(this, "poker36", _descriptor66, this);

          _initializerDefineProperty(this, "poker37", _descriptor67, this);

          _initializerDefineProperty(this, "poker38", _descriptor68, this);

          _initializerDefineProperty(this, "poker39", _descriptor69, this);

          _initializerDefineProperty(this, "poker40", _descriptor70, this);

          _initializerDefineProperty(this, "poker41", _descriptor71, this);

          _initializerDefineProperty(this, "poker42", _descriptor72, this);

          _initializerDefineProperty(this, "poker43", _descriptor73, this);

          _initializerDefineProperty(this, "poker44", _descriptor74, this);

          _initializerDefineProperty(this, "poker45", _descriptor75, this);

          _initializerDefineProperty(this, "poker46", _descriptor76, this);

          _initializerDefineProperty(this, "poker47", _descriptor77, this);

          _initializerDefineProperty(this, "poker48", _descriptor78, this);

          _initializerDefineProperty(this, "poker49", _descriptor79, this);

          _initializerDefineProperty(this, "poker50", _descriptor80, this);

          _initializerDefineProperty(this, "poker51", _descriptor81, this);

          _initializerDefineProperty(this, "poker52", _descriptor82, this);
        }

        //@property({type:Prefab})
        //  private back=null;
        //随机打乱数组
        getRandomArr() {
          var array = new Array();
          let i;

          for (i = 1; i <= 52; i++) {
            array[i - 1] = i;
          }

          array.sort(function () {
            return 0.5 - Math.random();
          });
          return array;
        }

        callback1() {
          if (this.count1 >= 1) {
            if (this.count1 != 0) {
              this.time1.string = String(this.count1);
              this.count1 = this.count1 - 1;
            } //倒计时结束还没出牌，游戏定胜负


            if (this.count1 == 0) {
              this.time1.string = "0";

              if (this.p1.is_turn) {
                director.loadScene("result1");
              }

              if (this.p2.is_turn) {
                director.loadScene("result2");
              }
            }
          }
        }

        callback2() {
          if (this.count2 >= 1) {
            if (this.count2 != 0) {
              this.time2.string = String(this.count2);
              this.count2 = this.count2 - 1;
            } //倒计时结束还没出牌，游戏定胜负


            if (this.count2 == 0) {
              this.time2.string = "0";
              this.gameover();
            }
          }
        } //判断出的牌是否和放置组顶部花色相同


        stopTimeCutdown1() {
          this.unschedule(this.callback1);
        }

        stopTimeCutdown2() {
          this.unschedule(this.callback2);
        }

        reset1() {
          this.time1.string = "90"; //重置倒计时

          this.count1 = 89;
        }

        reset2() {
          this.time2.string = "90"; //重置倒计时

          this.count2 = 89;
        }

        startTime1() {
          this.t1.active = true; //激活该计时节点

          this.time1.string = "90";
          this.schedule(this.callback1, 1, 90, 1);
        }

        startTime2() {
          //this.t2.active=true;//激活该计时节点
          //var t=new Battle1();
          //this.time2.string="90";
          //var count1=89;
          this.t2.active = true; //激活该计时节点
          //var t=new Battle1();

          this.time2.string = "90";
          this.schedule(this.callback2, 1, 90, 1);
        }

        judge() {
          if (this.taillen > 1) {
            //如果放置区有牌,大于1表示除了新放进去的牌以外本来就有旧牌，才有可能吃牌
            var q = this.taillen - 1; //存放多重复次数,总共存放this.taillen次
            //var p=this.temp;
            //var plem=this.taillen;

            var selfpre = this.tail.children[this.temp - 1]; //取原来顶部的牌

            var selfnow = this.tail.children[this.temp]; //取最新的牌，即新放进去的牌
            //如果花色和顶部牌相同

            if (selfnow.name == selfpre.name) {
              //如果是玩家1的操作
              //取反
              if (this.turn == 2) {
                //清除放置区
                this.schedule(function () {
                  //this.Tails[this.temp]=null;
                  var self2 = this.tail.children[this.temp]; //self2为顶部扑克牌

                  this.temp--;
                  this.taillen--;
                  this.tail.removeChild(self2);
                  self2.removeFromParent();
                  this.Bg.addChild(self2);
                  self2.parent = this.Bg;
                  tween(self2).to(0.5, {
                    position: new Vec3(-302, -35, 0)
                  }).repeat(1).start();
                  setTimeout(() => {
                    switch (self2.name) {
                      case "spade":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p1.spaden.addChild(self2);
                        self2.parent = this.p1.spaden;
                        this.p1.spadel++;
                        this.p1.spadelen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "heart":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p1.heartn.addChild(self2);
                        self2.parent = this.p1.heartn;
                        this.p1.heartl++;
                        this.p1.heartlen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "club":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p1.clubn.addChild(self2);
                        self2.parent = this.p1.clubn;
                        this.p1.clubl++;
                        this.p1.clublen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "diamond":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p1.diamondn.addChild(self2);
                        self2.parent = this.p1.diamondn;
                        this.p1.diamondl++;
                        this.p1.diamondlen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;
                    }
                  }, 500);
                  this.p1.handcardsl++;
                  this.p1.handcardslen++;
                }.bind(this), 0.1, q, 0);
              }

              if (this.turn == 1) {
                //清除放置区
                this.schedule(function () {
                  //this.Tails[this.temp]=null;
                  var self2 = this.tail.children[this.temp]; //self2为顶部扑克牌

                  this.temp--;
                  this.taillen--;
                  this.p2.handcardsl++;
                  this.p2.handcardslen++;
                  this.tail.removeChild(self2);
                  self2.removeFromParent();
                  this.Bg.addChild(self2);
                  self2.parent = this.Bg;
                  tween(self2).to(0.5, {
                    position: new Vec3(302, -35, 0)
                  }).repeat(1).start();
                  setTimeout(() => {
                    switch (self2.name) {
                      case "spade":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p2.spaden.addChild(self2);
                        self2.parent = this.p2.spaden;
                        this.p2.spadel++;
                        this.p2.spadelen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "heart":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p2.heartn.addChild(self2);
                        self2.parent = this.p2.heartn;
                        this.p2.heartl++;
                        this.p2.hratelen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "club":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p2.clubn.addChild(self2);
                        self2.parent = this.p2.clubn;
                        this.p2.clubl++;
                        this.p2.clublen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;

                      case "diamond":
                        //setTimeout(function(){
                        self2.removeFromParent();
                        this.Bg.removeChild(self2);
                        this.p2.diamondn.addChild(self2);
                        self2.parent = this.p2.diamondn;
                        this.p2.diamondl++;
                        this.p2.diamondlen++;
                        self2.active = false; //隐藏该扑克牌
                        //},1000)

                        break;
                    }
                  }, 500);
                }.bind(this), 0.1, q, 0);
              }
            }
          }
        }

        playspade1() {
          //var scris1=this.bas1.getComponent("battle1");
          if (!this.p1.is_turn && this.p2.is_turn && this.turn == 2) return; //不是该玩家的回合，点击无效

          if (this.p1.spadelen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown1();
            this.reset1(); //切换回合  

            this.red1.active = true;
            this.green1.active = false;
            this.red2.active = false;
            this.green2.active = true;
            this.turn = 2;
            this.p1.is_turn = false;
            this.p2.is_turn = true;
            var self3 = this.p1.spaden.children[this.p1.spadel]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p1.spadel--; //

            this.p1.spadelen--;
            this.p1.handcardsl--;
            this.p1.handcardslen--;
            this.p1.spaden.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime2();
            }, 500);
          }
        }

        playspade2() {
          if (this.p1.is_turn && !this.p2.is_turn && this.turn == 1) return; //不是该玩家的回合，点击无效

          if (this.p2.spadelen > 0) {
            //如果该花色牌数量大于0
            this.stopTimeCutdown2();
            this.reset2(); //切换回合  

            this.red1.active = false;
            this.green1.active = true;
            this.red2.active = true;
            this.green2.active = false;
            this.turn = 1;
            this.p1.is_turn = true;
            this.p2.is_turn = false;
            var self3 = this.p2.spaden.children[this.p2.spadel]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p2.spadel--; //

            this.p2.spadelen--;
            this.p2.handcardsl--;
            this.p2.handcardslen--;
            this.p2.spaden.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样
              //暂停倒计时，重置倒计时

              this.startTime1();
            }, 500);
          }
        }

        playheart1() {
          if (!this.p1.is_turn && this.p2.is_turn && this.turn == 2) return; //不是该玩家的回合，点击无效

          if (this.p1.heartlen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown1();
            this.reset1(); //切换回合  

            this.red1.active = true;
            this.green1.active = false;
            this.red2.active = false;
            this.green2.active = true;
            this.turn = 2;
            this.p1.is_turn = false;
            this.p2.is_turn = true;
            var self3 = this.p1.heartn.children[this.p1.heartl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p1.heartl--; //

            this.p1.heartlen--;
            this.p1.handcardsl--;
            this.p1.handcardslen--;
            this.p1.heartn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样
              //暂停倒计时，重置倒计时

              this.startTime2();
            }, 500);
          }
        }

        playheart2() {
          if (this.p1.is_turn && !this.p2.is_turn && this.turn == 1) return; //不是该玩家的回合，点击无效

          if (this.p2.heartlen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown2();
            this.reset2(); //切换回合  

            this.red1.active = false;
            this.green1.active = true;
            this.red2.active = true;
            this.green2.active = false;
            this.turn = 1;
            this.p1.is_turn = true;
            this.p2.is_turn = false;
            var self3 = this.p2.heartn.children[this.p2.heartl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p2.heartl--; //

            this.p2.heartlen--;
            this.p2.handcardsl--;
            this.p2.handcardslen--;
            this.p2.heartn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime1();
            }, 500);
          }
        }

        playclub1() {
          if (!this.p1.is_turn && this.p2.is_turn && this.turn == 2) return; //不是该玩家的回合，点击无效

          if (this.p1.clublen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown1();
            this.reset1(); //切换回合  

            this.red1.active = true;
            this.green1.active = false;
            this.red2.active = false;
            this.green2.active = true;
            this.turn = 2;
            this.p1.is_turn = false;
            this.p2.is_turn = true;
            var self3 = this.p1.clubn.children[this.p1.clubl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p1.clubl--; //

            this.p1.clublen--;
            this.p1.handcardsl--;
            this.p1.handcardslen--;
            this.p1.clubn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime2();
            }, 500);
          }
        }

        playclub2() {
          if (this.p1.is_turn && !this.p2.is_turn && this.turn == 1) return; //不是该玩家的回合，点击无效

          if (this.p2.clublen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown2();
            this.reset2(); //切换回合  

            this.red1.active = false;
            this.green1.active = true;
            this.red2.active = true;
            this.green2.active = false;
            this.turn = 1;
            this.p1.is_turn = true;
            this.p2.is_turn = false;
            var self3 = this.p2.clubn.children[this.p2.clubl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p2.clubl--; //

            this.p2.clublen--;
            this.p2.handcardsl--;
            this.p2.handcardslen--;
            this.p2.clubn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime1();
            }, 500);
          }
        }

        playdiamond1() {
          if (!this.p1.is_turn && this.p2.is_turn && this.turn == 2) return; //不是该玩家的回合，点击无效

          if (this.p1.diamondlen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown1();
            this.reset1(); //切换回合  

            this.red1.active = true;
            this.green1.active = false;
            this.red2.active = false;
            this.green2.active = true;
            this.turn = 2;
            this.p1.is_turn = false;
            this.p2.is_turn = true;
            var self3 = this.p1.diamondn.children[this.p1.diamondl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p1.diamondl--; //

            this.p1.diamondlen--;
            this.p1.handcardsl--;
            this.p1.handcardslen--;
            this.p1.diamondn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime2();
            }, 500);
          }
        }

        playdiamond2() {
          if (this.p1.is_turn && !this.p2.is_turn && this.turn == 1) return; //不是该玩家的回合，点击无效

          if (this.p2.diamondlen > 0) {
            //如果该花色牌数量大于0
            //暂停倒计时，重置倒计时
            this.stopTimeCutdown2();
            this.reset2(); //切换回合  

            this.red1.active = false;
            this.green1.active = true;
            this.red2.active = true;
            this.green2.active = false;
            this.turn = 1;
            this.p1.is_turn = true;
            this.p2.is_turn = false;
            var self3 = this.p2.diamondn.children[this.p2.diamondl]; //self3为该花色最后放入的扑克牌
            //this.p1.spade[this.p1.spadel]=null;//清除

            this.p2.diamondl--; //

            this.p2.diamondlen--;
            this.p2.handcardsl--;
            this.p2.handcardslen--;
            this.p2.diamondn.removeChild(self3); //移除该子节点即该扑克牌

            self3.removeFromParent();
            self3.active = true;
            self3.parent = this.Bg;
            this.Bg.addChild(self3);
            tween(self3).to(0.5, {
              position: new Vec3(0, 0, 0)
            }) //将牌移动到中心
            .repeat(1).start();
            setTimeout(() => {
              self3.removeFromParent();
              this.Bg.removeChild(self3);
              self3.parent = this.tail; //把该牌挂到放置区上

              this.tail.addChild(self3);
              this.taillen++;
              this.temp++;
              this.judge(); //判断花色是否和顶部花色一样

              this.startTime1();
            }, 500);
          }
        } //游戏结束


        gameover() {
          //玩家1获胜，玩家2失败
          let len1 = this.p1.handcardslen;
          let len2 = this.p2.handcardslen;

          if (len1 < len2) {
            director.loadScene("result2");
          } //玩家1失败，玩家2获胜


          if (len1 > len2) {
            director.loadScene("result1");
          } //玩家1玩家2平手


          if (len1 == len2) {
            director.loadScene("result3");
          }
        } //初始化卡牌组


        initCard() {
          var i = 0; //var j=1;

          var namep = 0;
          var cot = this.count;
          var array = new Array();
          array = this.getRandomArr(); //生成随机标签1-52

          this.schedule(function () {
            //var card:Node=instantiate(this.back);
            //实例化扑克牌
            var tag = array[i]; //var name:String;
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
                var card = instantiate(this.poker13);
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
                var card = instantiate(this.poker30);
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
            card.setScale(0.4, 0.4);
            card.setRotationFromEuler(0, 0, 6.923 * i); //this.Cards[i]=card;//同时将牌记录到卡组
            //注册扑克牌点击事件

            card.on(Node.EventType.TOUCH_END, event => {
              //将被点击的牌添加到放置区
              //console.log(this.count);
              card.removeFromParent();
              this.tail.addChild(card);
              card.parent = this.tail; //this.Tails[this.temp]=card;

              this.temp++; //指向tail节点的子节点的顶部

              this.taillen++; //放置区数量加1
              //console.log(this.taillen);

              switch (this.p1.is_turn) {
                case true:
                  this.red1.active = true;
                  this.green1.active = false;
                  this.red2.active = false;
                  this.green2.active = true;
                  this.stopTimeCutdown1();
                  this.reset1();
                  this.startTime2();
                  this.turn = 2;
                  this.p1.is_turn = false;
                  this.p2.is_turn = true;
                  break;

                case false:
                  this.red1.active = false;
                  this.green1.active = true;
                  this.red2.active = true;
                  this.green2.active = false;
                  this.stopTimeCutdown2();
                  this.reset2();
                  this.startTime1();
                  this.turn = 1;
                  this.p1.is_turn = true;
                  this.p2.is_turn = false;
              } //实现翻牌、牌的移动


              let anim = card.getComponent(Animation);
              anim.play('turn_over1');
              setTimeout(() => {
                let self1 = card.children[0];
                self1.active = true;
                anim.play('turn_over2');
                tween(card).to(1, {
                  position: new Vec3(0, 0, 0)
                }).repeat(1).start();
              }, 100);
              setTimeout(() => {
                this.judge(); //this.ok=1;
                //重置倒计时并切换回合
                //关闭点击事件，即每张牌只能点击一次

                card.pauseSystemEvents(true); //判断花色是否相同
              }, 1100);
              setTimeout(() => {
                this.count--; //卡组数量减1

                if (this.count == 0) {
                  this.gameover();
                }
              }, 2100);
            }, card);
            i = i + 1;
          }, 0.03, 51, 5.5); //this.level=this.level+1;
          //}
        } //onLoad(){}


        start() {
          // [3]
          //var level=0;
          //初始化
          this.update(1);
          this.red1.active = false;
          this.green1.active = true;
          this.red2.active = true;
          this.green2.active = false;
          this.p1.handcardsn = this.hand1;
          this.p1.handcardsl = -1;
          this.p1.handcardslen = 0;
          this.p2.handcardsn = this.hand2;
          this.p2.handcardsl = -1;
          this.p2.handcardslen = 0; //给玩家的花色即相关信息初始化

          this.p1.spaden = this.spade1;
          this.p1.heartn = this.heart1;
          this.p1.clubn = this.club1;
          this.p1.diamondn = this.diamond1;
          this.p1.spadel = -1;
          this.p1.spadelen = 0;
          this.p1.heartl = -1;
          this.p1.heartlen = 0;
          this.p1.clubl = -1;
          this.p1.clublen = 0;
          this.p1.diamondl = -1;
          this.p1.diamondlen = 0;
          this.p2.spaden = this.spade2;
          this.p2.heartn = this.heart2;
          this.p2.clubn = this.club2;
          this.p2.diamondn = this.diamond2;
          this.p2.spadel = -1;
          this.p2.spadelen = 0;
          this.p2.heartl = -1;
          this.p2.spadelen = 0;
          this.p2.heartl = -1;
          this.p2.heartlen = 0;
          this.p2.clubl = -1;
          this.p2.clublen = 0;
          this.p2.diamondl = -1;
          this.p2.diamondlen = 0;
          this.p1.is_turn = true;
          this.p2.is_turn = false;
          this.turn = 1;
          setTimeout(() => {
            this.bg_wnode.active = false;
            this.shipnode.active = false;
          }, 4500);
          this.initCard(); //while(this.level==0){};
          //给玩家的手牌即相关信息初始化
          //7065ms后开始回合
          //setTimeout(()=>{
          //this.startTime1();

          /*
          for(let i=0;i<51;i++)
          {
            var card:Node=this.Bg.children[i];//按顺序获取初始化出来的扑克牌
            //注册扑克牌点击事件,所有的牌都显示出来后再注册
            card.on(Node.EventType.TOUCH_END,(event)=>{
              //将被点击的牌添加到放置区
              card.pauseSystemEvents(true);
              this.count=this.count-1;//卡组数量减1
              card.removeFromParent();
              this.tail.addChild(card);
              card.parent=this.tail;
              //this.Tails[this.temp]=card;
              this.temp=this.temp+1;//指向tail节点的子节点的顶部
              this.taillen=this.taillen+1;//放置区数量加1
              //实现翻牌、牌的移动
              let anim=card.getComponent(Animation);
              anim.play('turn_over1');
              setTimeout(()=>{
                let self1=card.children[0];
                self1.active=true;
                anim.play('turn_over2');
                tween(card)
                  .to(1,{position:new Vec3(0,0,0)})
                  .repeat(1)
                  .start()
              },100);
            //关闭点击事件，即每张牌只能点击一次
              
              /*
              this.judge();
              if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){
                this.stopTimeCutdown1();
                this.reset1();
              }
              if(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){
                this.stopTimeCutdown2();
                this.reset2();
              }
              */
          //  },card); 
          // }

          /*
           while(1){
             //如果卡组没牌了，游戏结束
           if(this.count==0)
           {
            this.gameover();//判断结果
           }
           //玩家1的回合
           if(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){
             this.startTime1();//开始倒计时
             while(this.p1.is_turn&&!(this.p2.is_turn)&&this.turn==1){}//卡住
             //this.t1.stopTimeCutdown();
            // this.t1.reset1();
           }
           //在每个玩家操作前都先判断是否游戏结束
           if(this.count==0)
           {
            this.gameover();//判断结果
           }
           //玩家2的回合
           if(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){
             this.startTime2();//开始倒计时
             while(this.p2.is_turn&&!(this.p1.is_turn)&&this.turn==2){}//卡住
             //this.t2.stopTimeCutdown();
             //this.t2.reset2();
           }
          }
          */
          //},7065);
        }

        update(deltaTime) {
          this.s1.string = String(this.p1.spadelen);
          this.h1.string = String(this.p1.heartlen);
          this.c1.string = String(this.p1.clublen);
          this.d1.string = String(this.p1.diamondlen);
          this.s2.string = String(this.p2.spadelen);
          this.h2.string = String(this.p2.heartlen);
          this.c2.string = String(this.p2.clublen);
          this.d2.string = String(this.p2.diamondlen);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "s1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "h1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "c1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "d1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "s2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "h2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "c2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "d2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "red1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "red2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "green1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "green2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "time1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "t1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "time2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "t2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "hand1", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "hand2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "spade1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "spade2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "heart1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "heart2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "club1", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "club2", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "diamond1", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "diamond2", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bg_wnode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "shipnode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Bg", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "tail", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "poker1", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "poker2", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "poker3", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "poker4", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "poker5", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "poker6", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "poker7", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "poker8", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "poker9", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "poker10", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "poker11", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "poker12", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "poker13", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "poker14", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "poker15", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "poker16", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "poker17", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "poker18", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "poker19", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "poker20", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "poker21", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "poker22", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "poker23", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "poker24", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "poker25", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "poker26", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "poker27", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "poker28", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "poker29", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "poker30", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "poker31", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "poker32", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "poker33", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "poker34", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor65 = _applyDecoratedDescriptor(_class2.prototype, "poker35", [_dec66], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor66 = _applyDecoratedDescriptor(_class2.prototype, "poker36", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor67 = _applyDecoratedDescriptor(_class2.prototype, "poker37", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor68 = _applyDecoratedDescriptor(_class2.prototype, "poker38", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor69 = _applyDecoratedDescriptor(_class2.prototype, "poker39", [_dec70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor70 = _applyDecoratedDescriptor(_class2.prototype, "poker40", [_dec71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor71 = _applyDecoratedDescriptor(_class2.prototype, "poker41", [_dec72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor72 = _applyDecoratedDescriptor(_class2.prototype, "poker42", [_dec73], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor73 = _applyDecoratedDescriptor(_class2.prototype, "poker43", [_dec74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor74 = _applyDecoratedDescriptor(_class2.prototype, "poker44", [_dec75], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor75 = _applyDecoratedDescriptor(_class2.prototype, "poker45", [_dec76], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor76 = _applyDecoratedDescriptor(_class2.prototype, "poker46", [_dec77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor77 = _applyDecoratedDescriptor(_class2.prototype, "poker47", [_dec78], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor78 = _applyDecoratedDescriptor(_class2.prototype, "poker48", [_dec79], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor79 = _applyDecoratedDescriptor(_class2.prototype, "poker49", [_dec80], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor80 = _applyDecoratedDescriptor(_class2.prototype, "poker50", [_dec81], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor81 = _applyDecoratedDescriptor(_class2.prototype, "poker51", [_dec82], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor82 = _applyDecoratedDescriptor(_class2.prototype, "poker52", [_dec83], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=battle1.js.map