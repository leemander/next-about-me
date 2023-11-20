import { Bree_Serif } from "next/font/google";
const bree = Bree_Serif({ weight: ["400"], subsets: ["latin-ext"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={bree.className}>{children}</div>;
}
