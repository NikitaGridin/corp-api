import { News } from 'src/news/entities/news.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class ImgNew {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'date' })
  imgUrl: string

  @ManyToOne(() => News, (News) => News.imgNew)
  news: News
}
