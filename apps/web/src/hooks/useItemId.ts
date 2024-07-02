// Define a more flexible Item type that can cover various scenarios
type Item = { id?: string | number | null } | string | number | undefined | null;

// Refactor the getItemId function to use a more straightforward generic approach
export function getItemId<T extends Item>(item: T): Exclude<T extends { id: infer U } ? U : T, {id?: any}> {
    if (typeof item === "object" && item !== null && "id" in item) {
        // Explicitly cast the return type based on the conditional type
        return item.id as Exclude<T extends { id: infer U } ? U : T, {id?: any}>;
    }
    // Handle cases where item is not an object or doesn't have an 'id' property
    return item as Exclude<T extends { id: infer U } ? U : T, {id?: any}>;
}

// Simplify the useItemId function to directly utilize getItemId without additional logic
export default function useItemId<T extends Item>(item: T): T extends { id: infer U } ? U : T {
    return getItemId(item);
}

// import directus from "@/lib/directus/index";
// import { readItem } from "@directus/sdk";

// // Example usage remains the same, demonstrating the function's versatility with different input types

// type test = string | number | undefined | null | { id: string | number | null } | { id: string | number | null; test: string } | null | undefined;
// type other = Exclude<test, {id: any}>
 
// const test = async () => {
//     const icon = (await directus.request(readItem("skills", 1))).icon;
//     // Examples
//     const testString = getItemId("string"); // 'string'
//     const testNumber = getItemId(123); // number
//     const testUndefined = getItemId(undefined); // undefined
//     const testNull = getItemId(null); // undefined
//     const testObjectString = getItemId({ id: "123" as const }); // 'string'
//     const testObjectNumber = getItemId({ id: 123 as const }); // number
//     const testObjectUndefined = getItemId({ id: undefined }); // undefined
//     const testObjectNull = getItemId({ id: null }); // null
//     const testObjectNullWithExtra = getItemId({ id: null, test: "ui" } as { id: null; test: string } | null | string | undefined); // null
//     const testObjectNullWithSchema = getItemId(icon); // null
// };
