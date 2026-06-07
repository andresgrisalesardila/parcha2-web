import InviteLanding from "../InviteLanding";

export const metadata = {
  title: "Invitación a un parche | Parcha2",
  description: "Te invitaron a un parche en Parcha2.",
};

export default async function ParcheInviteByIdPage({ params, searchParams }) {
  const routeParams = await params;
  const query = await searchParams;

  return (
    <InviteLanding
      parcheId={routeParams?.id || ""}
      side={query?.side || ""}
    />
  );
}
