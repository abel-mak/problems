function minimumDeletions(s: string): number {
  let ca = 0;
  let cb = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') ca++;
    else cb++;
    ca = Math.min(ca, cb);
  }
  return ca;
}

console.log(minimumDeletions('aababbab'));
console.log(minimumDeletions('bbaaaaabb'));
console.log(
  minimumDeletions(
    'ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa'
  )
);
