import { TicketBody } from "../shop/tickets/create";

export class TicketMapper {
    public static toHTTP(data: Partial<TicketBody>) {
        return {
            id: !data.id ? undefined : data.id,
            createdAt: !data.createdAt ? undefined : data.createdAt,
            description: !data.description ? undefined : data.description,
            title: !data.title ? undefined : data.title,
            idUser: !data.idUser ? undefined : data.idUser,
            updatedAt: !data.updatedAt ? undefined : data.updatedAt,
        }
    }
}