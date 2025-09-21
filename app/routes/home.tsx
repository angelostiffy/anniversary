import { EnterName } from "~/components/EnterName/EnterName";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

export default function Home() {
  return <EnterName />;
}
