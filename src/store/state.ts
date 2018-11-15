/**
 * @interface 接口（Interface）是行为的抽象，行动要类（Class）去实现（Implements）
 * ts中的接口 1. 定义对象的类型； 2. 对象的形状（shape）进行秒速
 */

//  一个行为的抽象 报警
interface Alarm {
  alert(): any;
}

// 一个行为的实现 给车添加报警的功能
class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}

// 一个有行为和属性的基类
class Door {
  name: string = "door";
  open() {
    console.log("open the door");
  }
}

// 继承门的行为和属性，然后实现报警这个抽象的行为
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor");
  }
}

export interface Card {
  src: string;
  content?: string;
}

export interface PageInfo {
  id: number;
  isActived: boolean;
  name: {
    defaultName: string;
    activedName: string;
  };
  path: string;
  tagName: string;
}

export interface HeaderInfo {
  left?: string;
  title: string;
  right?: string;
}

export interface State {
  activePage: PageInfo[];
  headerInfo: HeaderInfo;
  card: Card;
  user?: {
    username: string | undefined;
    id: number | null;
    createdTime: string | undefined;
  };
}

// 定义model层数据
const state: State = {
  activePage: [
    {
      id: 0,
      isActived: true,
      name: {
        defaultName: "today-o",
        activedName: "today"
      },
      path: "today",
      tagName: "日常"
    },
    {
      id: 1,
      isActived: false,
      name: {
        defaultName: "habit-o",
        activedName: "habit"
      },
      path: "habit",
      tagName: "习惯"
    },
    {
      id: 2,
      isActived: false,
      name: {
        defaultName: "setting-o",
        activedName: "setting"
      },
      path: "setting",
      tagName: "更多"
    }
  ],
  headerInfo: {
    left: "letter",
    title: "TODAY",
    right: "filter"
  },
  card: {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5xlxmMc1UjkLOsMSPPX9sKgNr3XuCNHCCCwI__iXCx2zftWo",
    content: "1"
  },
  user: {
    username: "",
    id: null,
    createdTime: ""
  }
};

export default state;
