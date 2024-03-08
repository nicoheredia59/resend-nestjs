import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({ description: 'Name to add in subject' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email Subject' })
  @IsString()
  subject: string;

  @ApiProperty({
    description: 'From email',
    required: false,
  })
  @IsString()
  from?: string;

  @ApiProperty({
    description: 'To Email',
    required: false,
  })
  @IsString()
  to?: string;

  @ApiProperty({
    required: false,
    nullable: true,
    description: 'Html email template',
  })
  @IsString()
  html?: string;

  @ApiProperty({
    required: false,
    nullable: true,
    description: 'React email template',
  })
  @IsString()
  react?: string;
}
