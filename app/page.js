"use client";
import styles from "./page.module.scss";
import Main from "../src/components/Main/Main";

import { mockEvents } from "../src/dataSources/data";
import { fetchEvents } from "./api/eventAPI";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events/getAll"],
    queryFn: () => fetchEvents(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(events);

  return <Main className={styles.main} events={events} />;
}
