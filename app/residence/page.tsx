import { redirect } from "next/navigation";

// Legacy route kept so existing links and printed QR codes keep working.
export default function LegacyRedirect() {
  redirect("/guidelines/residential");
}
