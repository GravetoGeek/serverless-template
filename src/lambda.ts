import {NestFactory} from '@nestjs/core';
import {configure as serverlessExpress} from '@vendia/serverless-express';
import {Callback,Context,Handler} from 'aws-lambda';
import {AppModule} from './app.module';

let cachedServer;
export const handler: Handler=async (event: AWSLambda.APIGatewayEvent,context: Context,callback: Callback) => {
    if(!cachedServer) {
        const nestApp=await NestFactory.create(AppModule);
        await nestApp.init();
        cachedServer=serverlessExpress({
            app: nestApp.getHttpAdapter().getInstance(),
        });
    }
    // console.log({event,context});
    return cachedServer(event,context,callback);
};