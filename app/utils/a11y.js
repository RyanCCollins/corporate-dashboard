const DEFAULT_PAGE_TITLE = 'Corporate Dashboard';

export function updatePageTitle(title) {
  if (document) {
    if (title) {
      document.title = `${title} | ${DEFAULT_PAGE_TITLE}`;
    } else {
      document.title = DEFAULT_PAGE_TITLE;
    }
  }
}

export function getTitleFromRoute(route) {
  const parts = route.split('/');
  return parts[parts.length - 1] || 'Home';
}

export default { updatePageTitle, getTitleFromRoute };
