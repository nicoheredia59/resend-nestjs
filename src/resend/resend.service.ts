import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

import { SendEmailDto } from './dto/send-email.dto';

const resend = new Resend(process.env.RESEND_API_KEY);

@Injectable()
export class ResendService {
  async create(sendEmailDto: SendEmailDto): Promise<any> {
    return await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: sendEmailDto.to, // By default, Resend only allows you to send emails to your email account.
      subject: `${sendEmailDto.name} - ${sendEmailDto.subject}`,
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      // react: <EmailTemplate /> <- Add your Mail Template.
    });
  }
}
