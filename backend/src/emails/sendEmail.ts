import { signUpEmailDto } from './dto/signUpEmail.dto';
import * as mail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '../constants';
import signUpEmail from './signUpVerification.email';

export const sendSignUpVerification = (
  emailDetails: signUpEmailDto,
): Promise<any> => {
  mail.setApiKey(SENDGRID_API_KEY);
  const emailContent = signUpEmail(emailDetails);
  return new Promise((resolve, reject) => {
    mail
      .send(emailContent)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
