function Title({ text, caption }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center">
      <h2
        className="text-3xl font-bold text-gray-2 relative flex items-center justify-center gap-3 
              before:contents-[''] before:block before:h-[2px] before:w-12 before:bg-blue 
              after:contents-[''] after:block after:h-[2px] after:w-12 after:bg-blue"
      >
        {text}
      </h2>
      <p className="text-base text-center text-gray-4">{caption}</p>
    </div>
  );
}

export default Title;
