import InviteLandingClient from "../InviteLandingClient";

export default async function ParcheInviteByIdPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const parcheId = typeof resolvedParams?.id === "string" ? resolvedParams.id : "";
  const side = typeof resolvedSearchParams?.side === "string" ? resolvedSearchParams.side : "";

  return <InviteLandingClient parcheId={parcheId} side={side} />;
}
