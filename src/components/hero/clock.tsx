"use client";

import { format, toZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";
import { useIsMounted } from "usehooks-ts";

export default function TimezoneClock({ timezone = "Asia/Tbilisi" }) {
  const [time, setTime] = useState(() => new Date());
  const isMounted = useIsMounted();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const zonedTime = toZonedTime(time, timezone);
  const formattedTime = format(zonedTime, "hh:mm aa", {
    timeZone: timezone,
  });
  const isoTime = zonedTime.toISOString();

  if (!isMounted()) {
    return (
      <div className="text-4xl font-semibold">
        <div>Ticking</div>
      </div>
    );
  }

  return (
    <div className="text-4xl font-semibold">
      <time dateTime={isoTime}>{formattedTime}</time>
    </div>
  );
}
