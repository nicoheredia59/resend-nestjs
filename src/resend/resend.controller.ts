import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { SendEmailDto } from './dto/send-email.dto';
import { ResendService } from './resend.service';

@ApiTags('resend')
@Controller('resend')
export class ResendController {
  constructor(private readonly resendService: ResendService) {}

  @ApiResponse({ status: 200, description: 'Email Sent' })
  @ApiBody({ type: SendEmailDto })
  @Post()
  async create(
    @Res() response: Response,
    @Body() createResendDto: SendEmailDto,
  ) {
    try {
      const req = await this.resendService.create(createResendDto);

      return response.status(200).json({
        message: req,
      });
    } catch (error) {
      console.log(error);

      return response.status(500).json({
        message: 'Error sending email',
      });
    }
  }
}
