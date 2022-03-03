import { Any, BaseHttpController, NativeRequest, NativeResponse, Post, Put, Response } from '@dyna/http-router'
import { HttpController, Get, Method } from '@dyna/http-router'
import { IncomingMessage, ServerResponse } from 'http'

@HttpController()
export class HomeApiController extends BaseHttpController {
  @Get()
  index(@NativeRequest() req: IncomingMessage) {
    console.log('home.api-controller.ts -> index')
    const d = { test: { prueba: 'con una respuesta' } }
    return (d as any).test.prueba
  }

  @Get()
  users() {
    return [{ id: 1, name: 'FreeIntelligence' }]
  }
}
