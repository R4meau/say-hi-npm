#!/usr/bin/env node

export default function sayHiNPM(): void {
  console.log('hello');
}

if (require.main === module) sayHiNPM();
