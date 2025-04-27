export interface SocialLogin {
  alt: string;
  icon: string;
}

export interface SignupFields {
  fullName: string;
  email: string;
  password: string;
  remember: boolean;
}

export interface SigninFields {
  email: string;
  password: string;
  remember: boolean;
}
