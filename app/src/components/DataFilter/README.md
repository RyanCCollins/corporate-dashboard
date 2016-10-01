## DataFilter Component
A component that allows for filtering anytype of data.

### Example

```js
<DataFilter
  onSelectItem={this.handleSelectItem}
  filter={{ status: 'All', order: 'None', state: 'All' }}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **onSelectItem**    | Func   |             | A callback function
| **filter**    | Object   |             | An object with the keys shown above.  Represents a complex filter type.
