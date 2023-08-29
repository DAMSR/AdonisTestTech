"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("@ioc:Adonis/Core/Validator");
const User_1 = __importDefault(require("App/Models/User"));
class AuthController {
    async registerShow({ view }) {
        return view.render('auth/register');
    }
    async register({ request, response, auth }) {
        const userSchema = Validator_1.schema.create({
            username: Validator_1.schema.string({ trim: true }, [Validator_1.rules.unique({ table: 'users', column: 'username', caseInsensitive: true })]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'username', caseInsensitive: true })]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)])
        });
        const data = await request.validate({ schema: userSchema });
        const user = await User_1.default.create(data);
        await auth.login(user);
        return response.redirect('/');
    }
    async loginShow({ view }) {
        return view.render('auth/login');
    }
    async login({ request, response, auth, session }) {
        const { uId, password } = request.only(['uId', 'password']);
        try {
            await auth.attempt(uId, password);
        }
        catch (error) {
            session.flash('form', 'Your username, email or password is incorrect');
            return response.redirect().back();
        }
        return response.redirect('/');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map