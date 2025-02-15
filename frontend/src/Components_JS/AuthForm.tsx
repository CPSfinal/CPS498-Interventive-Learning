import React, { ReactNode, FormEventHandler, ReactElement } from 'react';

interface AuthFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
  outputMessage: string;
}

const AuthFormContext = React.createContext({});

const AuthForm = ({ children, onSubmit, loading, outputMessage }: AuthFormProps) => {
  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="login-form">
        <p className="error-label">{outputMessage}</p>
        {children}
      </form>
    </div>
  );
};

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled: boolean;
}

AuthForm.InputField = ({ id, type, value, onChange, placeholder, disabled }: InputFieldProps): ReactElement => (
  <div className="form-field-container">
    <label htmlFor={id}>{placeholder}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="login-input"
      disabled={disabled}
    />
  </div>
);

interface SubmitButtonProps {
  disabled: boolean;
  children: ReactNode;
}

AuthForm.SubmitButton = ({ disabled, children }: SubmitButtonProps): ReactElement => (
  <button type="submit" className="login-button" disabled={disabled}>
    {children}
  </button>
);

AuthForm.ErrorMessage = ({ message }: { message: string }): ReactElement => <p className="error-label">{message}</p>;

export default AuthForm;
