import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseWsExceptionFilter, WsException } from "@nestjs/websockets";



@Catch()
export class CustomWsExceptionsFilter extends BaseWsExceptionFilter{
    catch(exception: unknown, host: ArgumentsHost) {

        const client = host.switchToWs().getClient();

        client.emit('error', exception.toString());
    }
}