import { reportComponentActions } from "components/career/year-report/year-report.js";

const reports = document.querySelectorAll(".year-report");

const yearsRecords = [
  { year: 2024, description: "test" },
  { year: 2025, description: "test" },
  { year: 2026, description: "test" },
  { year: 2027, description: "test" },
  { year: 2028, description: "test" },
  { year: 2029, description: "test" },
];

reports.forEach((report, index) => {
  reportComponentActions({
    parent: report,
    elementsInputProperties: yearsRecords[index],
  }).applyProperties();
});
