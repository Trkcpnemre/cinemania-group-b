async function loadHTML(id, filePath) {
  const container = document.getElementById(id);
  try {
    const res = await fetch(filePath);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p style="color:red;">${filePath} yüklenemedi.</p>`;
    console.error(`Hata: ${filePath}`, err);
  }
}

// Parçaları yükle
loadHTML("header", "./partials/header.html");
loadHTML("library-list", "./partials/library-list.html");
loadHTML("category", "./partials/category.html");
