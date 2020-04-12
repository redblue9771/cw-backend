import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../users/Users.entity";
import { PspaceHasWidgets } from "../links/PspaceHasWidgets.entity";

@Index("personalspace_id_uindex", ["id"], { unique: true })
@Index("personalspace_pk", ["id"], { unique: true })
@Entity("personalspace", { schema: "sandbox" })
export class Personalspace {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(() => Users, (users) => users.personalspaces)
  @JoinColumn([{ name: "User", referencedColumnName: "primaryemail" }])
  user: Users;

  @OneToMany(
    () => PspaceHasWidgets,
    (pspaceHasWidgets) => pspaceHasWidgets.pspace
  )
  pspaceHasWidgets: PspaceHasWidgets[];
}
