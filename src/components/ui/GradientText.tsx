import { clsx } from "clsx";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "peach-purple" | "blue-pink" | "purple-blue";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function GradientText({
  children,
  variant = "peach-purple",
  className,
  as: Tag = "span",
}: GradientTextProps) {
  const variantClass = {
    "peach-purple": "text-gradient-peach-purple",
    "blue-pink": "text-gradient-blue-pink",
    "purple-blue": "text-gradient-purple-blue",
  }[variant];

  return (
    <Tag className={clsx(variantClass, className)}>
      {children}
    </Tag>
  );
}
