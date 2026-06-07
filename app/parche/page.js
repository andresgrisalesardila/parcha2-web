import InviteLandingClient from "./InviteLandingClient";

export default async function ParcheInvitePage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const side = typeof resolvedSearchParams?.side === "string" ? resolvedSearchParams.side : "";

  return <InviteLandingClient side={side} />;
}
