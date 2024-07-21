

export enum EnumForm {
  CardHolderName = "card-holder-name",
  CardNumber = "card-number",
  ExpDateMonth = "exp-date-month",
  ExpDateYear = "exp-date-year",
  CardCvc = "card-cvc",
}

export type FieldState = {
  error: string | null;
  value: string;
};

export type InterfaceForm = Record<EnumForm, FieldState>;