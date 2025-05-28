const eventSelector = document.getElementById("eventSelector");
const memoryContainer = document.getElementById("memoryContainer");

fetch("data/memories.json")
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(eventName => {
      const option = document.createElement("option");
      option.value = eventName;
      option.textContent = eventName;
      eventSelector.appendChild(option);
    });

    eventSelector.addEventListener("change", () => {
      const selectedEvent = eventSelector.value;
      memoryContainer.innerHTML = "";

      if (data[selectedEvent]) {
        data[selectedEvent].photos.forEach(photo => {
          const img = document.createElement("img");
          img.src = photo.src;

          const caption = document.createElement("div");
          caption.className = "caption";
          caption.textContent = photo.caption;

          const div = document.createElement("div");
          div.appendChild(img);
          div.appendChild(caption);

          memoryContainer.appendChild(div);
        });
      }
    });
  });
