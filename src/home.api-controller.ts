import { Any, BaseHttpController, Input, NativeRequest, NativeResponse, Post, Put, Response } from '@dyna/http-router'
import { HttpController, Get, Method } from '@dyna/http-router'
import { IncomingMessage, ServerResponse } from 'http'

"/"
"/index"

"/get-users"

@HttpController()
export class HomeApiController extends BaseHttpController {
  @Get()
  index(@Input() req: IncomingMessage) {
    console.log('home.api-controller.ts -> index')
    const d = { test: { prueba: 'con una respuesta' } }
    return (d as any).test.prueba
  }

  @Get('/get-users')
  users() {
    return [{ id: 1, name: 'FreeIntelligence' }]
  }
}
