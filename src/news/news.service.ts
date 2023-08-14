import { Injectable } from '@nestjs/common'
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { News } from './entities/news.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async create(userId: string, newsId: number) {
    await this.newsRepository
      .createQueryBuilder()
      .insert()
      .into('likes')
      .values({ userId, newsId })
      .execute()
  }
  async removeLike(userId: string, newsId: number): Promise<void> {
    await this.newsRepository
      .createQueryBuilder()
      .delete()
      .from('likes')
      .where('userId = :userId', { userId })
      .andWhere('newsId = :newsId', { newsId })
      .execute()
  }

  async findAll(userId): Promise<any> {
    return this.newsRepository
      .createQueryBuilder('news')
      .leftJoin('news.views', 'views')
      .leftJoin('news.likes', 'likes')
      .leftJoin('news.imgNew', 'images')
      .addSelect('GROUP_CONCAT(images.imgUrl)', 'imgUrls')
      .addSelect('COUNT(DISTINCT views.id)', 'viewsCount')
      .addSelect('COUNT(DISTINCT likes.id)', 'likesCount')
      .addSelect(
        'COUNT(CASE WHEN likes.id = :userId THEN 1 ELSE NULL END)',
        'currentUserLiked',
      ) // Если есть, то true, иначе false
      .addSelect(
        'COUNT(CASE WHEN views.id = :userId THEN 1 ELSE NULL END)',
        'currentUserViews',
      ) // Если есть, то true, иначе false
      .setParameter('userId', userId)
      .groupBy('news.id')
      .getRawMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} news`
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`
  }

  remove(id: number) {
    return `This action removes a #${id} news`
  }
}
