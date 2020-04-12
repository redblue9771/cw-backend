import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Offices } from "../offices/Offices.entity";
import { ScenarioHasDevices } from "../links/ScenarioHasDevices.entity";

@Index("devices_pk", ["id"], { unique: true })
@Index("devices_id_uindex", ["id"], { unique: true })
@Entity("devices", { schema: "sandbox" })
export class Devices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @ManyToOne(() => Offices, (offices) => offices.devices)
  @JoinColumn([{ name: "office", referencedColumnName: "id" }])
  office: Offices;

  @OneToMany(
    () => ScenarioHasDevices,
    (scenarioHasDevices) => scenarioHasDevices.device
  )
  scenarioHasDevices: ScenarioHasDevices[];
}
