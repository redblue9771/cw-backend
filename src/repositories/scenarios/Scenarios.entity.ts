import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ScenarioHasDevices } from "../links/ScenarioHasDevices.entity";
import { UserHasScenarios } from "../links/UserHasScenarios.entity";

@Index("scenarios_pk", ["id"], { unique: true })
@Index("scenarios_id_uindex", ["id"], { unique: true })
@Entity("scenarios", { schema: "sandbox" })
export class Scenarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @OneToMany(
    () => ScenarioHasDevices,
    (scenarioHasDevices) => scenarioHasDevices.scenario
  )
  scenarioHasDevices: ScenarioHasDevices[];

  @OneToMany(
    () => UserHasScenarios,
    (userHasScenarios) => userHasScenarios.scenario
  )
  userHasScenarios: UserHasScenarios[];
}
