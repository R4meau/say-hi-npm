#!/usr/bin/env node

export default function sayHiNPM(): void {
  console.log('hello there!');
}

if (require.main === module) sayHiNPM();
