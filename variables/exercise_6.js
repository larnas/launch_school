const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// no Error
// since the two const variables are separate entities, no error occurs.