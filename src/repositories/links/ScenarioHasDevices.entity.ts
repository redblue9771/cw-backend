import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "../devices/Devices.entity";
import { Scenarios } from "../scenarios/Scenarios.entity";

@Index("scenario_has_devices_pk", ["id"], { unique: true })
@Index("scenario_has_devices_id_uindex", ["id"], { unique: true })
@Entity("scenario_has_devices", { schema: "sandbox" })
export class ScenarioHasDevices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(() => Devices, (devices) => devices.scenarioHasDevices)
  @JoinColumn([{ name: "device", referencedColumnName: "id" }])
  device: Devices;

  @ManyToOne(() => Scenarios, (scenarios) => scenarios.scenarioHasDevices)
  @JoinColumn([{ name: "scenario", referencedColumnName: "id" }])
  scenario: Scenarios;
}
