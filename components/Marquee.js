const DEFAULT_ITEMS = [
  "Special Steel",
  "Iron Making",
  "Ferro Alloy",
  "Round Bars",
  "Wire Rods",
  "Oxygen",
  "Power",
  "Circularity",
];

export default function Marquee({ items = DEFAULT_ITEMS }) {
  const track = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-dash">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
