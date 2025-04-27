export interface Links {
  id?: number;
  icon: React.ReactElement;
  text: string;
  path: string;
  variant?: "white" | "dark";
  active?: string;
  handleClick?: () => void;
}
