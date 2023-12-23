import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";

export interface Server {
  id: number,
  name: string,
  status: string
}

export function ServerResolver(route: ActivatedRouteSnapshot, _state): Promise<Server> {
  const serversService = inject(ServersService)
  const id = +route.params['id']
  const server = serversService.getServer(id)
  return new Promise((resolve) => {
    setTimeout(() => { resolve(server) }, 2000) 
  })
}