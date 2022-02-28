import { BaseInitializer } from "@dyna/core";

export class EmailInitializer extends BaseInitializer {

  async register() {
    console.log('EmailInitializer se ejecuta el pre');
  }

  async boot() {
    console.log('EmailInitializer se ejecuta el post');
  }

}
