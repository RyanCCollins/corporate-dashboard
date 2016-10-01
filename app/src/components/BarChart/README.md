## BarChart Component
A component that represents a bar chart, showing key metrics data.

### Example

```js
<BarChart
  keyMetrics={...}
  onSelectIndex={...}
  onClearIndex={...}
  labels={...}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **keyMetrics**    | Object   |             | Key Metrics data Data Object
| **labels**    | Object   |             | Labels Data Object
| **onClearIndex**    | Func   |             | Callback when selected index is cleared.
| **onSelectIndex**    | Func   |             | Callback when selected index is selected.
| **activeIndex**    | Integer   |             | The integer representing the value that is selected.


### Other Information
If reusing, then the keyMetrics can be removed and replaced with generic data.
