# Smartfish Icons

Icons from `untitled-ui` exported as react components.

## Installation

```
  pnpm add @aquacloud-dev/smartfish-icons
```

## Usage

```tsx
import { HomeIcon } from "@aquacloud-dev/smartfish-icons";
import Button from "@smartfish/ui/base/button";

function MyComponent() {
  return (
    <Button className="flex gap-4 items-center justify-center">
      <HomeIcon className="h-4" />
      Go Home
    </Button>
  );
}
```

## Release
To release a new version follow these steps:
1. Bump the package.json `version`
2. Run the `pack` script
3. Run `npm publish <path-to-tarball> --tag <canary|latest>`
