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
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
function buildMail() { }
function getCountry(ip) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get("http://ip-api.com/json/" + ip);
        return res.data.country;
    });
}
function getGender(name, country, ip) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: "GET",
            url: "https://gender.p.rapidapi.com/get",
            params: {
                name,
                ip,
                country,
            },
            headers: {
                "X-RapidAPI-Key": process.env.API_KEY,
                "X-RapidAPI-Host": "gender.p.rapidapi.com",
            },
        };
        const res = yield axios_1.default.get("https://gender.p.rapidapi.com/get", {
            method: "GET",
            url: "https://gender.p.rapidapi.com/get",
            params: {
                name,
                ip,
                country,
            },
            headers: {
                "X-RapidAPI-Key": process.env.API_KEY,
                "X-RapidAPI-Host": "gender.p.rapidapi.com",
            },
        });
        return yield res.data.gender;
    });
}
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        const country = yield getCountry("94.145.15.90");
        const gender = yield getGender("Abed", country, "94.145.15.90");
        console.log(gender);
    });
}
Main();
