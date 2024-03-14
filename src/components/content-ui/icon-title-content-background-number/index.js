export default function IconTitleContentBackgroundNumber({ icon, title, content, background, number }) {
  return (
    <div className={`bg-${background} w-80 h-80 flex flex-col items-center justify-center rounded-2xl`}>
      <div className="text-4xl text-white">{icon}</div>
      <h3 className="text-2xl text-white">{title}</h3>
      <p className="text-white">{content}</p>
      <div className="text-6xl text-white">{number}</div>
    </div>
  );
}