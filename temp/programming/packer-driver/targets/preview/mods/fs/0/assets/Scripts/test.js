System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, Node, tween, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, level, i, temp, Cards, Tails, turn, player1, player2, p1, p2, Test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ade5axQOdxEhKBoXXL/JaxV", "test", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Test
       * DateTime = Mon Oct 18 2021 20:53:17 GMT+0800 (中国标准时间)
       * Author = Freyr_S
       * FileBasename = test.ts
       * FileBasenameNoExtension = test
       * URL = db://assets/Scripts/test.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      //玩家1(1p)

      level = 0;
      i = 0; //初始化索引

      temp = 0; //放置区顶部索引

      Cards = []; //卡组

      Tails = []; //放置区

      turn = null; //记录是哪个玩家的回合

      player1 = function player1() {
        _defineProperty(this, "spade", []);

        _defineProperty(this, "spadel", 0);

        _defineProperty(this, "spaden", void 0);

        _defineProperty(this, "heart", []);

        _defineProperty(this, "heartl", 0);

        _defineProperty(this, "heartn", void 0);

        _defineProperty(this, "club", []);

        _defineProperty(this, "clubl", 0);

        _defineProperty(this, "clubn", void 0);

        _defineProperty(this, "diamond", []);

        _defineProperty(this, "diamondl", 0);

        _defineProperty(this, "diamondn", void 0);

        _defineProperty(this, "handcards", []);

        _defineProperty(this, "handcardsl", 0);

        _defineProperty(this, "handcardsn", void 0);

        _defineProperty(this, "is_turn", true);
      } //玩家1的回合、玩家1首发
      ; //玩家2(2p)


      player2 = function player2() {
        _defineProperty(this, "spade", []);

        _defineProperty(this, "spadel", 0);

        _defineProperty(this, "spaden", void 0);

        _defineProperty(this, "heart", []);

        _defineProperty(this, "heartl", 0);

        _defineProperty(this, "heartn", void 0);

        _defineProperty(this, "club", []);

        _defineProperty(this, "clubl", 0);

        _defineProperty(this, "clubn", void 0);

        _defineProperty(this, "diamond", []);

        _defineProperty(this, "diamondl", 0);

        _defineProperty(this, "diamondn", void 0);

        _defineProperty(this, "handcards", []);

        _defineProperty(this, "handcardsl", 0);

        _defineProperty(this, "handcardsn", void 0);

        _defineProperty(this, "is_turn", false);
      } //玩家2的回合
      ; //实例化玩家


      p1 = new player1();
      p2 = new player2();

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test, _Component);

        function Test() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "Bg", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tail", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Back", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "timenode1", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "timenode2", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Test.prototype;

        /*
        @property({type:Prefab})
        private poker1 = null;
        @property({type:Prefab})
        private poker2 = null; 
        @property({type:Prefab})
        private poker3 = null; 
        @property({type:Prefab})
        private poker4 = null; 
        @property({type:Prefab})
        private poker5 = null; 
        @property({type:Prefab})
        private poker6 = null; 
        @property({type:Prefab})
        private poker7 = null; 
        @property({type:Prefab})
        private poker8 = null; 
        @property({type:Prefab})
        private poker9 = null; 
        @property({type:Prefab})
        private poker10 = null; 
        @property({type:Prefab})
        private poker11 = null; 
        @property({type:Prefab})
        private poker12 = null; 
        @property({type:Prefab})
        private poker13 = null; 
        @property({type:Prefab})
        private poker14 = null; 
        @property({type:Prefab})
        private poker15 = null; 
        @property({type:Prefab})
        private poker16 = null; 
        @property({type:Prefab})
        private poker17 = null; 
        @property({type:Prefab})
        private poker18 = null; 
        @property({type:Prefab})
        private poker19 = null; 
        @property({type:Prefab})
        private poker20 = null; 
        @property({type:Prefab})
        private poker21 = null; 
        @property({type:Prefab})
        private poker22 = null; 
        @property({type:Prefab})
        private poker23 = null; 
        @property({type:Prefab})
        private poker24 = null; 
        @property({type:Prefab})
        private poker25 = null; 
        @property({type:Prefab})
        private poker26 = null; 
        @property({type:Prefab})
        private poker27 = null; 
        @property({type:Prefab})
        private poker28 = null; 
        @property({type:Prefab})
        private poker29 = null; 
        @property({type:Prefab})
        private poker30 = null; 
        @property({type:Prefab})
        private poker31 = null; 
        @property({type:Prefab})
        private poker32 = null; 
        @property({type:Prefab})
        private poker33 = null; 
        @property({type:Prefab})
        private poker34 = null; 
        @property({type:Prefab})
        private poker35 = null; 
        @property({type:Prefab})
        private poker36 = null; 
        @property({type:Prefab})
        private poker37 = null; 
        @property({type:Prefab})
        private poker38 = null; 
        @property({type:Prefab})
        private poker39 = null; 
        @property({type:Prefab})
        private poker40 = null; 
        @property({type:Prefab})
        private poker41 = null;   
        @property({type:Prefab})
        private poker42 = null; 
        @property({type:Prefab})
        private poker43 = null; 
        @property({type:Prefab})
        private poker44 = null; 
        @property({type:Prefab})
        private poker45 = null; 
        @property({type:Prefab})
        private poker46 = null; 
        @property({type:Prefab})
        private poker47 = null; 
        @property({type:Prefab})
        private poker48 = null; 
        @property({type:Prefab})
        private poker49 = null; 
        @property({type:Prefab})
        private poker50 = null; 
        @property({type:Prefab})
        private poker51 = null; 
        @property({type:Prefab})
        private poker52 = null; 
        */
        _proto.judge = function judge() {
          if (temp > 0) {
            //如果花色和顶部牌相同
            if (Tails[temp - 1].name == Tails[temp].name) {
              //如果是玩家1的操作
              if (turn == "1p") {
                //清除放置区
                this.schedule(function () {
                  Tails[temp] = null;
                  var self2 = this.tail.chidren[temp];
                  this.tail.removeChild(self2);
                  self2.removeFromParent();

                  switch (self2.name) {
                    case "spade":
                      {
                        p1.spaden.addChild = self2;
                        p1.spadel++;
                        p1.spade[p1.spadel] = self2;
                      }

                    case "heart":
                      {
                        p1.heartn.addChild = self2;
                        p1.heartl++;
                        p1.heart[p1.heartl] = self2;
                      }

                    case "club":
                      {
                        p1.clubn.addChild = self2;
                        p1.clubl++;
                        p1.club[p1.clubl] = self2;
                      }

                    case "diamond":
                      {
                        p1.diamondn.addChild = self2;
                        p1.diamondl++;
                        p1.diamond[p1.diamondl] = self2;
                      }
                  }

                  p1.handcardsn.addChild = self2;
                  p1.handcardsl++;
                  p1.handcards[p1.handcardsl] = self2;
                  tween(self2).to(1, {
                    position: new Vec3(693, 85, 0)
                  }).repeat(1).start();
                  setTimeout(function () {
                    self2.active = false; //隐藏该扑克牌
                  }, 1000);
                }, 0.1, temp + 1, 1200);
              } //如果是玩家2的操作


              if (turn == "2p") {
                //清除放置区
                this.schedule(function () {
                  Tails[temp] = null;
                  var self2 = this.tail.chidren[temp];
                  this.tail.removeChild(self2);
                  self2.removeFromParent();

                  switch (self2.name) {
                    case "spade":
                      {
                        p2.spaden.addChild = self2;
                        p2.spadel++;
                        p2.spade[p2.spadel] = self2;
                      }

                    case "heart":
                      {
                        p2.heartn.addChild = self2;
                        p2.heartl++;
                        p2.heart[p2.heartl] = self2;
                      }

                    case "club":
                      {
                        p2.clubn.addChild = self2;
                        p2.clubl++;
                        p2.club[p2.clubl] = self2;
                      }

                    case "diamond":
                      {
                        p2.diamondn.addChild = self2;
                        p2.diamondl++;
                        p2.diamond[p2.diamondl] = self2;
                      }
                  }

                  p1.handcardsn.addChild = self2;
                  p1.handcardsl++;
                  p1.handcards[p2.handcardsl] = self2;
                  tween(self2).to(1, {
                    position: new Vec3(90, 85, 0)
                  }).repeat(1).start();
                  setTimeout(function () {
                    self2.active = false; //隐藏该扑克牌
                  }, 1000);
                }, 0.1, temp + 1, 1200);
              }
            }
          }
        } //随机打乱数组
        ;

        _proto.getRandomArr = function getRandomArr() {
          var array = new Array();
          var i;

          for (i = 1; i <= 52; i++) {
            array[i] = i;
          }

          array.sort(function () {
            return 0.5 - Math.random();
          });
          return array;
        } //暂停运行代码
        //sleep(d:number){
        //    var t=Date.now();
        //    while(Date.now()-t<=d);
        //}
        //初始化卡牌组
        ;

        _proto.initCard = function initCard() {//let j:number;
          //var array:number[]=new Array;

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
          //for(var i=0;i<52;i++)
          // {

          /*
          this.schedule(function() {
          let card:Node = instantiate(this.Back);
          //将牌添加到背景上
          this.Bg.addChild(card);
          card.parent=this.Bg;
          //设置每张牌的初始位置、大小、旋转角度
          card.setPosition(0+114.4*Math.cos(Math.PI/2+Math.PI*(0.03846)*i),9.244+114.4*Math.sin(Math.PI/2+Math.PI*(0.03846)*i));
          card.setScale(0.37,0.37);
          card.setRotationFromEuler(0,0,6.923*i);
          Cards[i]=card;//同时将牌记录到卡组
          //注册扑克牌点击事件
          card.on(Node.EventType.TOUCH_END,(event)=>{
              //将被点击的牌添加到放置区
              card.removeFromParent();
              this.tail.addChild=card;
              card.parent=this.tail;
              Tails[temp]=card;
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
              card.pauseSystemEvents(true);
              this.judge();//判断花色是否和顶部牌花色相同
              temp++;
          },card); 
          i=i+1;
            }, 0.03, 52, 0);
          //}
          level=level+1;
          }
          //游戏结束
          gameover(len1:number,len2:number){
          //玩家1获胜，玩家2失败
          if(len1<len2)
          {
            director.loadScene("result1");
          }
          //玩家1失败，玩家2获胜
          if(len1>len2){
            director.loadScene("result2");
          }
          }
          */
        };

        _proto.start = function start() {// [3]
          //var level=0;
          //初始化
          //setTimeout(()=>{this.bg_wnode.active=false;
          //    this.shipnode.active=false;},4500);
          //while(level==0){};
          //setTimeout(()=>{
          //  this.initCard();
          //},5500);

          /*
          this.initCard();
          while(level==0){};
          //游戏开始
          while(1){
            if(Cards.length==0)
            {
             this.gameover(p1.handcards.length,p2.handcards.length);
            }
            //玩家1的回合
            if(p1.is_turn&&!(p2.is_turn)){
              this.timenode1.startTime1();//开始倒计时
              while(p1.is_turn&&!(p2.is_turn)){}
             continue;
            }
            //玩家2的回合
            if(p2.is_turn&&!(p1.is_turn)){
              this.timenode2.startTime2();//开始倒计时
              while(p2.is_turn&&!(p1.is_turn)){}
            }
          }
          */
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Test;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Back", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timenode1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "timenode2", [_dec6], {
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
//# sourceMappingURL=test.js.map