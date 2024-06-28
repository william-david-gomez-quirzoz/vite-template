import { Roles } from "core/enum/roles";

export const modules = {
    agend: {
        tags: [Roles.ADMIN],
        routes: {
            list: [],
            create: [],
            edit: [],
        }
    }
}