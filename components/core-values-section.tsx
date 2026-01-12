import { cn } from "@/lib/utils";

export function CoreValuesSection() {
  const coreValues = [
    {
      number: 1,
      title: "Keep It Real",
      description:
        "Stay true to our words. Create an open and honest environment for sharing thoughts and ideas.",
      looksLike: [
        "Admitting mistakes quickly instead of hiding them",
        "Giving honest feedback, even when it's uncomfortable",
        "Telling clients the truth about timelines and capabilities",
        "Asking questions when you don't understand",
      ],
      doesntLookLike: [
        "Saying yes when you mean no",
        "Over-promising to impress clients",
        "Hiding problems until they become crises",
      ],
      accentColor: "bg-value-integrity",
    },
    {
      number: 2,
      title: "Focus on Meaningful Connections",
      description:
        "Carefully select projects that align with our strengths rather than spreading thin.",
      looksLike: [
        "Building genuine relationships with clients, not just transactions",
        "Taking time to understand client's real business goals",
        "Saying no to projects that aren't a good fit",
        "Going deep with fewer clients vs. shallow with many",
      ],
      doesntLookLike: [
        "Taking on every project that comes our way",
        "Treating clients as interchangeable revenue sources",
        "Sacrificing quality by overloading the team",
      ],
      accentColor: "bg-value-connection",
    },
    {
      number: 3,
      title: "Get Straight to the Point",
      description:
        "Keep things simple and sweet. Make complex concepts easily understandable.",
      looksLike: [
        "Clear, concise communication — no jargon",
        "Giving clients simple options, not overwhelming choices",
        'Explaining the "why" in plain language',
        "Meetings with clear agendas and outcomes",
      ],
      doesntLookLike: [
        "Long, rambling emails or messages",
        "Using technical terms to sound smart",
        "Overcomplicating solutions when simple works",
      ],
      accentColor: "bg-value-clarity",
    },
    {
      number: 4,
      title: "Make the Most Out of Now",
      description:
        "Believe in the power of the present moment. Constantly striving to be better than yesterday.",
      looksLike: [
        "Taking initiative without waiting to be told",
        "Learning from mistakes and improving processes",
        "Celebrating small wins along the way",
        "Being fully present in meetings and conversations",
      ],
      doesntLookLike: [
        "Waiting for perfect conditions to start",
        "Repeating the same mistakes without reflection",
        'Coasting on "good enough"',
      ],
      accentColor: "bg-value-connection",
    },
  ];

  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Our Core Values
        </h1>
        <p className="text-muted-foreground">
          What We Stand For at Carisle Media
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="space-y-6">
        {coreValues.map((value) => (
          <div
            key={value.number}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
          >
            {/* Card Header */}
            <div className={cn(value.accentColor, "px-4 py-3")}>
              <h2 className="text-primary-foreground font-bold text-lg uppercase tracking-wide my-0!">
                {value.number}. {value.title}
              </h2>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="text-foreground italic mb-6">{value.description}</p>

              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6">
                {/* This looks like */}
                <div>
                  <h3 className="text-accent font-semibold mb-3 text-sm uppercase tracking-wide">
                    This looks like:
                  </h3>
                  <ul className="space-y-2 list-none pl-0 my-0!">
                    {value.looksLike.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-border" />

                {/* This doesn't look like */}
                <div>
                  <h3 className="text-destructive font-semibold mb-3 text-sm uppercase tracking-wide">
                    This doesn&apos;t look like:
                  </h3>
                  <ul className="space-y-2 list-none pl-0 my-0!">
                    {value.doesntLookLike.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-destructive mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground italic">
          These values guide how we work, how we treat each other, and how we
          serve our clients.
        </p>
      </div>
    </div>
  );
}
