* * *

✅ 1. Wrapping Inline at Export (Most Common)
--------------------------------------------

```tsx
const MyComponent: React.FC = () => {
  return <div>Hello</div>;
};

export default React.memo(MyComponent);

```

* * *

✅ 2. Inline Anonymous Component
-------------------------------

```tsx
export default React.memo(() => {
  return <div>Anonymous Memo Component</div>;
});

```

> ✅ Use for very simple stateless components (not recommended for components with props or logic).

* * *

✅ 3. Wrapping Named Component Immediately
-----------------------------------------

```tsx
const MyComponent: React.FC = () => {
  return <div>Hello</div>;
};

const MemoizedMyComponent = React.memo(MyComponent);
export default MemoizedMyComponent;

```

> ✅ Useful if you want both `MyComponent` and `MemoizedMyComponent` accessible.

* * *

✅ 4. Using `React.memo` with `propsAreEqual` Comparator
-------------------------------------------------------

```tsx
type Props = {
  name: string;
  age: number;
};

const MyComponent: React.FC<Props> = ({ name, age }) => {
  return <p>{name} - {age}</p>;
};

function propsAreEqual(prev: Props, next: Props) {
  return prev.name === next.name && prev.age === next.age;
}

export default React.memo(MyComponent, propsAreEqual);

```

> ✅ Ideal for deep comparison or conditional update logic.

* * *

✅ 5. Exporting As Named Constant (Reusable In Code)
---------------------------------------------------

```tsx
const MyComponent: React.FC = () => {
  return <div>Reusable Export</div>;
};

export const MemoizedMyComponent = React.memo(MyComponent);

```

> ✅ When you want to reuse `MemoizedMyComponent` by name in multiple places.

* * *

✅ 6. JSX Element Memoization (NOT `React.memo`, but Common Confusion)
---------------------------------------------------------------------

```tsx
const memoizedElement = useMemo(() => <MyComponent />, []);

```

> ⚠️ This is memoizing an **element**, not the component definition. Useful in render-heavy trees.

* * *

✅ 7. Memoizing HOC-wrapped Components
-------------------------------------

```tsx
const EnhancedComponent = withRouter(MyComponent);
export default React.memo(EnhancedComponent);

```

> ✅ Wrap after the HOC for memoization to work on the final result.

* * *

✅ 8. Memoization with Generics
------------------------------

```tsx
type Props<T> = {
  data: T;
};

function GenericComponent<T>({ data }: Props<T>) {
  return <div>{JSON.stringify(data)}</div>;
}

export default React.memo(GenericComponent) as typeof GenericComponent;

```

> ✅ Advanced TypeScript usage — preserves generic type signatures.

* * *

✅ 9. Memoizing Components with Children
---------------------------------------

```tsx
type Props = {
  children: React.ReactNode;
};

const Panel: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default React.memo(Panel);

```

> ✅ React.memo works great even when children are passed — as long as they're stable.

* * *

✅ 10. Memoizing Class Components ❌ (NOT POSSIBLE)
-------------------------------------------------

```tsx
// React.memo only works with functional components.
// ❌ This does not work:
class MyClassComponent extends React.Component {
  render() {
    return <div>Class</div>;
  }
}

// ❌ React.memo(MyClassComponent) — INVALID!

```
* * *