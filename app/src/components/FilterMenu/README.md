## FilterMenu Component
A component that shows as a filter with a menu.

### Example

```js
<FilterMenu
  menuItems={...}
  onSelectItem={...}
  label={...}
  selectedItem={...}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **menuItems**    | Array   |             | Array of strings that show as the items that are selectable in the menu
| **onSelectItem**    | Func   |             | Callback with index of item selected.
| **label**    | String   |             | The label, i.e. Filter by Employee.
| **selectedItem**    | String   |             | The selected item from the menuItems array.


### Other Information
