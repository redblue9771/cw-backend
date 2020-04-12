import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../users/Users.entity";

@Index("roles_id_uindex", ["id"], { unique: true })
@Index("roles_pk", ["id"], { unique: true })
@Entity("roles", { schema: "sandbox" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => Users, (users) => users.role)
  users: Users[];
}
