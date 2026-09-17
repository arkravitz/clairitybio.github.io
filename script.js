document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('inquiry');
form.querySelector('button[type="submit"]').disabled = false;
const draftText = document.getElementById('draft-text');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const workflow = document.getElementById('workflow').value.trim();
  const outcome = document.getElementById('outcome').value.trim();
  if (!workflow) {
    document.getElementById('workflow').setCustomValidity('Please describe the workflow you would like help with.');
    document.getElementById('workflow').reportValidity();
    return;
  }
  const body = `Hi Aaron,\n\nI’d like to discuss a consulting project.\n\nOur workflow / challenge:\n${workflow}${outcome ? `\n\nWhat we’d like to improve:\n${outcome}` : ''}\n\nBest,\n`;
  draftText.value = body;
  document.getElementById('draft-fallback').hidden = false;
  window.location.href = `mailto:aaron@clairitybio.com?subject=${encodeURIComponent('Let’s discuss a biotech AI project')}&body=${encodeURIComponent(body)}`;
});
document.getElementById('workflow').addEventListener('input', (event) => event.target.setCustomValidity(''));
document.getElementById('copy-draft').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(draftText.value);
    document.getElementById('draft-status').textContent = 'Copied. Paste this into an email to aaron@clairitybio.com.';
  } catch {
    draftText.focus();
    draftText.select();
    document.getElementById('draft-status').textContent = 'Select and copy the draft below, then email it to aaron@clairitybio.com.';
  }
});
