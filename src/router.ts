interface Route {
    path: string;
    regex: RegExp;
    keys: string[];
    views: Function[];
  }
  
  class Router {
    private routes: Route[] = [];
  
    constructor() {
      window.addEventListener("popstate", () => this.loadRoute());
    }

    addRoute(path: string, ...views: Function[]) {
      const keys: string[] = [];
      const regexPath = path.replace(/:([^/]+)/g, (_, key) => {
        keys.push(key);
        return "([^/]+)";
      });
      const regex = new RegExp(`^${regexPath}$`);
      this.routes.push({ path, regex, keys, views });
    }

    async loadRoute() {
      const path = window.location.pathname;
      const app = document.getElementById("app");
  
      if (app) {
        app.innerHTML = "";
        const route = this.routes.find((route) => route.regex.test(path));
  
        if (route) {
          const match = route.regex.exec(path);
          const params: Record<string, string> = {};
  
          if (match) {
            route.keys.forEach((key, index) => {
              params[key] = match[index + 1];
            });
          }
          for (const view of route.views) {
            await view(params);
          }
        } else {
          const notFoundRoute = this.routes.find(
            (route) => route.path === "/404"
          );
          if (notFoundRoute) {
            for (const view of notFoundRoute.views) {
              await view();
            }
          }
        }
      }
    }
  
    navigate(path: string) {
      history.pushState({}, "", path);
      this.loadRoute();
    }
  }
  
  export default new Router();
  