"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@config/index");
exports.typeormConfig = {
    type: 'postgres',
    host: index_1.default.db.host,
    port: index_1.default.db.port,
    username: index_1.default.db.username,
    password: index_1.default.db.password,
    database: index_1.default.db.database,
    entities: ['src/**/**.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map