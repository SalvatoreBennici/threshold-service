import { InvalidThresholdValueError } from "../errors";

/**
 * ThresholdValue - Simple value object for threshold values
 * Enforces business rules: positive numbers only
 */
export class ThresholdValue {
  private constructor(private readonly _value: number) {}

  static of(value: number): ThresholdValue {
    if (value <= 0) {
      throw new InvalidThresholdValueError(
        value,
        "Threshold value must be greater than 0",
      );
    }
    return new ThresholdValue(value);
  }

  get value(): number {
    return this._value;
  }

  equals(other: ThresholdValue): boolean {
    return this._value === other._value;
  }

  // Comparison methods - keep simple
  isGreaterThan(other: ThresholdValue): boolean {
    return this._value > other._value;
  }

  isLessThan(other: ThresholdValue): boolean {
    return this._value < other._value;
  }

  isGreaterThanOrEqual(other: ThresholdValue): boolean {
    return this._value >= other._value;
  }

  isLessThanOrEqual(other: ThresholdValue): boolean {
    return this._value <= other._value;
  }

  // Serialization methods
  toString(): string {
    return this._value.toString();
  }

  toJSON(): number {
    return this._value;
  }

  valueOf(): number {
    return this._value;
  }
}
