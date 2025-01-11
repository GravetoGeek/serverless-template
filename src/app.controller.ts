import {Controller,Get,Param} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('say/:pathParams')
    getTest(@Param('pathParams') word: string): object {
        return {api: 'say',word};
    }

    @Get('getCustomer/:pathParams')
    getCustomer(@Param('pathParams') word: string): object {
        return {api: 'getCustomer',word};
    }

}
