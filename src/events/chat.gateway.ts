import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3001, {
    // transports: 'websocket'
    cors: '*'
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_message')
  handleEvent(@MessageBody() data: string) {
    console.log('🔥 data', data);

    this.server.emit('receive_message', data);
  }
}
