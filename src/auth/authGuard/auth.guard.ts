import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.authService.checkToken((authorization ?? "").split(" ")[1]);
      const user = await this.userService.findUserById(parseInt(data.sub));
      request.user = user;
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;

  }

}