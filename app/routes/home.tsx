import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RevuMe" },
    { name: "description", content: "Smart FeedBack for your Dream Job!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
