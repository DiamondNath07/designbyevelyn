import { redirect } from "next/navigation";

/** The work index lives on the home page. */
export default function WorkPage() {
  redirect("/#work");
}
