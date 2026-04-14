import { PropsWithChildren } from "react";

export default function Body({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col m-3 items-center">
      {children}
    </main>
  )
};
