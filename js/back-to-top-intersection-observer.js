export default function backToTopIntersectionObserver() {
  const articleHeader = document.querySelector(".article-header")
  const articleHeaderHeight = articleHeader.offsetHeight
  const backToTop = document.querySelector(".back-to-top")

  const articleHeaderOptions = {
    rootMargin: `-${articleHeaderHeight}px  0px 0px 0px`,
  }

  const articleHeaderObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        backToTop.classList.add("show")
      } else {
        backToTop.classList.remove("show")
      }
    })
  }, articleHeaderOptions)

  articleHeaderObserver.observe(articleHeader)
}
