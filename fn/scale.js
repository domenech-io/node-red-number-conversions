/**
 * Scales a normalized value [0,1] to a value between min and max
 *
 * @param {number} normalValue - The value to scale between [0,1].
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The scaled value, clamped between min and max.
 *
 * @example
 *
 * scale(1, 0, 100)
 * // => Outputs: 100
 */
export default function scale(normalValue, min, max) {
	return Math.min(Math.max(normalValue, 0), 1) * (max - min) + min;
}
