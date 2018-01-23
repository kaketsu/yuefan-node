const koa = require('koa');
const fs = require('fs');
const koaRoute = require('koa-router');

class coreLoader {
    loader(path) {
        const url = path;
        const dir = fs.readdirSync(url); // 同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响
        return dir.map((filename) => {
            const module = require(url + '/' + filename);
            return { name: filename.split('.')[0], module };
        })
    }

    loadController() {
        const path = "../controller";
        return this.loader(path);
    }

    loadService() {
        const path = "../service";
        return this.loader(path);
    }
}


class kaketsu extends koa {
    constructor(props) {
        super(props);
        this.loader = new coreLoader();
        const controllers = this.loader.loadController();
        console.log(controllers);
        this.controller = {}
        controllers.forEach((ct) => {
            this.controller[ct.name] = ct.module;
        });
    }

    setRouters() {
        const _setRouters = (app) => {
            const routers = require('../routers')(app);
            const services = this.loader.loadService(); // 这里引入service
            const Router = new koaRoute(); // 这个地方新建吗？

            const svs = {};
            
            services.forEach((service) => {
                svs[service.name] = service.module;
            })

            Object.keys(routers).forEach((key) => {
                const [method, path] = key.split(" ");
                console.log(method, path)
                Router[method](path, (ctx) => {
                    const handle = routers[key];
                    handle(ctx, svs);
                })
            })
            
            return Router.routes();
        }
        this.use(_setRouters(this));
    }
}

module.exports = kaketsu;