import Loadable from "react-loadable";
import { MyLoadingComponent } from "../components/Load";

const BasicLayout = Loadable({
  loader: () => import("../layouts/BasicLayout"),
  loading: MyLoadingComponent
});

const Home1 = Loadable({
  loader: () => import("../routes/Home1/index"),
  loading: MyLoadingComponent
});

const Home2 = Loadable({
  loader: () => import("../routes/Home2/index"),
  loading: MyLoadingComponent
});

const Home3 = Loadable({
  loader: () => import("../routes/Home3/index"),
  loading: MyLoadingComponent
});

const Home4 = Loadable({
  loader: () => import("../routes/Home4/index"),
  loading: MyLoadingComponent
});

const data = [
  {
    component: BasicLayout,
    layout: "BasicLayout",
    name: "master",
    path: "",
    children: [
      {
        name: "Home1",
        path: "/home",
        component: Home1,
        icon:
          "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"
      },
      {
        name: "Home2",
        path: "/home2",
        component: Home2,
        icon:
          "https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg",
        selectedIcon:
          "https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg"
      },
      {
        name: "Home3",
        path: "/home3",
        component: Home3,
        icon:
          "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
      },
      {
        name: "Home4",
        path: "/home4",
        component: Home4,
        icon:
          "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
      }
    ]
  }
];

export default data;
