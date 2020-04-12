import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Offices } from "../offices/Offices.entity";
import { Users } from "../users/Users.entity";

@Index("office_has_users_pk", ["id"], { unique: true })
@Index("office_has_users_id_uindex", ["id"], { unique: true })
@Entity("office_has_users", { schema: "sandbox" })
export class OfficeHasUsers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(() => Offices, (offices) => offices.officeHasUsers)
  @JoinColumn([{ name: "officeid", referencedColumnName: "id" }])
  office: Offices;

  @ManyToOne(() => Users, (users) => users.officeHasUsers)
  @JoinColumn([{ name: "useremail", referencedColumnName: "primaryemail" }])
  useremail: Users;
}
