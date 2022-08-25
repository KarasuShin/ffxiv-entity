import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { ItemEntity } from './item'

@Entity('grand_company')
export class GrandCompanyEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @Column('varchar', { length: 32 })
  nameHans: string

  @OneToMany(() => ItemEntity, item => item.itemSeries)
  items: ItemEntity[]
}
