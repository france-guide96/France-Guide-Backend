"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env, }) => ({
    upload: {
        config: {
            responsiveDimensions: true,
            sizeLimit: 2 * 1024 * 1024,
        },
    },
});
exports.default = config;
