import {Injectable,Param} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
    getTest(@Param('pathParams') word: string): object {
        return {api: 'say',word};
    }
    getCustomer(@Param('pathParams') word: string): object {
        return {api: 'getCustomer',word};
    }
}
