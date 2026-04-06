import { ReactElement } from "react";

export default function Body({ children }: { children: ReactElement }) {
  return (
    <main className="flex flex-col m-3 items-center">
      {children}
    </main>
  )
};
