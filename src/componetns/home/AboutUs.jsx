function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center gap-9 container m-auto px-5 md:px-0">
      <div>
        <h2
          className="text-3xl font-bold text-gray-2 relative flex items-center justify-center gap-3 
            before:contents-[''] before:block before:h-[2px] before:w-12 before:bg-blue 
            after:contents-[''] after:block after:h-[2px] after:w-12 after:bg-blue"
        >
          درباره ما
        </h2>
      </div>
      <div className="flex flex-col-reverse items-start justify-center text-base text-gray-4 gap-10 md:gap-20 lg:flex-row">
        <div className="flex-1 flex items-start flex-col gap-5">
          <p>
            من اصلاً کار نمی‌کنم جز اینکه از آن مزیتی بگیرم. در توبیخ در لذتی که
            می خواهد مویی از درد باشد عصبانی نشو به این امید که پرورشی نباشد. تا
            شهوت کور نشوند، بیرون نمی آیند؛ مقصرند که تکالیف خود را رها می کنند
            و دلها، یعنی زحماتشان را نرم می کنند.
          </p>
          <div className="flex items-center">
            <button className="bg-transparent rounded-full text-blue border-2 text-base py-2 px-8 border-blue duration-200 hover:text-white hover:bg-blue">
              بیشتر بخوانید
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p>
            مراقبت از بیمار مهم است که بیمار دنبالش باشد، اما در چنین زمانی
            اتفاق می افتد که کار و درد زیاد است.
          </p>
          <p>من اصلاً کار نمی‌کنم جز اینکه از آن مزیتی بگیرم</p>
          <p>شک یا درد بیهوده در توبیخ در لذتی که می خواهد</p>
          <p>من اصلاً کار نمی‌کنم جز اینکه از آن مزیتی بگیرم</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
