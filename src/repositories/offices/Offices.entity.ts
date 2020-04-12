import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "../devices/Devices.entity";
import { OfficeHasUsers } from "../links/OfficeHasUsers.entity";
import { Users } from "../users/Users.entity";

@Index("office_pk", ["id"], { unique: true })
@Index("office_id_uindex", ["id"], { unique: true })
@Index("office_name_uindex", ["name"], { unique: true })
@Entity("offices", { schema: "sandbox" })
export class Offices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @OneToMany(() => Devices, (devices) => devices.office)
  devices: Devices[];

  @OneToMany(() => OfficeHasUsers, (officeHasUsers) => officeHasUsers.office)
  officeHasUsers: OfficeHasUsers[];

  @ManyToOne(() => Users, (users) => users.offices)
  @JoinColumn([{ name: "owner", referencedColumnName: "primaryemail" }])
  owner: Users;
}
