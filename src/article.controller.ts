import { AuthMiddleware } from './auth.middleware';
import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { UpdateArticleDto } from './update-article.dto';


@Controller('api')
export class ArticleController {
  constructor(private readonly articleService: ArticlesService) {}

  @UseGuards(AuthMiddleware)
  @Post('users/:userId/articles')
  async create(@Param('userId') userId: string, @Body() createArticleDto: CreateArticleDto) {
    return await this.articleService.createArticle(createArticleDto, userId);
  }

  @UseGuards(AuthMiddleware)
  @Get('articles')
  async findAll() {
    return await this.articleService.findAll();
  }

  @UseGuards(AuthMiddleware)
  @Put('articles/:id')
  async update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return await this.articleService.updateArticle(id,updateArticleDto);
  }
}

