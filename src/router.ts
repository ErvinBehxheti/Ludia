class Router {
  private routes: { [path: string]: Function[] } = {};

  constructor() {
    window.addEventListener("popstate", () => this.loadRoute());
  }

  addRoute(path: string, ...views: Function[]) {
    this.routes[path] = views;
  }

  navigate(path: string) {
    history.pushState({}, "", path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path];
    const app = document.getElementById("app");

    if (app) {
      app.innerHTML = "";

      if (route) {
        route.forEach((view) => view());
      } else {
        this.routes["/404"]?.forEach((view) => view());
      }
    }
  }
}

export default new Router();
