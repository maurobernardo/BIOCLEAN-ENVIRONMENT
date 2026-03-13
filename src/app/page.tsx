import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to Portuguese homepage
  redirect("/pt");
}
