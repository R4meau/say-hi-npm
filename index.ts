#!/usr/bin/env node

export default function sayHiNPM(): void {
  console.log('hi');
  return null;
}

if (require.main === module) sayHiNPM();
