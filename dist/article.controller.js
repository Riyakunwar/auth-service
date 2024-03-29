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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const auth_middleware_1 = require("./auth.middleware");
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./create-article.dto");
const update_article_dto_1 = require("./update-article.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(userId, createArticleDto) {
        return await this.articleService.createArticle(createArticleDto, userId);
    }
    async findAll() {
        return await this.articleService.findAll();
    }
    async update(id, updateArticleDto) {
        return await this.articleService.updateArticle(id, updateArticleDto);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    (0, common_1.Post)('users/:userId/articles'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    (0, common_1.Get)('articles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    (0, common_1.Put)('articles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
ArticleController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [article_service_1.ArticlesService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map