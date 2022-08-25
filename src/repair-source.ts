import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { ItemEntity } from './item'

@Entity('repair_source')
export class RepairSourceEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @OneToOne(() => ItemEntity)
  @JoinColumn()
  item: ItemEntity
}
