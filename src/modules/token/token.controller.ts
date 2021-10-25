import { Body, Controller, Put } from "@nestjs/common";
import { refreshTokenDto } from "./dto/refresh.dto";
import { TokenService } from "./token.service";

@Controller('token')
export class TokenController {
    constructor(
        private readonly tokenService: TokenService
    ) {}

    @Put('refresh')
    async refreshToken(@Body() data: refreshTokenDto) {
        return this.tokenService.refreshToken(data.token);
    }
}