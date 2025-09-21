import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa";
import { EnterName } from "~/components/EnterName/EnterName";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <>
    <EnterName/>
    </>
  );
}
