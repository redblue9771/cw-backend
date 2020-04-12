import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PspaceHasWidgets } from "../links/PspaceHasWidgets.entity";

@Index("widgets_pk", ["id"], { unique: true })
@Index("widgets_id_uindex", ["id"], { unique: true })
@Entity("widgets", { schema: "sandbox" })
export class Widgets {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(
    () => PspaceHasWidgets,
    (pspaceHasWidgets) => pspaceHasWidgets.widget
  )
  pspaceHasWidgets: PspaceHasWidgets[];
}
