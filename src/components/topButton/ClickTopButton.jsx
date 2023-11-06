export default function ClickTopButton() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
    /** Function back to top */
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  /** End Function back to top */

  return (
    <div>
      <button
        onClick={backToTop}
        id="btn-back-to-top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }}
        className="relative items-center justify-center p-3 mb-2 mr-2 overflow-hidden rounded-full  group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400  focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 14"
        >
          <path
            stroke="currentColor"
            d="M5 13V1m0 0L1 5m4-4 4 4"
          />
        </svg>
      </button>
    </div>
  );
}