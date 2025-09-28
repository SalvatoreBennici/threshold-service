import { Threshold } from "../Threshold";
import { ThresholdId } from "../value/ThresholdId";
import { ResourceType } from "../value/ResourceType";
import { PeriodType } from "../value/PeriodType";
import { ThresholdType } from "../value/ThresholdType";

export interface ThresholdQuery {
  readonly resourceType?: ResourceType;
  readonly periodType?: PeriodType;
  readonly thresholdType?: ThresholdType;
}

export interface ThresholdRepositoryPort {
  findById(id: ThresholdId): Promise<Threshold | undefined>;

  findByBusinessKey(businessKey: string): Promise<Threshold | undefined>;

  findBy(query: ThresholdQuery): Promise<Threshold[]>;

  findAll(): Promise<Threshold[]>;

  save(threshold: Threshold): Promise<void>;

  deleteById(id: ThresholdId): Promise<boolean>;

  deleteByBusinessKey(businessKey: string): Promise<boolean>;

  existsById(id: ThresholdId): Promise<boolean>;

  existsByBusinessKey(businessKey: string): Promise<boolean>;
}
