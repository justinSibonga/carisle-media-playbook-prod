"use client";

type Person = {
  name: string;
  role: string;
};

type Department = {
  id: string;
  title: string;
  members: Person[];
};

const departments: Department[] = [
  { id: "accounting", title: "Accounting", members: [{ name: "Amica Castro", role: "Accounting" }] },
  { id: "hr", title: "HR & Admin", members: [{ name: "Agatha Adelino", role: "HR & Admin" }] },
  { id: "sales", title: "Sales", members: [{ name: "Danica Lagria", role: "Sales" }] },
  { id: "marketing", title: "Marketing", members: [{ name: "Hanna Jocoya", role: "Marketing" }, { name: "Jessica Quinones", role: "Marketing" }] },
  { id: "creatives", title: "Creatives", members: [{ name: "Krisna Solis", role: "Creatives" }] },
  { id: "video", title: "Video Marketing", members: [{ name: "Ivan Matias", role: "Video Marketing" }] },
  { id: "dev", title: "Web Development", members: [{ name: "Maui Rayos", role: "Web Developer" }, { name: "Justin Sibonga", role: "Web Developer" }] },
];

// Optimized Apple-style card - clean design with no borders
function PersonCard({ person, isCEO = false }: { person: Person; isCEO?: boolean }) {
  return (
    <div
      className={`relative rounded-[20px] overflow-hidden ${isCEO ? 'w-[180px] h-[220px]' : 'w-[130px] h-[180px]'}`}
      style={{
        background: 'linear-gradient(180deg, #f5f5f5 0%, #ebebeb 100%)',
        boxShadow: '0 8px 32px -8px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pb-14">
        <span className={`font-medium text-neutral-400 ${isCEO ? 'text-4xl' : 'text-3xl'} tracking-tighter`}>
          {person.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div 
        className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg px-2.5 py-2 flex flex-col items-center justify-center text-center"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className={`font-semibold text-neutral-900 leading-snug tracking-tight line-clamp-1 w-full ${isCEO ? 'text-[13px]' : 'text-[11px]'}`}>{person.name}</div>
        <div className={`font-medium text-neutral-500 uppercase tracking-wider mt-0.5 line-clamp-2 w-full leading-tight ${isCEO ? 'text-[8px]' : 'text-[7px]'}`}>{person.role}</div>
      </div>
    </div>
  );
}

function DepartmentColumn({ dept }: { dept: Department }) {
  return (
    <div className="flex flex-col items-center">
      {/* Department label - replaced backdrop-blur with solid background */}
      <div className="px-4 py-1.5 rounded-full bg-amber-50 shadow-sm mb-4">
        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-800 whitespace-nowrap">{dept.title}</span>
      </div>
      {/* Members stacked */}
      {dept.members.map((member, idx) => (
        <div key={idx} className="flex flex-col items-center">
          {idx > 0 && <div className="w-px h-4 bg-amber-300/30" />}
          <PersonCard person={member} />
        </div>
      ))}
    </div>
  );
}

export default function OrgChartPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div id="tour-header" className="sticky top-0 bg-background z-40 pt-14 md:pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-1.5 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
            <span className="text-primary">Carisle Media</span> <span className="text-primary">Organization</span>
          </h1>
        </div>
        <div className="h-px w-full bg-border mt-4" />
      </div>

      {/* Mobile Layout - Clean grid of person cards */}
      <div className="md:hidden px-4 mt-6">
        {/* Leadership */}
        <div className="flex flex-col items-center mb-6">
          <div id="tour-ceo">
            <PersonCard person={{ name: "Juliana", role: "Chief Executive Officer" }} isCEO={true} />
          </div>
          <div className="w-px h-4 bg-amber-300/30" />
          <PersonCard person={{ name: "Danica Lagria", role: "Operations Coordinator" }} isCEO={true} />
        </div>
        
        {/* All team members in a grid - using the same PersonCard component */}
        <div id="tour-departments" className="grid grid-cols-2 gap-3">
          {departments.flatMap(dept => dept.members).map((member, idx) => (
            <div key={idx} className="flex justify-center">
              <PersonCard person={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Original horizontal tree */}
      <div className="hidden md:block overflow-x-auto pb-4">
        <div className="flex flex-col items-center px-6 mt-8 min-w-max">
          {/* CEO */}
          <div id="tour-ceo">
            <PersonCard person={{ name: "Juliana", role: "Chief Executive Officer" }} isCEO={true} />
          </div>
          <div className="w-px h-6 bg-amber-300/30" />
          
          {/* Operations Coordinator */}
          <PersonCard person={{ name: "Danica Lagria", role: "Operations Coordinator" }} isCEO={true} />
          <div className="w-px h-6 bg-amber-300/30" />
          
          {/* Horizontal line container - width matches departments row exactly */}
          <div id="tour-departments" className="flex">
            {departments.map((dept, idx) => (
              <div key={dept.id} className="flex flex-col items-center" style={{ width: 130, marginRight: idx < departments.length - 1 ? 24 : 0 }}>
                {/* Horizontal line segment - half on each side, except first/last */}
                <div className="relative w-full h-px">
                  {idx > 0 && <div className="absolute top-0 right-1/2 left-[-12px] h-px bg-amber-300/30" />}
                  {idx < departments.length - 1 && <div className="absolute top-0 left-1/2 right-[-12px] h-px bg-amber-300/30" />}
                </div>
                {/* Vertical connector down */}
                <div className="w-px h-6 bg-amber-300/30" />
                <DepartmentColumn dept={dept} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
