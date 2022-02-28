import { BaseInitializer } from "@dyna/core";

export class TestInitializer extends BaseInitializer {

  async register() {
    console.log('TestInitializer se ejecuta el pre');
  }

  async boot() {
    console.log('TestInitializer se ejecuta el post');
  }

}
