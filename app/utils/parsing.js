const justDate = (x) => x.split('T')[0];

export const parseIssue = (issue) => ({
  submitted: justDate(issue.submission),
  closed: issue.isActive ? 'Open' : justDate(issue.closed),
  employee: issue.employee.name,
  status: issue.status,
  customer: issue.customer.name,
  description: issue.description,
});
