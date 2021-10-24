System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Animation, tween, Vec3, Component, Node, instantiate, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, Bb;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d40431iGB9E5InMd5jjpa5a", "bb", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Battle1
       * DateTime = Sun Oct 10 2021 23:16:08 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = battle1.ts
       * FileBasenameNoExtension = battle1
       * URL = db://assets/Scripts/battle1.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      //enum CardSuit{
      //  spade=1,
      //  heart=2,
      //  club=3,
      //  diamond=4,
      //} 

      _export("Bb", Bb = (_dec = ccclass('Bb'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class Bb extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg_wnode", _descriptor, this);

          _initializerDefineProperty(this, "shipnode", _descriptor2, this);

          _initializerDefineProperty(this, "Bg", _descriptor3, this);

          _initializerDefineProperty(this, "tail", _descriptor4, this);

          _initializerDefineProperty(this, "Back", _descriptor5, this);
        }

        //随机打乱数组
        getRandomArr() {
          var array = new Array();
          let i;

          for (i = 1; i <= 52; i++) {
            array[i] = i;
          }

          array.sort(function () {
            return 0.5 - Math.random();
          });
          return array;
        } //初始化卡牌组


        initCard() {
          let j;
          var array = new Array();
          var Cards = []; //卡组

          var Tails = []; //放置区

          /*
          array=this.getRandomArr();
          for(j=1;j<=52;j++){
            //var node:Node=instantiate(this.poker);
            //node.getComponent("Prefab").SpritFrame=new SpriteFrame()
            //var pfront:Node = node.getComponent('front').SpriteFrame;
            //pfront.cc.Sprite
            var i=array[j];
            var name:String;
            //黑桃
            if(i>=1&&i<=13){
              //let node:Node=instantiate(this.poker_spade);
              name="spade";
            }
            //红心
            if(i>=14&&i<=26){
              //let node:Node=instantiate(this.poker_heart);
              name="heart";
            }
            //梅花
            if(i>=27&&i<=39){
              //var node:Node=instantiate(this.poker_club);
              name="club";
            }
            //方块
            if(i>=40&&i<=52){
              //var node:Node=instantiate(this.poker_diamond);
              name="diamond";
            }
            //实例化预制体
            switch(name){
              case "spade":{
                var node:Node;
                node.name="spade";
                switch(i){
                  case 1:{
                    node=instantiate(this.poker1);
                  }
                  case 2:{
                    node=instantiate(this.poker2);
                  }
                  case 3:{
                    node=instantiate(this.poker3);
                  }
                  case 4:{
                    node=instantiate(this.poker4);
                  }
                  case 5:{
                    node=instantiate(this.poker5);
                  }
                  case 6:{
                    node=instantiate(this.poker6);
                  }
                  case 7:{
                    node=instantiate(this.poker7);
                  }
                  case 8:{
                    node=instantiate(this.poker8);
                  }
                  case 9:{
                    node=instantiate(this.poker9);
                  }
                  case 10:{
                    node=instantiate(this.poker10);
                  }
                  case 11:{
                    node=instantiate(this.poker11);
                  }
                  case 12:{
                    node=instantiate(this.poker12);
                  }
                  case 13:{
                    node=instantiate(this.poker13);
                  }
                break;
                }
              }
              case "heart":{
                var node:Node;
                node.name="heart";
                switch(i){
                  case 14:{
                    node=instantiate(this.poker14);
                  }
                  case 15:{
                    node=instantiate(this.poker15);
                  }
                  case 16:{
                    node=instantiate(this.poker16);
                  }
                  case 17:{
                    node=instantiate(this.poker17);
                  }
                  case 18:{
                    node=instantiate(this.poker18);
                  }
                  case 19:{
                    node=instantiate(this.poker19);
                  }
                  case 20:{
                    node=instantiate(this.poker20);
                  }
                  case 21:{
                    node=instantiate(this.poker21);
                  }
                  case 22:{
                    node=instantiate(this.poker22);
                  }
                  case 23:{
                    node=instantiate(this.poker23);
                  }
                  case 24:{
                    node=instantiate(this.poker24);
                  }
                  case 25:{
                    node=instantiate(this.poker25);
                  }
                  case 26:{
                    node=instantiate(this.poker26);
                  }
                break;
                }
              }
              case "club":{
                var node:Node;
                node.name="club";
                switch(i){
                  case 27:{
                    node=instantiate(this.poker27);
                  }
                  case 28:{
                    node=instantiate(this.poker28);
                  }
                  case 29:{
                    node=instantiate(this.poker29);
                  }
                  case 30:{
                    node=instantiate(this.poker30);
                  }
                  case 31:{
                    node=instantiate(this.poker31);
                  }
                  case 32:{
                    node=instantiate(this.poker32);
                  }
                  case 33:{
                    node=instantiate(this.poker33);
                  }
                  case 34:{
                    node=instantiate(this.poker34);
                  }
                  case 35:{
                    node=instantiate(this.poker35);
                  }
                  case 36:{
                    node=instantiate(this.poker36);
                  }
                  case 37:{
                    node=instantiate(this.poker37);
                  }
                  case 38:{
                    node=instantiate(this.poker38);
                  }
                  case 39:{
                    node=instantiate(this.poker39);
                  }
                break;
                }
              }
              case "diamond":{
                var node:Node;
                node.name="diamond";
                switch(i){
                  case 40:{
                    node=instantiate(this.poker40);
                  }
                  case 41:{
                    node=instantiate(this.poker41);
                  }
                  case 42:{
                    node=instantiate(this.poker42);
                  }
                  case 43:{
                    node=instantiate(this.poker43);
                  }
                  case 44:{
                    node=instantiate(this.poker44);
                  }
                  case 45:{
                    node=instantiate(this.poker45);
                  }
                  case 46:{
                    node=instantiate(this.poker46);
                  }
                  case 47:{
                    node=instantiate(this.poker47);
                  }
                  case 48:{
                    node=instantiate(this.poker48);
                  }
                  case 49:{
                    node=instantiate(this.poker49);
                  }
                  case 50:{
                    node=instantiate(this.poker50);
                  }
                  case 51:{
                    node=instantiate(this.poker51);
                  }
                  case 52:{
                    node=instantiate(this.poker52);
                  }
                break;
                }
              }
            }
            this.Bg.addChild(node);
            node.parent=this.Bg;
            node.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*j),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*j));
            node.setScale(0.3,0.3);
            node.setRotationFromEuler(0,0,6.923*j);
            node.active=true;
            Cards[j]=node;
          }
          */

          for (var i = 0; i < 52; i++) {
            let card = instantiate(this.Back);
            var Cards = [];
            this.Bg.addChild(card);
            card.parent = this.Bg;
            card.setPosition(0 + 114.4 * Math.cos(Math.PI / 2 + Math.PI * 0.03846 * i), 9.244 + 114.4 * Math.sin(Math.PI / 2 + Math.PI * 0.03846 * i));
            card.setScale(0.37, 0.37); //card.is3DNode=true;

            card.setRotationFromEuler(0, 0, 6.923 * i);
            Cards[i] = card;
            card.on(Node.EventType.TOUCH_END, event => {
              card.removeFromParent();
              this.tail.addChild = card;
              card.parent = this.tail;
              Tails[i] = card;
              let anim = card.getComponent(Animation);
              anim.play('turn_over1');
              setTimeout(() => {
                let self1 = card.children[0];
                self1.active = true;
                anim.play('turn_over2');
                tween(card).to(1, {
                  position: new Vec3(0, 9.244, 0)
                }).repeat(1).start();
              }, 100);
              card.pauseSystemEvents(true);
            }, card);
          }
        } //onLoad(){}


        start() {
          // [3]
          var level = 0;
          setTimeout(() => {
            this.bg_wnode.active = false;
            this.shipnode.active = false;
            level += 1;
          }, 4500);

          while (level == 0) {}

          ;
          setTimeout(() => {
            this.initCard();
          }, 5000);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg_wnode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shipnode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tail", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Back", [_dec6], {
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
//# sourceMappingURL=bb.js.map