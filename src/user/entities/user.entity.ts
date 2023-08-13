import { Departament } from 'src/departament/entities/departament.entity'
import { Inventory } from 'src/inventory/entities/inventory.entity'
import { News } from 'src/news/entities/news.entity'
import { Role } from 'src/roles/entities/role.entity'
import { WorkPosition } from 'src/work-position/entities/work-position.entity'
import { Entity, Column,  JoinTable, OneToMany, ManyToMany, ManyToOne, OneToOne } from 'typeorm'

@Entity()
export class User {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column({ length: 50 })
  name: string
 
  @Column({ length: 50 })
  surname: string
 
  @Column({ length: 50 }) 
  patronymic: string

  @Column() 
  image: string

  @Column()
  password: string

  @Column({ type: 'date' })
  date_of_birth: Date
  
  @Column()
  phone: string
  
  @OneToMany(() => Inventory, (inventory) => inventory.user)
  inventories: Inventory[]
  
  @ManyToMany(() => WorkPosition, (wokrPosition) => wokrPosition.users)
  @JoinTable({ name: 'position_user' })
  workPositions: WorkPosition[]
  
  @ManyToOne(() => Departament, (departament) => departament.user)
  departament: Departament
  
  @ManyToMany(() => News, (news) => news.views)
  @JoinTable({ name: 'views' })
  views: News[]
  
  @ManyToMany(() => News, (news) => news.likes)
  @JoinTable({ name: 'likes' })
  likes: News[]
  
  @ManyToOne(() => Role, (role) => role.users)
  role: Role  
}