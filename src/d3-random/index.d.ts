// Type definitions for D3JS d3-random module 1.0.0
// Project: https://github.com/d3/d3-random/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns a function for generating random numbers with a uniform distribution).
 * The minimum allowed value of a returned number is min, and the maximum is max.
 * If min is not specified, it defaults to 0; if max is not specified, it defaults to 1.
 */
export function randomUniform(min?: number, max?: number): () => number;

/**
 * Returns a function for generating random numbers with a normal (Gaussian) distribution.
 * The expected value of the generated numbers is mu, with the given standard deviation sigma.
 * If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
 */
export function randomNormal(mu?: number, sigma?: number): () => number;

/**
 * Returns a function for generating random numbers with a log-normal distribution. The expected value of the random variable’s natural logrithm is mu,
 * with the given standard deviation sigma. If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
 */
export function randomLogNormal(mu?: number, sigma?: number): () => number;

/**
 * Returns a function for generating random numbers with a Bates distribution with n independent variables.
 */
export function randomBates(n: number): () => number;

/**
 * Returns a function for generating random numbers with an Irwin–Hall distribution with n independent variables.
 */
export function randomIrwinHall(n: number): () => number;

/**
 * Returns a function for generating random numbers with an exponential distribution with the rate lambda;
 * equivalent to time between events in a Poisson process with a mean of 1 / lambda.
 */
export function randomExponential(lambda: number): () => number;
