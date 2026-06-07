import InviteLanding from "./InviteLanding";

export const metadata = {
  title: "Invitación a un parche | Parcha2",
  description: "Te invitaron a un parche en Parcha2.",
};

export default async function ParcheInvitePage({ searchParams }) {
  const query = await searchParams;
  return <InviteLanding side={query?.side || ""} />;
}
