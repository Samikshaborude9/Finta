import { useEffect, useState } from "react";

function BackToBuildingTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Convert to IST (UTC + 5:30)
      const istTime = new Date(
        now.getTime() + (330 * 60 * 1000)
      );

      // Add 10 minutes
      istTime.setMinutes(istTime.getMinutes() + 10);

      // Format time (hh:mmam/pm)
      const formatted = istTime.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatted.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-white/70">
      Back to building by {time}.
    </span>
  );
}
export default BackToBuildingTime;