import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface FilterBarProps {
  selectedDomain: string;
  selectedBatch: string;
  selectedWeek: string;
  onDomainChange: (value: string) => void;
  onBatchChange: (value: string) => void;
  onWeekChange: (value: string) => void;
  onReset: () => void;
}

const FilterBar = ({
  selectedDomain,
  selectedBatch,
  selectedWeek,
  onDomainChange,
  onBatchChange,
  onWeekChange,
  onReset,
}: FilterBarProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 shadow-sm">
      <div className="flex-1">
        <label className="text-sm font-medium text-foreground mb-2 block">Domain</label>
        <Select value={selectedDomain} onValueChange={onDomainChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Domains" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Domains</SelectItem>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="fullstack">Full Stack</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="text-sm font-medium text-foreground mb-2 block">Batch</label>
        <Select value={selectedBatch} onValueChange={onBatchChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Batches" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Batches</SelectItem>
            <SelectItem value="2024-jan">January 2024</SelectItem>
            <SelectItem value="2024-feb">February 2024</SelectItem>
            <SelectItem value="2024-mar">March 2024</SelectItem>
            <SelectItem value="2024-apr">April 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="text-sm font-medium text-foreground mb-2 block">Week</label>
        <Select value={selectedWeek} onValueChange={onWeekChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Weeks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Weeks</SelectItem>
            {Array.from({ length: 25 }, (_, i) => i + 1).map((week) => (
              <SelectItem key={week} value={week.toString()}>
                Week {week}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:pt-6">
        <Button onClick={onReset} variant="outline" className="w-full md:w-auto">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
