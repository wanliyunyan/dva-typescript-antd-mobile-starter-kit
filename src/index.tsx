import dva from "dva";
import createLoading from "dva-loading";
// import createBrowserHistory from "history/createBrowserHistory";
// import createHistory from "history/createHashHistory";
import "./index.less";
import models from "./models";
import router from "./router";

// 1. Initialize
/*const app = dva({history: createBrowserHistory({
    basename:''
  })});*/

// 1. Initialize
let app = dva();
if (process.env.NODE_ENV === "development") {
  import("react-hot-loader/root").then(({ hot }) => {
    app = hot(dva());
  });
}

// 2. Plugins
app.use(createLoading());

// 3. Model
models.forEach(m => {
  app.model(m.default);
});

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
