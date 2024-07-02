import { DirectusClient } from "@directus/sdk";

export function getFileUrl<Schema>(directus: DirectusClient<Schema>, id?: string | number | null) {
    if (!id) return;
    return directus.url.origin + "/assets/" + id;
}

export default function useFileUrl<Schema, DirectusInstance extends DirectusClient<Schema>>(directus: DirectusInstance) {
    return (id?: string | number | null) => getFileUrl(directus, id);
}
