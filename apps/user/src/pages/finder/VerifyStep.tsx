import { Text, Title } from "@kiebitz-oss/ui";
import { Trans } from "@lingui/macro";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BackLink } from "../../components/BackLink";
import { Link } from "../../components/Link";
import { AppointmentCard } from "../AppointmentCard";
import { useFinderState } from "./FinderStateProvider";

export const VerifyStep: React.FC = () => {
  const { state } = useFinderState();
  const router = useRouter();

  useEffect(() => {
    if (!state.appointment) {
      router.push("/finder");
    }
  }, [state.appointment, router]);

  return (
    <main id="finder-verify">
      <BackLink href="/finder/appointment">
        <Trans id="user.finder.verify.back-link">
          zurück zum Terminauswahl
        </Trans>
      </BackLink>

      <Title variant="h1" as="h2" className="ml-4 sm:ml-0">
        <Trans id="user.finder.verify.title">Übersicht</Trans>
      </Title>

      <Text variant="text2" className="mb-10 ml-4 sm:ml-0">
        <Trans id="user.finder.verify.intro">
          Hier ist Ihr gewählter Termin. Prüfen Sie bitte genau, ob alles
          stimmt.
          <br /> Anschließend können Sie den Termin endgültig buchen.
        </Trans>
      </Text>

      <div className="flex flex-col mb-10 w-full sm:flex-row sm:gap-12 sm:w-fit sm:max-w-[720px]">
        <div className="flex-1">
          <Title variant="book" as="h3">
            <Trans id="user.finder.verify.appointment.subtitle">
              Ihr Termin
            </Trans>
          </Title>

          {state.appointment ? (
            <AppointmentCard appointment={state.appointment} border />
          ) : (
            <div>ERROR</div>
          )}
        </div>

        {state.appointment?.provider?.description && (
          <Text className="flex-1 mt-12 italic">
            <Trans id="user.finder.verify.appointment.description">
              {state.appointment.provider.description}
            </Trans>
          </Text>
        )}
      </div>

      <Link
        type="button"
        variant="primary"
        href="/finder/success"
        className="ml-4 sm:mt-0"
      >
        <Trans id="user.finder.verify.submit">Termin jetzt buchen</Trans>
      </Link>
    </main>
  );
};
