#!/usr/bin/env node

export default function sayHiNPM(): void {
  console.log('hi');
  return;
}

if (require.main === module) sayHiNPM();
