import { Help } from 'src/help/entities/help.entity'
import { Entity, Column,    ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Shortcode {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  name: string

  @ManyToOne(() => Help, (help) => help.shortocdes)
  help: Help
}