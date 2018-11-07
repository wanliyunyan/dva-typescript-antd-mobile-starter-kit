import dva from "dva";
import createLoading from "dva-loading";
import createBrowserHistory from "history/createBrowserHistory";
import createHistory from "history/createHashHistory";
import "./index.less";
import models from "./models";
import router from "./router";

const app = dva({
  history: createHistory()
});

// 1. Initialize
/*const app = dva({history: createBrowserHistory({
    basename:''// 这里放入你对应的 basename
  })});*/

// 2. Plugins
app.use(createLoading());

// 3. Model
models.forEach(m => {
  app.model(m.default); // ts 导出格式包含default
});

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
