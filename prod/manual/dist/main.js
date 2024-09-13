"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const puerto = process.env.PUERTO;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    console.log('PORT:', configService.get("PORT"));
    console.log('USUARIO:', configService.get("USUARIO"));
    console.log('CLAVE:', configService.get("CLAVE"));
    console.log('AMBIENTE:', configService.get("AMBIENTE"));
    console.log(configService.get("npm_package_name"));
    console.log(configService.get("npm_package_version"));
    console.log(configService.get("npm_package_dependencies_rxjs"));
    console.log(configService.get("npm_package_author_name"));
    console.log(configService.get("npm_package_author_email"));
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map