export function ButtonResetScroll() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop} className="md:w-16 w-12 md:h-16 h-12  rounded-full bg-white shadow-lg flex justify-center items-center fixed bottom-14 md:right-10 right-5 border ">
      <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 14L13.1791 2L25 14" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
