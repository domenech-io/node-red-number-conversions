/**
 * Normalizes a given value to a range between 0 and 1 based on the provided minimum and maximum values.
 *
 * @param {number} value - The value to normalize.
 * @param {number} valueMin - The minimum value of the range.
 * @param {number} valueMax - The maximum value of the range.
 * @returns {number} The normalized value, clamped between 0 and 1.
 *
 * @example
 *
 * normalize(5, 0, 10)
 * // => Outputs: 0.5
 */
export default function normalize(value, valueMin, valueMax) {
	return Math.min(Math.max((value - valueMin) / (valueMax - valueMin), 0), 1);
}
