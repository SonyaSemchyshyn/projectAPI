"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseURL = 'https://content.dropboxapi.com/2';
const tokenScoredApp = 'Bearer sl.BY6oay7NugVwmz8AfpNKllgPOn7Kts2vjSP1ECrmSkM_xi1pbd1Yw1DgwTtCtK4cwP6LtGsY_vWWgUTyDmis6Q6uPDsSHG_wtOTZqaan64zlsHlmcTDwRHZkzbzinz2QlkLDhfny';
const tokenAppFolder = 'Bearer sl.BY7SvHpumoq8Yf9b8AkY0tw9nfM5QAehPxn3CN1WfbsSUnuLkM2T93-PK-tPyEKU6pxPHH7z2KDhSbDJenlSySWcwckZEwQGTeMzfQWxF-QwzJN7VN6Ng4itw1d07DpwSGzMH6zI';
const contentType = "application/json";
describe('', () => __awaiter(void 0, void 0, void 0, function* () {
    let id;
    it('Should upload file', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, node_fetch_1.default)(`${baseURL}/files/upload`, {
            method: 'POST',
            headers: {
                Authorization: tokenAppFolder,
                "Dropbox-API-Arg": JSON.stringify({ "path": "/Users/sonyasemchyshyn/Desktop/projectAPI/APi.jpg" }),
                "Content-Type": 'application/octet-stream'
            }
        });
        const resJSON = yield res.json();
        // @ts-ignore
        id = resJSON['id'];
        // @ts-ignore
        (0, chai_1.expect)(resJSON['name']).to.equal('APi.jpg');
        (0, chai_1.expect)(res.status).to.equal(200);
    }));
    it('Should get file meta data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(id);
        const res2 = yield (0, node_fetch_1.default)('https://api.dropboxapi.com/2/sharing/get_file_metadata', {
            method: 'POST',
            headers: {
                Authorization: tokenScoredApp,
                "Content-Type": contentType
            },
            body: JSON.stringify({ 'file': id })
        });
        const resJ = yield res2.json();
        console.log(id);
        (0, chai_1.expect)(res2.status).to.equal(200);
        // @ts-ignore
        (0, chai_1.expect)(resJ['id']).to.equal(id);
    }));
    it('Should delete file', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, node_fetch_1.default)('https://api.dropboxapi.com/2/files/delete_v2', {
            method: 'POST',
            headers: {
                Authorization: tokenAppFolder,
                "Content-Type": contentType,
            },
            body: JSON.stringify({ "path": "/users/sonyasemchyshyn/desktop/projectapi/api.jpg" })
        });
        const resJ = yield res.json();
        (0, chai_1.expect)(res.status).to.equal(200);
        // @ts-ignore
        (0, chai_1.expect)(resJ['metadata']['id']).to.equal(id);
    }));
}));
