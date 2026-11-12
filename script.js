(() => {
  'use strict';
  const jobs = window.JOBS || [];
  const list = document.getElementById('job-list');
  const search = document.getElementById('job-search');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch]);

  const externalLink = (href, label, cls) => {
    try {
      const url = new URL(href);
      if (url.protocol !== 'https:') return '';
      return `<a class="${cls}" href="${esc(url.href)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
    } catch { return ''; }
  };

  function card(job) {
    const experience = job.experience ? `<span>${esc(job.experience)}</span>` : '';
    const source = job.sourceType === 'Employer' ? 'Official careers' : 'LinkedIn listing';
    return `<article class="job-card" id="${esc(job.id)}">
      <div class="job-head"><h2>${esc(job.company)}</h2><span class="location">${esc(job.location)}</span></div>
      <h3>${esc(job.role)}</h3>
      <p class="job-meta muted">${experience}<span>${esc(job.category)}</span></p>
      <div class="job-actions">
        <details><summary>View details</summary>
          ${job.note ? `<p>${esc(job.note)}</p>` : ''}
          <p>Source: ${source}. Collected 12 Nov 2026.</p>
        </details>
        ${externalLink(job.url, job.actionLabel || 'Apply now', 'job-link')}
      </div>
    </article>`;
  }

  function render() {
    const terms = search.value.trim().toLocaleLowerCase('en-IN').split(/\s+/).filter(Boolean);
    const filtered = jobs.filter(job => {
      const haystack = `${job.company} ${job.role} ${job.category} ${job.location} ${job.keywords || ''}`.toLocaleLowerCase('en-IN');
      return terms.every(term => haystack.includes(term));
    });
    list.innerHTML = filtered.map(card).join('');
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'role' : 'roles'} · ${new Set(filtered.map(j => j.company)).size} ${new Set(filtered.map(j => j.company)).size === 1 ? 'company' : 'companies'}`;
    empty.hidden = filtered.length !== 0;
  }

  search.addEventListener('input', render);
  render();
})();
