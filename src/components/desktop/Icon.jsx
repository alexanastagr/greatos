export default function Icon({ ic, handler }) {
  return (
    <div className="iconarea" onClick={handler}>
      <div className={`icon ${ic}`}></div>
      <div className="text">{ic}</div>
    </div>
  );
}
