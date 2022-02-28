import { BaseApiController } from '@dyna/http-api-router';
import { ApiController, Get } from '@dyna/http-api-router';

@ApiController()
export class HomeApiController extends BaseApiController {

  @Get('/')
  public index() {
    console.log('home.api-controller.ts -> index');
  }

}
