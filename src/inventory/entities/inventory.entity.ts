import { User } from 'src/user/entities/user.entity'
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm'

@Entity()
export class Inventory {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column()
  name: string

  @Column()
  price: number

  // @ManyToMany(() => User, (user) => user.inventories, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // users?: User[]
}
