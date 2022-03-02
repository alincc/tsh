import { FieldError } from 'react-hook-form';

export const validate = (field: FieldError | undefined) => {
  if (field?.type === 'required') return 'Field is required';
  if (field?.type === 'minLength') return 'Value is too short';
  if (field?.type === 'maxLength') return 'Value is too long';
};
