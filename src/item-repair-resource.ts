import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import { ItemEntity } from './item'

@Entity('item_repair_resource')
export class ItemRepairResourceEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @OneToOne(() => ItemEntity, { nullable: true })
  @JoinColumn()
  item: ItemEntity

  @OneToMany(() => ItemEntity, item => item.itemRepairResource)
  repairedItems: ItemEntity[]
}
