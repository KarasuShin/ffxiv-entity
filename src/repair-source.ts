import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { ItemEntity } from './item'

@Entity('repair_source')
export class RepairSourceEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string

  @OneToOne(() => ItemEntity)
  @JoinColumn()
  item: ItemEntity
}
