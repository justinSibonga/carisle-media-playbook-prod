import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { FileSystemSection } from "@/components/playbook/file-system/file-system-section";

export default function FileSystemPage() {
  return (
    <PlaybookPageLayout>
      <FileSystemSection />
    </PlaybookPageLayout>
  );
}
