interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="bg-bg-tag px-2 py-0.5 rounded-[5px] text-[10px] font-normal">
      {label}
    </span>
  );
}
