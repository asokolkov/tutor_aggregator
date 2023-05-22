export function useFormikValues() {
  const loginInitValues: LoginFormikProps = {
    email: '',
    password: '',
    remember: true,
  };

  const signupInitValues: SignupFormikProps = {
    name: '',
    surname: '',
    phoneNumber: '',
    isTutor: false,
    email: '',
    password: '',
  };

  return { loginInitValues, signupInitValues };
}

export type LoginFormikProps = {
  email: string;
  password: string;
  remember: boolean;
};

export type SignupFormikProps = {
  name: string;
  surname: string;
  phoneNumber: string;
  isTutor: boolean;
  email: string;
  password: string;
};
