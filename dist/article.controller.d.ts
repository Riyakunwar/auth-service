import { ArticlesService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { UpdateArticleDto } from './update-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticlesService);
    create(userId: string, createArticleDto: CreateArticleDto): Promise<any>;
    findAll(): Promise<Omit<any, never>[]>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<any>;
}
