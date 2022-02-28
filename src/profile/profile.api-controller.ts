import { BaseApiController } from '@dyna/http-api-router';
import { ApiController, Get } from '@dyna/http-api-router';

@ApiController()
export class ProfileApiController extends BaseApiController {

  @Get()
  public index() {
    console.log('profile.api-controller.ts -> index');
  }

}
