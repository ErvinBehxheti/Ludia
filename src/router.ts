class Router {
  private routes: { [path: string]: Function[] } = {};

  constructor() {
    window.addEventListener("popstate", () => this.loadRoute());
  }

  addRoute(path: string, ...views: Function[]) {
    this.routes[path] = views;
  }

  async loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path];
    const app = document.getElementById("app");

    if (app) {
      app.innerHTML = "";

      if (route) {
        for (const view of route) {
          await view();
        }
      } else {
        const notFoundRoute = this.routes["/404"];
        if (notFoundRoute) {
          for (const view of notFoundRoute) {
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
