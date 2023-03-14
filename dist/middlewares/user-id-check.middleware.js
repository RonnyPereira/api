"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdCheckMiddlware = void 0;
const common_1 = require("@nestjs/common");
class UserIdCheckMiddlware {
    use(req, res, next) {
        if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
            throw new common_1.BadRequestException('ID inválido!');
        }
        next();
    }
}
exports.UserIdCheckMiddlware = UserIdCheckMiddlware;
//# sourceMappingURL=user-id-check.middleware.js.map