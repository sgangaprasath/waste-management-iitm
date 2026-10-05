import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  Battery50Icon,
  BeakerIcon,
  BoltIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  CubeIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  GiftIcon,
  GlobeAsiaAustraliaIcon,
  HandRaisedIcon,
  HomeModernIcon,
  InformationCircleIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  PrinterIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  SparklesIcon,
  SunIcon,
  TrashIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

/**
 * Icon set.
 *
 * Heroicons v2 outline throughout, so weight and optical size are consistent
 * everywhere. Keys are semantic, not pictorial — change the mapping here and
 * every usage follows.
 */
export type IconKey =
  | "bin"
  | "map"
  | "bottle"
  | "battery"
  | "people"
  | "plate"
  | "flask"
  | "printer"
  | "box"
  | "leaf"
  | "cup"
  | "sign"
  | "scale"
  | "clipboard"
  | "cycle"
  | "drop"
  | "search"
  | "book"
  | "document"
  | "building"
  | "home"
  | "academic"
  | "shop"
  | "calendar"
  | "gift"
  | "paint"
  | "computer"
  | "tool"
  | "truck"
  | "bolt"
  | "warning"
  | "hazard"
  | "info"
  | "check"
  | "chart"
  | "sun";

const map: Record<IconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  bin: TrashIcon,
  map: MapIcon,
  bottle: ShoppingBagIcon,
  battery: Battery50Icon,
  people: UserGroupIcon,
  plate: SparklesIcon,
  flask: BeakerIcon,
  printer: PrinterIcon,
  box: ArchiveBoxIcon,
  leaf: GlobeAsiaAustraliaIcon,
  cup: CubeIcon,
  sign: MegaphoneIcon,
  scale: ScaleIcon,
  clipboard: ClipboardDocumentListIcon,
  cycle: ArrowPathIcon,
  drop: HandRaisedIcon,
  search: MagnifyingGlassIcon,
  book: BookOpenIcon,
  document: DocumentTextIcon,
  building: BuildingOffice2Icon,
  home: HomeModernIcon,
  academic: AcademicCapIcon,
  shop: BuildingStorefrontIcon,
  calendar: CalendarDaysIcon,
  gift: GiftIcon,
  paint: PaintBrushIcon,
  computer: ComputerDesktopIcon,
  tool: WrenchScrewdriverIcon,
  truck: TruckIcon,
  bolt: BoltIcon,
  warning: ExclamationTriangleIcon,
  hazard: ShieldExclamationIcon,
  info: InformationCircleIcon,
  check: CheckCircleIcon,
  chart: ChartBarIcon,
  sun: SunIcon,
};

export default function Icon({
  name,
  className = "",
  size = 24,
}: {
  name: IconKey;
  className?: string;
  size?: number;
}) {
  const Cmp = map[name] ?? LightBulbIcon;
  return (
    <Cmp
      width={size}
      height={size}
      strokeWidth={1.4}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    />
  );
}

/** Three dots showing how much effort a pledge takes. */
export function EffortScale({ level }: { level: 1 | 2 | 3 }) {
  const label = { 1: "Start today", 2: "Some effort", 3: "Take it on" }[level];
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className="flex gap-[3px]" aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-[5px] w-[5px] rounded-full ${i <= level ? "bg-brand-600" : "bg-ink-line"}`}
          />
        ))}
      </span>
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink-faint">
        {label}
      </span>
    </span>
  );
}
