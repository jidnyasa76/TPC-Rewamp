import { ResponsiveContainer } from "recharts";

export const ChartContainer = ({ children, config, className }) => {
  return (
    <div
      className={`chart-container ${className}`}
      style={{
        "--color-students": config?.students?.theme?.dark || "#8884d8",
        "--color-package": config?.package?.theme?.dark || "#82ca9d",
        "--color-companies": config?.companies?.theme?.dark || "#ffc658",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};
