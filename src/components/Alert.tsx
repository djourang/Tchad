// components/Alert.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface AlertProps {
  type?: "info" | "warning" | "error" | "success";
  children: ReactNode;
}

const alertColors = {
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  error: "bg-red-100 text-red-800 border-red-300",
  success: "bg-green-100 text-green-800 border-green-300",
};

const Alert = ({ type = "info", children }: AlertProps) => {
  return (
    <div className={`border-l-4 p-4 mb-6 ${alertColors[type]}`}>{children}</div>
  );
};

export default Alert;
