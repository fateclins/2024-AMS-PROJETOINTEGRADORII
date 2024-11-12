import { TicketBody } from "../shop/tickets/create";

export class TicketMapper {
  public static toResponse(data: Partial<TicketBody>) {
    return {
      id: !data.id ? undefined : data.id,
      ticketStatus: !data.ticketStatus ? undefined : data.ticketStatus,
      createdAt: !data.createdAt ? undefined : data.createdAt,
      descricao: !data.description ? undefined : data.description,
      titulo: !data.title ? undefined : data.title,
      idUsuario: !data.idUser ? undefined : data.idUser,
      updatedAt: !data.updatedAt ? undefined : data.updatedAt,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      createdAt: !data.createdAt ? undefined : data.createdAt,
      ticketStatus: !data.ticketStatus ? undefined : data.ticketStatus,
      description: !data.descricao ? undefined : data.descricao,
      title: !data.titulo ? undefined : data.titulo,
      idUser: !data.idUsuario ? undefined : data.idUsuario,
      updatedAt: !data.updatedAt ? undefined : data.updatedAt,
    };
  }
}
