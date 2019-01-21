import BasicLayout from "../layouts/BasicLayout";
import Home1 from "../routes/Home1/index";
import Home2 from "../routes/Home2/index";
import Home3 from "../routes/Home3/index";
import Home4 from "../routes/Home4/index";

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
