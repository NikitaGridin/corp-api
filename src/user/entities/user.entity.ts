import { Inventory } from 'src/inventory/entities/inventory.entity'
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm'

@Entity()
export class User {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column()
  name: string

  @Column()
  surname: string

  @Column()
  patronymic: string

  // @ManyToMany(() => Inventory, (inventory) => inventory.id, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // @JoinTable({
  //   name: 'user_inventory',
  //   joinColumn: {
  //     name: 'user_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'inventory_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // inventories?: Inventory[]
}
