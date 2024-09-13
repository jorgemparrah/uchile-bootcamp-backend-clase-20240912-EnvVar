"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: `.env${process.env.ARCHIVO_ENV}`,
                isGlobal: true,
                validate: (config) => {
                    if (!config.PORT) {
                        throw new Error('PORT is required');
                    }
                    if (config.PORT == "6000") {
                        throw new Error('PORT must be different from 6000');
                    }
                    return {
                        PORT: parseInt(config.PORT),
                        USUARIO: config.USUARIO,
                        CLAVE: config.CLAVE,
                        AMBIENTE: config.AMBIENTE,
                        npm_package_name: config.npm_package_name,
                        npm_package_version: config.npm_package_version,
                        npm_package_dependencies_rxjs: config.npm_package_dependencies_rxjs,
                        npm_package_author_name: config.npm_package_author_name,
                        npm_package_author_email: config.npm_package_author_email
                    };
                },
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map