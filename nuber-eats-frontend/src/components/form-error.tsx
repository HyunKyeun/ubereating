import React from "react";

interface IFormProps {
  errorMessage: string;
  roles: string;
}

export const FormError: React.FC<IFormProps> = ({ errorMessage, roles }) => (
  <span role={roles} className="font-medium text-red-500">
    {errorMessage}
  </span>
);
