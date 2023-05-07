"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("./users.service");
let ArticlesService = class ArticlesService {
    constructor(articleModel, usersService) {
        this.articleModel = articleModel;
        this.usersService = usersService;
    }
    async createArticle(createArticleDto, userId) {
        const author = await this.usersService.findOne(userId);
        const article = new this.articleModel(Object.assign(Object.assign({}, createArticleDto), { author }));
        return article.save();
    }
    async updateArticle(id, updateArticleDto) {
        const article = await this.articleModel.findById(id);
        if (!article) {
            throw new common_1.NotFoundException('Article not found');
        }
        Object.assign(article, updateArticleDto);
        return article.save();
    }
    async findAll() {
        return this.articleModel.find().populate('author');
    }
    async findOne(id) {
        const article = await this.articleModel.findById(id).populate('author');
        if (!article) {
            throw new common_1.NotFoundException('Article not found');
        }
        return article;
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Article')),
    __metadata("design:paramtypes", [mongoose_2.Model, typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=article.service.js.map