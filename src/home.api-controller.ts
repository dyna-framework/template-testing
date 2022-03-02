import { BaseApiController } from '@dyna/http-api-router';
import { ApiController, Get } from '@dyna/http-api-router';

@ApiController()
export class HomeApiController extends BaseApiController {

  @Get('/')
  @Get('/home')
  public index() {
    console.log('home.api-controller.ts -> index');
    return 'home.api-controller.ts -> index';
  }

}
