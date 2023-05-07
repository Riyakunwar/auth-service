import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { UsersService } from './users.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
    private readonly usersService: UsersService,
  ) {}

  async createArticle(createArticleDto: CreateArticleDto, userId: string) {
    const author = await this.usersService.findOne(userId);

    const article = new this.articleModel({
      ...createArticleDto,
      author,
    });

    return article.save();
  }

  async updateArticle(id: string, updateArticleDto: UpdateArticleDto) {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    Object.assign(article, updateArticleDto);

    return article.save();
  }

  async findAll() {
    return this.articleModel.find().populate('author');
  }

  async findOne(id: string) {
    const article = await this.articleModel.findById(id).populate('author');

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }
}
