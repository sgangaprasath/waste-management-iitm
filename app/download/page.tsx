import { redirect } from "next/navigation";

// Legacy route kept so existing links keep working.
export default function LegacyRedirect() {
  redirect("/downloads");
}
