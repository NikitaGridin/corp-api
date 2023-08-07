import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Holidays {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 100 })
  name: string

 @Column({ type: 'date' })
 date: Date
}