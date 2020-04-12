import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Scenarios } from "../scenarios/Scenarios.entity";
import { Users } from "../users/Users.entity";

@Index("user_has_scenarios_pk", ["id"], { unique: true })
@Index("user_has_scenarios_id_uindex", ["id"], { unique: true })
@Entity("user_has_scenarios", { schema: "sandbox" })
export class UserHasScenarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(() => Scenarios, (scenarios) => scenarios.userHasScenarios)
  @JoinColumn([{ name: "scenario", referencedColumnName: "id" }])
  scenario: Scenarios;

  @ManyToOne(() => Users, (users) => users.userHasScenarios)
  @JoinColumn([{ name: "user", referencedColumnName: "primaryemail" }])
  user: Users;
}
