 let menuList = document.getElementById("menuList");
      let menuLinks = document.getElementsByClassName("nav-link");
      let initialPosition = "75%";

      let percentages = ["75%", "50%", "25%", "0"];

      let r = document.querySelector(":root");

      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", (event) => {
          event.preventDefault();

          let targetPosition = percentages[i];
          menuList.classList.remove("clicked");

          setPositions(initialPosition, targetPosition);

          setTimeout(() => {
            menuList.classList.add("clicked");
          }, 0);

          initialPosition = targetPosition;
        });

        function setPositions(start, end) {
          r.style.setProperty("--initial-position", start);
          r.style.setProperty("--target-position", end);
        }
      }