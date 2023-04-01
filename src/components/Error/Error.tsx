import React from "react";
interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className="error">
    <p>{message}</p>
  </div>
);

export default Error;
