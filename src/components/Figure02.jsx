export function Figure02({ img, title, sub, sub2, sub3 }) {
  return (
    <>
      <figure className="flex flex-col items-center justify-center ">
        <img className="w-[246px] h-[180px]  rounded-xl mb-2" src={img} />
        <figcaption className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium ">{title}</p>
          <div className="text-sm font-light text-center mt-4 w-[246px] flex flex-col gap-2 ">
            <p>{sub}</p>
            <p>{sub2}</p>
            <p>{sub3}</p>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
