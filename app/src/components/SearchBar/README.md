## SearchBar Component
A reactive search component.

### Example

```js
<SearchBar
  onChangeValue={this.handleChangeValue}
  searchValue="Hello World"
  isSearching={true}
  onClear={this.handleClearSearch}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **onChangeValue**    | Func   |             | A callback function
| **onClear**    | Func   |             | A callback function
| **searchValue**    | String   |             | Any string value
| **isSearching**    | Bool   |             | True / False
