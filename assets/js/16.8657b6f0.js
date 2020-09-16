(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(v,_,t){"use strict";t.r(_);var r=t(25),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[v._v("#")]),v._v(" 观察者模式")]),v._v(" "),t("h2",{attrs:{id:"动机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[v._v("#")]),v._v(" 动机")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("建立一种对象与对象之间的依赖关系，一个对象发生改变时将自动通知其他对象，其他对象将相应做出反应。在此，发生改变的对象称为观察目标，而被通知的对象称为观察者，一个观察目标可以对应多个观察者，而且这些观察者之间没有相互联系")]),v._v("，可以==根据需要增加和删除观察者，使得系统更易于扩展，这就是观察者模式的模式动机==。")])]),v._v(" "),t("blockquote",[t("p",[v._v("观察者模式要解决的问题为：建立一个一（Subject）对多（Observer）的依赖关系，并且做到"),t("strong",[v._v('当"一"变化的时候，依赖这个"一"的多也能够同步改变')]),v._v("。最常见的一个例子就是："),t("strong",[v._v("对同一组数据进行统计分析时候，我们希望能够提供多种形式的表示（例如以表格进行统计显示、柱状图统计显示、百分比统计显示等）")]),v._v("。这些表示"),t("strong",[v._v("都依赖于同一组数据")]),v._v("，我们当然需要当数据改变的时候，所有的统计的显示都能够同时改变。观察者模式就是解决了这一个问题。")])]),v._v(" "),t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[v._v("#")]),v._v(" 定义")]),v._v(" "),t("blockquote",[t("p",[v._v("观察者模式(Observer Pattern)：定义"),t("strong",[v._v("对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新")]),v._v("。观察者模式又叫做发布-订阅（Publish/Subscribe）模式、模型-视图（Model/View）模式、源-监听器（Source/Listener）模式或从属者（Dependents）模式。")]),v._v(" "),t("p",[v._v("观察者模式是一种对象行为型模式。")])]),v._v(" "),t("h2",{attrs:{id:"uml图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uml图"}},[v._v("#")]),v._v(" UML图")]),v._v(" "),t("p",[v._v("to do")]),v._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[v._v("#")]),v._v(" 代码")]),v._v(" "),t("p",[v._v("见实现")]),v._v(" "),t("h2",{attrs:{id:"模式分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式分析"}},[v._v("#")]),v._v(" 模式分析")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("观察者模式描述了如何建立对象与对象之间的依赖关系，如何构造满足这种需求的系统。")]),v._v(" "),t("li",[v._v("这一模式中的关键对象是观察目标和观察者，"),t("strong",[v._v("一个目标可以有任意数目的与之相依赖的观察者，一旦目标的状态发生改变，所有的观察者都将得到通知。")])]),v._v(" "),t("li",[v._v("作"),t("strong",[v._v("为对这个通知的响应，每个观察者都将即时更新自己的状态，以与目标状态同步")]),v._v("，这种交互也称为发布-订阅(publishsubscribe)。目标是通知的发布者，它"),t("strong",[v._v("发出通知时并不需要知道谁是它的观察者，可以有任意数目的观察者订阅它并接收通知")]),v._v("。")])])]),v._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式可以"),t("strong",[v._v("实现表示层和数据逻辑层的分离，并定义了稳定的消息更新传递机制，抽象了更新接口，使得可以有各种各样不同的表示层作为具体观察者角色。")])]),v._v(" "),t("li",[v._v("观察者模式在观察目标和观察者之间建立一个抽象的耦合。")]),v._v(" "),t("li",[v._v("观察者模式"),t("strong",[v._v("支持广播通信")]),v._v("。")]),v._v(" "),t("li",[v._v("观察者模式符合“开闭原则”的要求。")])]),v._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ul",[t("li",[v._v("如果一个观察目标对象"),t("strong",[v._v("有很多直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间")]),v._v("。")]),v._v(" "),t("li",[v._v("如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。")]),v._v(" "),t("li",[v._v("观察者模式"),t("strong",[v._v("没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"使用环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用环境"}},[v._v("#")]),v._v(" 使用环境")]),v._v(" "),t("ul",[t("li",[v._v("一个抽象模型有两个方面，其中"),t("strong",[v._v("一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("一个对象必须通知其他对象，而并不知道这些对象是谁")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("需要在系统中创建一个触发链，A对象的行为将影响B对象，B对象的行为将影响C对象……，可以使用观察者模式创建一种链式触发机制")]),v._v("。")])]),v._v(" "),t("h2",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[v._v("#")]),v._v(" 应用")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("给在线用户发通知")])]),v._v(" "),t("li",[t("p",[v._v("给涉及一对多场景发信息")])]),v._v(" "),t("li",[t("p",[v._v("MVC模式")])])]),v._v(" "),t("blockquote",[t("p",[v._v("MVC模式是一种架构模式，它包含三个角色：模型(Model)，视图(View)和控制器(Controller)。观察者模式可以用来实现MVC模式，观察者模式中的观察目标就是MVC模式中的模型(Model)，而观察者就是MVC中的视图(View)，控制器(Controller)充当两者之间的中介者(Mediator)。"),t("strong",[v._v("当模型层的数据发生改变时，视图层将自动改变其显示内容。")])])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式又叫做发布-订阅模式、模型-视图模式、源-监听器模式或从属者模式。观察者模式是一种对象行为型模式。")]),v._v(" "),t("li",[v._v("观察者模式包含四个角色：目标又称为主题，它是指被观察的对象；具体目标是目标类的子类，通常它包含有经常发生改变的数据，当它的状态发生改变时，向它的各个观察者发出通知；观察者将对观察目标的改变做出反应；在具体观察者中维护一个指向具体目标对象的引用，它存储具体观察者的有关状态，这些状态需要和具体目标的状态保持一致。")]),v._v(" "),t("li",[v._v("观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。")]),v._v(" "),t("li",[v._v("观察者模式的主要优点在于可以实现表示层和数据逻辑层的分离，并在观察目标和观察者之间建立一个抽象的耦合，支持广播通信；其主要缺点在于如果一个观察目标对象有很多直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间，而且如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。")]),v._v(" "),t("li",[v._v("观察者模式适用情况包括：一个抽象模型有两个方面，其中一个方面依赖于另一个方面；一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变；一个对象必须通知其他对象，而并不知道这些对象是谁；需要在系统中创建一个触发链。")]),v._v(" "),t("li",[v._v("在JDK的java.util包中，提供了Observable类以及Observer接口，它们构成了Java语言对观察者模式的支持。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);