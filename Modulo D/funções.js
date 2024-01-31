function type(num)
{
  if(num % 2 == 0)
  {
    return 'par'
  } else {
    return 'impar'
  }
}

function soma(num_1, num_2)
{
  return num_1 + num_2
}

function fat(num)
{
  var res = 1
  for(var x = num; x > 1; x--)
  {
     res *= x
  }
  return res
}
