function Title({ text }) {
  return (
    <h2
      className="text-3xl font-bold text-gray-2 relative flex items-center justify-center gap-3 
            before:contents-[''] before:block before:h-[2px] before:w-12 before:bg-blue 
            after:contents-[''] after:block after:h-[2px] after:w-12 after:bg-blue"
    >
      {text}
    </h2>
  );
}

export default Title;
