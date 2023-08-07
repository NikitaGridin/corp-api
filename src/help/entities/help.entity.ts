import { Shortcode } from 'src/shortcode/entities/shortcode.entity'
import { Entity, Column,   OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Help {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  name: string

  @OneToMany(() => Shortcode, (shortcode) => shortcode.help)
  shortocdes: Shortcode[]
}