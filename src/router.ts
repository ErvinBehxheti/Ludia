class Router {
  private routes: { [path: string]: Function } = {};

  constructor() {
    window.addEventListener("popstate", () => this.loadRoute());
  }

  addRoute(path: string, view: Function) {
    this.routes[path] = view;
  }

  navigate(path: string) {
    history.pushState({}, "", path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path];
    if (route) {
      route();
    } else {
      this.routes["/404"]();
    }
  }
}

export default new Router();
