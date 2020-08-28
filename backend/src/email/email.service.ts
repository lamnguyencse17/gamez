import { Injectable } from '@nestjs/common';
import { signUpEmailDto } from './dto/signUpEmail.dto';
import * as mail from '@sendgrid/mail';
import signUpEmail from './signUpVerification.email';

@Injectable()
export class EmailService {
  public sendSignUpVerification = async (
    emailDetails: signUpEmailDto,
  ): Promise<any> => {
    mail.setApiKey(process.env.SENDGRID_API_KEY);
    const emailContent = await signUpEmail(emailDetails);
    return new Promise((resolve, reject) => {
      mail
        .send(emailContent)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
}
