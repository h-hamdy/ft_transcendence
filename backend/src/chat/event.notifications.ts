import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { UsersService } from "src/users/users.service";
import { ChatGateway } from "./chat.gateway";

@Injectable()
export class NotificationsService {
    constructor(private eventEmitter: EventEmitter2, private usersService: UsersService) {}

    
    sendFriendRequestNotification(userId: number, friendId: number) {

        this.eventEmitter.emit('friendRequest', userId, friendId);
    }

    sendGameRequestNotification(userId: number, friendId: number) {


        this.eventEmitter.emit('gameRequest', userId, friendId);
    }

    sendGameStartNotification(userId: number) {

        this.eventEmitter.emit('gameState', userId, "ingame");

    }

    sendGameEndNotification(userId: number) {

        this.eventEmitter.emit('gameState', userId, "online");
    }


    //save user state
    async saveUserState(userId: number, state: string):Promise<boolean> {

        const isSaved  = await this.usersService.saveUserState(userId, state);
        if (!isSaved){
            return false;
        }
        return true;
    }

}

