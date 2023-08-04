import { Inventory } from 'src/inventory/entities/inventory.entity'
import { User } from 'src/user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity('UserInventory')
export class UserInventory {
  @PrimaryColumn({ name: 'user_id' })
  studentId: string

  @PrimaryColumn({ name: 'inventory_id' })
  courseId: string

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: User[]

  @ManyToOne(() => Inventory, (inventory) => inventory.id, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'inventory_id', referencedColumnName: 'id' }])
  inventories: Inventory[]
}
