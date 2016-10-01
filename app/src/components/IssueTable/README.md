## IssueTable Component
A component that shows as a table with issues.  Has a callback to request more data to be loaded.

### Example

```js
<IssueTable
  issues={issues}
  headers={headers}
  isMobile={true}
  onRequestMore={this.handleRequestMore}
/>
```
