#!/usr/bin/env node

export default function sayHiNPM(): void {
  console.log('hi');
}

if (require.main === module)
  sayHiNPM();