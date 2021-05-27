#!/usr/bin/env node

export default function sayHiNPM(): void {
  // eslint-disable-next-line no-console
  console.log('hi');
}

if (require.main === module) sayHiNPM();
