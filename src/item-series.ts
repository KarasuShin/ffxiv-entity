import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { ItemEntity } from './item'

@Entity('item_series')
export class ItemSeriesEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @Column('varchar', { length: 32 })
  nameHans: string

  @OneToMany(() => ItemEntity, item => item.itemSeries)
  items: ItemEntity[]
}
