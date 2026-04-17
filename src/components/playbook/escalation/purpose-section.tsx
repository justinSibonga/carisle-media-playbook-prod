import { GUIDING_PRINCIPLES, RESOLUTION_OWNERS } from "@/data/escalation";

export function PurposeSection() {
  return (
    <section>
      <h2 id="purpose">Purpose</h2>
      <p>
        This document defines when and how to escalate issues to ensure timely resolution without
        bottlenecking the Founder.
      </p>

      <h3 id="guiding-principles">Guiding Principles</h3>
      <ul>
        {GUIDING_PRINCIPLES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="who-can-resolve-what">Who Can Resolve What</h3>
      <ul>
        {RESOLUTION_OWNERS.map((owner) => (
          <li key={owner.title}>
            <strong>{owner.title}</strong> - {owner.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
