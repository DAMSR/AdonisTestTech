"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(require("@ioc:Adonis/Core/Route"));
Route_1.default.get('/', async ({ view }) => {
    return view.render('welcome');
});
Route_1.default.get('register', 'AutoController.registerShow').as('auth.register.show');
Route_1.default.post('register', 'AuthController.register').as('auth.register');
Route_1.default.get('login', 'AutoController.loginShow').as('auth.login.show');
Route_1.default.post('login', 'AuthController.login').as('auth.login');
//# sourceMappingURL=routes.js.map