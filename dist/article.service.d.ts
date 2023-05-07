import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { UsersService } from './users.service';
export declare class ArticlesService {
    private readonly articleModel;
    private readonly usersService;
    constructor(articleModel: Model<Article>, usersService: UsersService);
    createArticle(createArticleDto: CreateArticleDto, userId: string): Promise<any>;
    updateArticle(id: string, updateArticleDto: UpdateArticleDto): Promise<any>;
    findAll(): Promise<Omit<any, never>[]>;
    findOne(id: string): Promise<any>;
}
