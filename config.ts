import { toastr } from "./utils";
import * as Yup from 'yup';

const POINT = 'api.msg-develop.meetgenie.co';
const SCHEME = 'https';

export const API_URL = `${SCHEME}://${POINT}`;
export const wsOptions = {
  hostname: POINT,
  port: 443,
  secure: true,
  authTokenName: 'user',
  autoReconnect: true,
  autoReconnectOptions: {
    maxDelay: 15000,
  },
};

export const colors = {
  red: '#D4272B',
  disabledRed: 'rgba(212, 39, 43, 0.5)',
  black: '#111111',
  blue: '#367FFF',
  white: 'white',
  green: '#368232',
};

export const ndaURL = 'https://meetgenie.co/nda';
export const termsClientsURL = 'https://meetgenie.co/thelittleprint4theclients';
export const termsTalentsURL = 'https://meetgenie.co/thelittleprint4theamazingtalent';

export const emailRE = /\S+@\S+\.\S+/;

//disable typing animation in dev mode
export const showTypingAnimation = !__DEV__;

//password validation rules
export const checkLength = (text: string): boolean => text?.length >= 8;
export const checkCapital = (text: string): boolean => /[A-Z]+/.test(text);
export const checkLower = (text: string): boolean => /[a-z]+/.test(text);
export const checkNumber = (text: string): boolean => /[0-9]+/.test(text);
export const checkSpecial = (text: string): boolean => /[\!\@\#\$\%\^\&\*]+/.test(text);
export const checkConfirm = (password: string, confirm: string): boolean => {
  if (password === confirm) return true;
  toastr.showToast("Probably a typo but those two new passwords don't quite match.", 'warning');
  return false;
}
export const showPassNotValidToast = () => toastr.showToast('☝️🏽 oh, that password won’t work, (Fort Knox remember....)', 'warning');

export const networkErrorMessage = 'Oh no, dodgy network going on, reconnecting';

export const MAX_MESSAGE_LENGTH = 1000;

export const yupString = (
  required: boolean = false,
  min: number | null = null,
  max: number | null = null
): Yup.StringSchema<any, object> => {
  let field: Yup.StringSchema<any, object> = Yup.string();
  if (required) {
    field = field.required("Please, fill in required field");
  }
  if (min) {
    field = field.min(min, `Please, add at least ${min} symbols`);
  }
  if (max) {
    field = field.max(max, `Please, make it shorter than ${max} symbols`);
  }
  return field;
};

export const yupUrl = (): Yup.StringSchema<any, object> => {
  return yupString().matches(
    /^((https?):\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)?$/,
    "Please, enter URL in correct format"
  );
};

export const introsArr = [
    'ProfileIntro',
];

export const responseMessages = {
  success: 'That’s all updated for you now 👌🏾',
  failure: 'It’s not you, it’s me..... can you try that again pls?'
};

export const designOptions = [
  { value: "LEVEL_EXECUTIVE", label: "Design expert" },
  { value: "LEVEL_SENIOR", label: "Can design" },
  { value: "LEVEL_NONE", label: "Not a designer" },
];

export const executiveExperienceOptions = [
  { value: "LEVEL_NONE", label: "Not yet" },
  { value: "LEVEL_EXECUTIVE", label: "Exec" },
  { value: "LEVEL_SENIOR", label: "Hands on" },
];

export const companyTypeOptions = [
  { value: 'TYPE_LTD', label: 'Ltd Company'},
  { value: 'TYPE_SOLE_TRADER', label: 'Sole Trader'},
  { value: 'TYPE_UMBRELLA', label: 'Umbrella Comp'},
];

export const equipmentOptions = [
  { value: 'TYPE_FLEXIBLE', label: 'Mix of both'},
  { value: 'TYPE_COMPANY', label: "Always use the companys'"},
  { value: 'TYPE_PERSONAL', label: 'My own'},
];
