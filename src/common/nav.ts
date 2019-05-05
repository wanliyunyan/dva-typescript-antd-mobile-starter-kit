import { lazy } from "react";

const data = [
  {
    component: lazy(() => import("../layouts/BasicLayout")),
    layout: "BasicLayout",
    name: "master",
    path: "",
    children: [
      {
        name: "Home1",
        path: "/home",
        component: lazy(() => import("../routes/Home1/index")),
        icon:
          "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"
      },
      {
        name: "Home2",
        path: "/home2",
        component: lazy(() => import("../routes/Home2/index")),
        icon:
          "https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg",
        selectedIcon:
          "https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg"
      },
      {
        name: "Home3",
        path: "/home3",
        component: lazy(() => import("../routes/Home3/index")),
        icon:
          "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
      },
      {
        name: "Home4",
        path: "/home4",
        component: lazy(() => import("../routes/Home4/index")),
        icon:
          "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
      }
    ]
  }
];

export default data;
