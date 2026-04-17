import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { WorkHoursAttendanceSection } from "@/components/hr-policies/work-hours-attendance/work-hours-attendance-section";

export default function WorkHoursAttendancePage() {
  return (
    <PlaybookPageLayout>
      <WorkHoursAttendanceSection />
    </PlaybookPageLayout>
  );
}
