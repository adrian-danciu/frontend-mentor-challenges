export interface CardProps {
  index: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}
