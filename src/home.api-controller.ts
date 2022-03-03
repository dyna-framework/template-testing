import { BaseApiController, Post, Put } from '@dyna/http-api-router';
import { ApiController, Get, Method } from '@dyna/http-api-router';

@ApiController()
export class HomeApiController extends BaseApiController {

  @Put('/')
  @Post('/home')
  @Method('any')
  public index() {
    console.log('home.api-controller.ts -> index');
    return 'home.api-controller.ts -> index';
  }

}
