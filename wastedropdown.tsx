import * as React from "react";
import { Template } from "tinacms";

// 1. Tina block schema
export const wasteDropdownBlockSchema: Template = {
  name: "wasteDropdown", // 👈 this is correct
  label: "Waste Disposal Dropdown",
  fields: [
    { type: "string", name: "title", label: "Title" },
    {
      type: "object",
      name: "items",
      label: "Items",
      list: true,
      fields: [
        { type: "string", name: "label", label: "Dropdown Label" },
        { type: "string", name: "content", label: "Content", ui: { component: "textarea" } },
      ],
    },
  ],
};

// 2. React component for the block
export function WasteDropdownBlock({ data }: { data: any }) {
  const { title, items } = data;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "2rem 0",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h3>
      <select
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem" }}
        value={selectedIndex}
        onChange={(e) => setSelectedIndex(Number(e.target.value))}
      >
        {items.map((item: any, idx: number) => (
          <option key={idx} value={idx}>
            {item.label}
          </option>
        ))}
      </select>

      <div style={{ whiteSpace: "pre-line", fontSize: "1rem", lineHeight: 1.5 }}>
        {items[selectedIndex]?.content}
      </div>
    </div>
  );
}

