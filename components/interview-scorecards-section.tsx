// ✅ Server Component by default

export function InterviewScorecardsSection() {
  const scorecards = [
    {
      number: 1,
      title: "Operations Coordinator Scorecard",
      criteria: [
        {
          name: "Client Communication",
          description: "Clear, professional, responsive",
        },
        {
          name: "Project Management",
          description: "Organized, tracks tasks, meets deadlines",
        },
        {
          name: "Problem Solving",
          description: "Thinks ahead, finds solutions",
        },
        {
          name: "GHL / Tech Aptitude",
          description: "Experience with CRMs, quick learner",
        },
        {
          name: "Attention to Detail",
          description: "Catches errors, thorough work",
        },
        {
          name: "Culture Fit (Core Values)",
          description: "Honest, direct, growth-minded",
        },
      ],
    },
    {
      number: 2,
      title: "Marketing Specialist Scorecard",
      criteria: [
        {
          name: "Copywriting Skills",
          description: "Compelling, clear, on-brand writing",
        },
        {
          name: "Funnel / Email Marketing",
          description: "Experience with sequences, automation",
        },
        {
          name: "GHL / Marketing Tools",
          description: "GHL, email tools, landing page builders",
        },
        {
          name: "Creativity & Design Sense",
          description: "Visual eye, Canva skills, brand sense",
        },
        {
          name: "Task Management",
          description: "Organized, meets deadlines, proactive",
        },
        {
          name: "Culture Fit (Core Values)",
          description: "Honest, direct, growth-minded",
        },
      ],
    },
    {
      number: 3,
      title: "Web Developer Scorecard",
      criteria: [
        {
          name: "GHL Website Builder",
          description: "Experience building in GHL",
        },
        {
          name: "HTML/CSS Skills",
          description: "Custom code, responsive design",
        },
        {
          name: "Workflow / Automation",
          description: "GHL workflows, triggers, logic",
        },
        {
          name: "Design Eye",
          description: "Clean layouts, UX sense, modern style",
        },
        {
          name: "Problem Solving / Debugging",
          description: "Troubleshoots issues independently",
        },
        {
          name: "Culture Fit (Core Values)",
          description: "Honest, direct, growth-minded",
        },
      ],
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
          Interview Scorecards
        </h1>
        <p className="text-muted-foreground">
          Role-Specific Evaluation Criteria
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Instructions:</strong> Rate each
          criterion 1-5. Calculate average. Recommend hire if average ≥ 3.5 AND
          no criterion below 2.
        </p>
      </div>

      {/* Rating Scale - Chevron Arrows */}
      <div className="flex gap-1 mb-8">
        {/* 1 - Poor */}
        <div 
          className="flex-1 flex items-center justify-center px-4 py-3 font-medium text-white text-sm bg-rating-1"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
          }}
        >
          1 - Poor
        </div>
        
        {/* 2 - Below */}
        <div 
          className="flex-1 flex items-center justify-center px-4 py-3 font-medium text-sm bg-rating-2 text-white"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
          }}
        >
          2 - Below
        </div>
        
        {/* 3 - Meets */}
        <div 
          className="flex-1 flex items-center justify-center px-4 py-3 font-medium text-sm bg-rating-3 text-foreground"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
          }}
        >
          3 - Meets
        </div>
        
        {/* 4 - Exceeds */}
        <div 
          className="flex-1 flex items-center justify-center px-4 py-3 font-medium text-sm bg-rating-4 text-white"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
          }}
        >
          4 - Exceeds
        </div>
        
        {/* 5 - Exceptional */}
        <div 
          className="flex-1 flex items-center justify-center px-4 py-3 font-medium text-sm bg-rating-5 text-white"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)',
          }}
        >
          5 - Exceptional
        </div>
      </div>

      {/* Scorecards */}
      {scorecards.map((scorecard) => (
        <div key={scorecard.number} className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
              {scorecard.number}
            </span>
            <span className="hidden">. </span>
            {scorecard.title}
          </h2>

          {/* Candidate Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <p className="my-0!">
              <strong>Candidate:</strong>{" "}
              <span className="border-b border-border inline-block w-48">
                &nbsp;
              </span>
            </p>
            <p className="my-0!">
              <strong>Date:</strong>{" "}
              <span className="border-b border-border inline-block w-32">
                &nbsp;
              </span>
            </p>
          </div>
          <p className="mb-6">
            <strong>Interviewer:</strong>{" "}
            <span className="border-b border-border inline-block w-48">
              &nbsp;
            </span>
          </p>

          {/* Criteria Table */}
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>What to Look For</th>
                  <th className="w-20 text-center">Score</th>
                </tr>
              </thead>
              <tbody>
                {scorecard.criteria.map((criterion, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{criterion.name}</td>
                    <td>{criterion.description}</td>
                    <td className="text-center">/5</td>
                  </tr>
                ))}
                <tr className="bg-accent/10">
                  <td className="font-bold text-accent" colSpan={2}>
                    TOTAL / AVERAGE
                  </td>
                  <td className="text-center font-bold">
                    /{scorecard.criteria.length * 5} =
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <p className="mb-2">
              <strong>Notes:</strong>
            </p>
            <div className="border border-border rounded-md p-4 min-h-20 bg-card">
              &nbsp;
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-6">
            <p className="my-0!">
              <strong>Recommendation:</strong>{" "}
              <span className="inline-flex gap-4 flex-wrap mt-2">
                <span className="inline-flex items-center gap-1">
                  <span className="w-4 h-4 border border-border rounded-sm inline-block"></span>{" "}
                  Strong Hire
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-4 h-4 border border-border rounded-sm inline-block"></span>{" "}
                  Hire
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-4 h-4 border border-border rounded-sm inline-block"></span>{" "}
                  No Hire
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-4 h-4 border border-border rounded-sm inline-block"></span>{" "}
                  Strong No Hire
                </span>
              </span>
            </p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Owner: HR Coordinator
        </p>
      </div>
    </div>
  );
}
