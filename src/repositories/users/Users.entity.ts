import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OfficeHasUsers } from "../links/OfficeHasUsers.entity";
import { Offices } from "../offices/Offices.entity";
import { Personalspace } from "../personalSpace/Personalspace.entity";
import { UserHasScenarios } from "../links/UserHasScenarios.entity";
import { Roles } from "../roles/Roles.entity";

@Index("users_primaryemail_uindex", ["primaryemail"], { unique: true })
@Index("users_pk", ["primaryemail"], { unique: true })
@Entity("users", { schema: "sandbox" })
export class Users {
  @Column("character varying", { primary: true, name: "primaryemail" })
  primaryemail: string;

  @Column("character varying", { name: "password" })
  password: string;

  @Column("character varying", { name: "fullname", nullable: true })
  fullname: string | null;

  @Column("text", { name: "info", nullable: true })
  info: string | null;

  @Column("character varying", { name: "phonenumber", nullable: true })
  phonenumber: string | null;

  @OneToMany(() => OfficeHasUsers, (officeHasUsers) => officeHasUsers.useremail)
  officeHasUsers: OfficeHasUsers[];

  @OneToMany(() => Offices, (offices) => offices.owner)
  offices: Offices[];

  @OneToMany(() => Personalspace, (personalspace) => personalspace.user)
  personalspaces: Personalspace[];

  @OneToMany(
    () => UserHasScenarios,
    (userHasScenarios) => userHasScenarios.user
  )
  userHasScenarios: UserHasScenarios[];

  @ManyToOne(() => Roles, (roles) => roles.users)
  @JoinColumn([{ name: "role", referencedColumnName: "id" }])
  role: Roles;
}
