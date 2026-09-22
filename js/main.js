function renderDashboard() {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => showProjectDetail(project.id);

    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}">
      <div class="card-content">
        <h2 class="card-title">${project.title}</h2>
        <p class="card-summary">${project.summary}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function showProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  document.getElementById('detail-title').innerText = project.title;
  document.getElementById('detail-description').innerText = project.description;
  document.getElementById('detail-results-text').innerText = project.resultsText;

  document.getElementById('detail-progress-gallery').innerHTML = project.progressImages.map(img => `
    <div class="image-container">
      <img src="${img.url}" alt="${img.caption}">
      <div class="image-caption">${img.caption}</div>
    </div>
  `).join('');

  document.getElementById('detail-results-gallery').innerHTML = project.resultsImages.map(img => `
    <div class="image-container">
      <img src="${img.url}" alt="${img.caption}">
      <div class="image-caption">${img.caption}</div>
    </div>
  `).join('');

  document.getElementById('dashboard-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function showDashboard() {
  document.getElementById('detail-view').classList.add('hidden');
  document.getElementById('dashboard-view').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderDashboard);