import { User } from 'src/user/entities/user.entity'
import { Entity, Column,  JoinTable, OneToMany, ManyToMany } from 'typeorm'

@Entity()
export class WorkPosition {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column({ length: 50 })
  name: string
  
  @ManyToMany(() => User, (user) => user.workPositions)
  users: User[]
}