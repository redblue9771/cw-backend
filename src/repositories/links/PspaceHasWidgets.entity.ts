import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Personalspace } from "../personalSpace/Personalspace.entity";
import { Widgets } from "../widgets/Widgets.entity";

@Index("pspace_has_widgets_id_uindex", ["id"], { unique: true })
@Index("pspace_has_widgets_pk", ["id"], { unique: true })
@Entity("pspace_has_widgets", { schema: "sandbox" })
export class PspaceHasWidgets {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(
    () => Personalspace,
    (personalspace) => personalspace.pspaceHasWidgets
  )
  @JoinColumn([{ name: "pspace", referencedColumnName: "id" }])
  pspace: Personalspace;

  @ManyToOne(() => Widgets, (widgets) => widgets.pspaceHasWidgets)
  @JoinColumn([{ name: "widget", referencedColumnName: "id" }])
  widget: Widgets;
}
