# @hornbeck/scroll-lock

Simple and lightweight scroll lock for react and vanilla js.

```bash
npm install --save @hornbeck/scroll-lock
```

## Documentation

### React hook

```js
import { useScrollLock } from "@hornbeck/scroll-lock";

function App() {
  const [lockScroll, setLockScroll] = React.useState(false);

  useScrollLock(lockScroll);
}
```

Vanilla js

```js
import { scrollLock } from "@hornbeck/scroll-lock";

// Turn on scroll lock.
const off = scrollLock();

// Turn off scroll lock.
off();
```
