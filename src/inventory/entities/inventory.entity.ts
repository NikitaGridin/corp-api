import { User } from 'src/user/entities/user.entity'
import { Entity, Column, ManyToOne } from 'typeorm'

@Entity()
export class Inventory {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column()
  name: string

  @Column()
  price: number

  @ManyToOne(() => User, (user) => user.inventories)
  user: User
}
