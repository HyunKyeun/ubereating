import React from "react";

interface IFormProps {
  errorMessage: string;
}

export const FormError: React.FC<IFormProps> = ({ errorMessage }) => (
  <span className="font-medium text-red-500">{errorMessage}</span>
);
