import { signUpEmailDto } from './dto/signUpEmail.dto';
import * as ejs from 'ejs';
import * as path from 'path';

const signUpEmail = async (emailDetails: signUpEmailDto): Promise<any> => {
  const { name, hash, email } = emailDetails;
  const templatePath = path.join(
    process.cwd(),
    'src/email/templates/signUpTemplates.ejs',
  );
  const emailContent = await ejs.renderFile(templatePath, {
    name,
    hash,
  });
  return {
    to: email,
    from: 'nguyenquanglam3008@gmail.com',
    subject: 'Your GameZ Verification Email',
    html: emailContent,
  };
};
export default signUpEmail;
