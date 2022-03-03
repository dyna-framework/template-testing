import { BaseHttpController } from '@dyna/http-router'
import { HttpController, Get } from '@dyna/http-router'

@HttpController()
export class ProfileApiController extends BaseHttpController {
  @Get()
  index() {
    console.log('profile.api-controller.ts -> index')
    return 'profile.api-controller.ts -> <strong>index</strong>'
  }
}
