/* eslint-env browser */
/**
 * Performs a Fetch request.
 *
 * @example
 * ```ts
 * // Example of usage
 * const { data, meta } = await fetcher<MyDataType>('query');
 * ```
 * @param query - The endpoint query.
 * @returns A promise that resolves with the resulting data from the query.
 */
import { config } from "@/config";
export const fetcher = async <T>(query: string): Promise<T> => {
    const response = await fetch(`${config.STRAPI_API}/${query}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${config.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
        },
    }).catch((err: Error) => {
        throw new Error(err.message);
    });

    const data = await response.json();
    return data;
};